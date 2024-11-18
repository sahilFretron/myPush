# Scheduler Service Documentation

## Table of Contents
- [1. Service Flow](#1-service-flow)
- [2. Core Concepts](#2-core-concepts)
- [3. Scheduling Patterns](#3-scheduling-patterns)
- [4. State Management](#4-state-management)
- [5. Implementation Guidelines](#5-implementation-guidelines)
- [6. Performance Considerations](#6-performance-considerations)
- [7. Common Use Cases](#7-common-use-cases)

## 1. Service Flow

### 1.1 Task Registration Flow
```mermaid
flowchart TD
    A[Start: registerTask] --> B[Parse JSON to SchedulerTask]
    B --> C{Check isAutoSchedulable}
    C -- null --> D[Set isAutoSchedulable = false]
    D --> E[Validate Scheduler Task]
    C -- not null --> E
    E --> F[Generate taskId]
    F --> G{Check scheduleTime}
    G -- null/past --> H{Is AutoSchedulable?}
    H -- yes --> I[Calculate Next Schedule Time]
    I --> J[Set new scheduleTime]
    J --> K[Set taskId]
    H -- no --> K
    G -- future --> K
    K --> L{Check registeredTopics}
    L -- null --> M[Initialize empty list]
    L -- not null --> N[Save Task]
    M --> N
    
    subgraph Calculate Next Schedule Time
        I --> O{Check Schedule Type}
        O --> P[AFTER_INTERVAL]
        O --> Q[DAILY]
        O --> R[WEEKLY]
        O --> S[DAILY_AT_HOUR]
        O --> T[DAILY_AT_TIME]
        O --> U[MONTHLY]
    end
```

### 1.2 Task Lifecycle Flow
```mermaid
stateDiagram-v2
    [*] --> Registered: Task Creation
    Registered --> Scheduled: Schedule Time Set
    Scheduled --> Executing: Time Reached
    Executing --> Completed: One-Time Task
    Executing --> Scheduled: Recurring Task
    Completed --> [*]
```

## 2. Core Concepts

### 2.1 Task Types

#### One-Time Tasks
- Non-repeating tasks with a fixed execution time
- Minimal configuration required
```json
{
    "taskId": "70f54760..._Registry-Manager-Resource_document.expire.action",
    "isAutoSchedulable": false,
    "scheduleTime": 1808937000000
}
```

#### Recurring Tasks
- Automatically rescheduled based on defined patterns
- Requires schedule type and corresponding parameters
```json
{
    "taskId": "a14614b6..._ISSUE_Issue_Summary",
    "isAutoSchedulable": true,
    "scheduleType": "DAILY_AT_HOUR",
    "dayHours": [9]
}
```

### 2.2 Task Identification
Each task has three core identification components:
```
taskId = ${resourceId}_${resourceType}_${action}
```

Example formations:
- Document task: `"70f54760-37fb-4477-8813-641abf1140de_Registry-Manager-Resource_document.expire.action"`
- Report task: `"a14614b6-9f27-4738-b8e9-32bcbc0ddb17_ISSUE_Issue_Summary"`

## 3. Scheduling Patterns

### 3.1 Available Schedule Types

#### AFTER_INTERVAL
```kotlin
val intervalTask = SchedulerTask(
    scheduleType = "AFTER_INTERVAL",
    interval = 3600000 // 1 hour in milliseconds
)
```

#### DAILY_AT_HOUR
```kotlin
val dailyTask = SchedulerTask(
    scheduleType = "DAILY_AT_HOUR",
    dayHours = listOf(9, 15) // 9 AM and 3 PM
)
```

#### WEEKLY
```kotlin
val weeklyTask = SchedulerTask(
    scheduleType = "WEEKLY",
    weekDays = listOf(1, 3, 5), // Mon, Wed, Fri
    timeOfDay = 32400000 // 9 AM in milliseconds
)
```

#### MONTHLY
```kotlin
val monthlyTask = SchedulerTask(
    scheduleType = "MONTHLY",
    datesOfMonth = listOf(1, 15), // 1st and 15th
    timesOfDay = listOf(32400000) // 9 AM
)
```

### Schedule Type Impacts

1. **AFTER_INTERVAL**
   - Required: `interval`
   - Impact: Task reschedules after fixed interval
   - Next Schedule = currentScheduleTime + interval

2. **DAILY**
   - Required: `timeOfDay`
   - Impact: Executes daily at specified time
   - Rolls over to next day if current time is past

3. **WEEKLY**
   - Required: `weekDays`, `timeOfDay`
   - Impact: Executes on specified days at given time
   - Calculates next occurrence based on current weekday

4. **DAILY_AT_HOUR**
   - Required: `dayHours`
   - Impact: Multiple executions per day at specified hours
   - Sorts hours for sequential execution

5. **DAILY_AT_TIME**
   - Required: `timesOfDay`
   - Impact: Multiple executions at specific times daily
   - Sorts times for sequential execution

6. **MONTHLY**
   - Required: `datesOfMonth`, `timesOfDay`
   - Impact: Executes on specified dates at given times
   - Handles month rollover

### Validation Rules

1. **Auto-schedulable Tasks**
   - Must have valid `scheduleType`
   - Must have required properties for chosen type
   - Validates schedule-specific parameters

2. **Non-auto-schedulable Tasks**
   - Must have valid `scheduleTime`
   - No additional scheduling parameters required
