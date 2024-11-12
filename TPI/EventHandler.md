classDiagram
    class EventHandler {
        -JobExecutor jobExecutor
        -JobSchedulerRepo jobSchedulerRepo
        -SchedulerService schedulerService
        -TpiDataPacketRepo tpiDataPacketRepo
        -KafkaService kafkaService
        -TataFleetManService tataFleetManService
        -NSTrackerService nsTrackerService
        -NotificationService notificationService
        +handleJobEvent(IntegrationJob)
        +handleScheduledTask(SchedulerTask)
        +handleDeleteCase(IntegrationJob)
        -handleSuccessCase(IntegrationJob, JobExecutionResult)
        -handleErrorResponse(IntegrationJob)
        -comparePreviousResponseAndProduceChanges()
        -calculatePositionParams()
        -applyRetryMechanism()
    }

    class JobExecutor {
        +executeJob(IntegrationJob)
    }

    class JobSchedulerRepo {
        +saveJob()
        +getJobById()
        +deleteJob()
    }

    class TpiDataPacketRepo {
        +getTpiDataPacket()
        +upsertTpiDataPacket()
        +deleteTpi()
    }

    class KafkaService {
        +producePosition()
        +produceVehicle()
        +updateVehicle()
        +deleteVehicle()
        +produceDevice()
        +deleteDevice()
        +produceJobEvents()
    }

    class SchedulerService {
        +scheduleFixIntervalTask()
        +scheduleTask()
        +removeTask()
    }

    class TataFleetManService {
        +getTataFleetManList()
        +parseTFTokenFromXML()
    }

    class NSTrackerService {
        +getNSTrackerToken()
    }

    class NotificationService {
        +sendNotificationOnJobFailure()
    }

    EventHandler --> JobExecutor
    EventHandler --> JobSchedulerRepo
    EventHandler --> SchedulerService
    EventHandler --> TpiDataPacketRepo
    EventHandler --> KafkaService
    EventHandler --> TataFleetManService
    EventHandler --> NSTrackerService
    EventHandler --> NotificationService

    note for EventHandler "Main orchestrator for handling\njob events and scheduled tasks"

stateDiagram-v2
    [*] --> JobReceived
    
    JobReceived --> ExecuteJob: handleJobEvent()
    ExecuteJob --> Success: Status 200
    ExecuteJob --> Timeout: Status 504
    ExecuteJob --> Error: Other Status
    
    Success --> ProcessResponse: handleSuccessCase()
    Success --> UpdateJobMeta
    Success --> ScheduleNextRun
    
    Timeout --> SaveJob
    Timeout --> ScheduleRetry
    
    Error --> RetryMechanism: For TataFleetMan/NSTracker
    Error --> IncrementFailCount
    Error --> CheckFailThreshold
    
    CheckFailThreshold --> ScheduleRetry: Below Threshold
    CheckFailThreshold --> TriggerAlert: Above Threshold
    
    RetryMechanism --> UpdateToken
    UpdateToken --> ProduceJobEvent
    
    ProcessResponse --> CompareData: comparePreviousResponseAndProduceChanges()
    CompareData --> ProduceKafkaEvents
    
    state fork_state <<fork>>
    ProduceKafkaEvents --> fork_state
    fork_state --> ProduceVehicle
    fork_state --> ProduceDevice
    fork_state --> ProducePosition
    
    state join_state <<join>>
    ProduceVehicle --> join_state
    ProduceDevice --> join_state
    ProducePosition --> join_state
    
    join_state --> SaveTpiDataPacket
    
    ScheduleNextRun --> [*]
    ScheduleRetry --> [*]
    TriggerAlert --> [*]
    SaveTpiDataPacket --> [*]
