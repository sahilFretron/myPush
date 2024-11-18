# Webhook API Documentation

## Prehook Webhook Handler

Endpoint for handling pre-hook type webhooks. This endpoint processes webhook notifications and manages job-related status updates.

### Endpoint Details
- **URL**: `/prehook/handle-webhook`
- **Method**: POST
- **Content-Type**: application/json
- **Produces**: application/json

### Request Body
```json
{
    "data": "string",    // Job ID
    "status": number,    // Status code
    "error": "string"    // Error message if any
}
```

### Request Parameters
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| data      | string | Yes      | Unique identifier for the job being processed |
| status    | number | Yes      | Status code indicating the state of the job |
| error     | string | No       | Error message in case of failure (empty if success) |

### Error Responses
- All exceptions are propagated to the caller
- The endpoint will throw appropriate HTTP error codes in case of exceptions

## Business Logic Flow

### Job Retrieval
- Fetches job details using the provided jobId from jobSchedulerRepo
- Throws ResourceNotFoundException if job is not found

### Event Processing
- Sets event type to "update" for the job

### Execute Job
Processes based on status code:
- **Success Case** (status = 200):
  - Creates JobExecutionResult with success status
  - Handles success scenario via handleSuccessCase()
- **Error Case** (status ≠ 200):
  - Logs error message
  - Processes error via handleErrorResponse()

### Error Handling
- Catches and logs any exceptions during processing
- Ensures graceful error handling for all scenarios

### Completion Logic
Logs detailed job information including:
- Job ID
- Organization ID
- Event Type
- Last Schedule Time
- Schedule Time

## Success Case Processing Details

### Data Packet Processing
- Creates CustomTpiDataPacket with response, job ID, and timestamp
- Compares with last response from tpiDataPacketRepo
- Processes vehicles, positions, and devices data

### Vehicle Synchronization
- Compares previous and current vehicle data
- Processes device changes
- Can be disabled via job configuration (DisableVehicleSync)

### Position Data Handling
- Cleanses IMEI data (removes tabs and trims)
- Produces position data to Kafka service
- Updates TPI data packet repository

### Job Updates
- Updates job's last schedule time
- Manages integration job metadata:
  - Resets fail count
  - Updates alert status
  - Updates next schedule time
- Saves updated job information

### Scheduling
Schedules next fixed interval task with:
- Action: TPI_SCHEDULER_ACTION
- Resource: TPI_RESOURCE
- Default interval: 60601000 (1 hour)

## Error Handling Process

### Failure Count Management
- Tracks failures through IntegrationJobMeta
- Increments failCount on each error
- Compares against maxAllowedFailCount

### Retry Logic
#### Normal Failure (failCount < maxAllowedFailCount):
- Special handling for specific job types:
  - tataFleetMan
  - nsTracker
- Applies retry mechanism
- Schedules next attempt using default interval

#### Maximum Failures Reached:
- Sets needToSendAlert flag to true
- Logs continuous failure warning
- Updates schedule time to nextScheduleAfterFailure
- Sets event type to "update"

### Configuration Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| maxAllowedFailCount | number | Maximum allowed consecutive failures |
| nextScheduleAfterFailure | number | Delay before next retry after max failures |
| nextScheduleAfterSuccess | number | Normal interval between job executions |

### Error States
| State | Description | Action |
|-------|-------------|--------|
| Normal Retry | failCount < maxAllowedFailCount | Apply retry mechanism and reschedule |
| Max Failures | failCount >= maxAllowedFailCount | Trigger alert and extend schedule interval |
| Retry Mechanism Failure | Exception in retry process | Fallback to "update" event type |

## executeJob Function - Business Logic Flow

### Main Flow
#### Job Execution Initialization
- Creates new JobExecutionResult instance
- Handles two main execution paths: Prehook and Standard execution

#### Prehook Execution Path
- Calls applyPrehook with GET method
- Processes webhook status:
  - Active Webhook: Returns status 504 with "RETRIED" event
  - Inactive Webhook: Processes response normally
- Sets execution result based on response status:
  - Status 200: Sets success result
  - Other Status: Sets error result with 401 status

#### Standard Execution Path
Processes based on integration type:
- etransSolutions: Fetches vehicle list with credentials
- nsTracker: Retrieves vehicle location data
- etrans: Executes standard GET request
- etransTrackInfo: Gets detailed vehicle tracking info
- trackingExperts: Handles POST requests with 70s timeout
- others: Processes based on HTTP method (GET/POST/PUT)

### Response Processing
#### Success Case (Status 200):
- Parses vehicle records from response
- Converts records to position data
- Sets success status in result

#### Error Cases:
- Null Response: Sets 400 status
- No Records: Sets 400 status with parsing error
- Invalid Response: Sets 401 status

### Error Handling
#### Vehicle Parsing Errors
- Catches VehicleParsingException
- Sets status 400 with specific error message
- Clears response data

#### General Exceptions
- Logs full exception stack trace
- Sets status 400 with generic error message
- Clears response data

### Special Processing
#### Debug Handling
- Special logging for job ID "77b78cf3-e468-4604-8687-5d9f6f6edcfa"
- Logs vehicle registration numbers when available

#### Method Validation
- Validates HTTP methods per integration type
- Returns 400 status for unsupported methods

### Completion
#### Result Generation
- Packages final status code
- Includes error message if applicable
- Contains processed position data for successful executions
- Returns complete JobExecutionResult object

## Critical Variables

### Job State Variables
#### failCount
- **Type**: Integer
- **Location**: IntegrationJobMeta
- **Thresholds**:
  - Must be < maxAllowedFailCount for normal operation
  - Resets to 0 on successful execution
  - Increments on each failure

#### status (from webhook)
- **Type**: Integer
- **Critical Values**:
  - 200: Success case
  - Others: Error case

### Configuration Variables
- **maxAllowedFailCount**: Determines alert triggering
- **needToSendAlert**: Set true when failCount ≥ maxAllowedFailCount
