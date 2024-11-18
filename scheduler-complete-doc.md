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

## 4. State Management

### 4.1 State Transitions

#### Registration Phase
```kotlin
// Basic validation
if (task.isAutoSchedulable) {
    requireNotNull(task.scheduleType) { "Schedule type required" }
    validateScheduleTypeParameters(task)
} else {
    requireNotNull(task.scheduleTime) { "Schedule time required" }
}
```

#### Execution Phase
```kotlin
when (task.scheduleType) {
    "DAILY_AT_HOUR" -> calculateNextDailyTime(task.dayHours)
    "WEEKLY" -> calculateNextWeeklyTime(task.weekDays, task.timeOfDay)
    // Other schedule types...
}
```

## 5. Implementation Guidelines

### 5.1 Error Prevention

#### Required Field Validation
```kotlin
fun validateSchedulerTask(task: SchedulerTask) {
    when (task.scheduleType) {
        "DAILY_AT_HOUR" -> {
            require(!task.dayHours.isNullOrEmpty()) {
                "Must have at least one hour of day"
            }
        }
        // Other validations...
    }
}
```

#### Time Calculations
```kotlin
fun calculateNextScheduleTime(task: SchedulerTask): Long {
    return when (task.scheduleType) {
        "AFTER_INTERVAL" -> task.scheduleTime + task.interval
        "DAILY_AT_HOUR" -> getNextScheduledHour(task.dayHours)
        // Other calculations...
    }
}
```

### 5.2 Best Practices

1. **Task Creation**
   - Always generate taskId using the defined pattern
   - Initialize empty lists for null collections
   - Validate schedule parameters before saving

2. **Schedule Management**
   - Sort time arrays for efficient next-time calculation
   - Handle timezone conversions consistently
   - Consider buffer time for execution windows

3. **Error Handling**
   - Validate input parameters thoroughly
   - Handle edge cases in time calculations
   - Implement retry mechanisms for failed tasks

## 6. Performance Considerations

### 6.1 Data Storage
```kotlin
// Recommended indexes
{
    "taskId": 1,          // Unique
    "scheduleTime": 1,    // Range queries
    "resourceType": 1,    // Filtering
    "isAutoSchedulable": 1 // Type queries
}
```

### 6.2 Time Complexity
- Task Retrieval: O(1) using taskId
- Schedule Calculation:
  - Simple patterns (AFTER_INTERVAL): O(1)
  - Complex patterns (MONTHLY): O(n) where n = dates × times

### 6.3 Resource Usage
- Memory footprint varies by schedule type
- Consider batch processing for high-volume periods
- Implement pagination for task listings

## 7. Common Use Cases

### 7.1 Document Management
```kotlin
// Document expiry
val expiryTask = SchedulerTask(
    resourceType = "Registry-Manager-Resource",
    action = "document.expire.action",
    scheduleTime = futureTimestamp,
    isAutoSchedulable = false
)
```

### 7.2 Reporting
```kotlin
// Daily reports
val reportTask = SchedulerTask(
    resourceType = "ISSUE",
    action = "Issue_Summary",
    scheduleType = "DAILY_AT_HOUR",
    dayHours = listOf(9),
    isAutoSchedulable = true
)
```
