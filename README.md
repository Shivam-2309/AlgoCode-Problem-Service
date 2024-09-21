
# Algocode Problem Setting Service

## How Routing is working in the project

-/api/v1/problems/ping
    - because the route starts with /api
        -/api   ->   /v1   -> /problems   ->   /ping
        apiRouter -> v1Router -> problemRouter -> problemController -> service layer
        // All of them are middlewares only 
