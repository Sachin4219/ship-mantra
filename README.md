## ShipMantra assignment
### This is a submission for ShipMantra Software Dev task 1

## Process of writing the Api for Order data structure
#### 1) Observe the mongoose Schema carefully and identify what data is dynamic or what are field that are required for creation 
#### 2) Create a api endpoint for getting the post request
#### 3) Parse the the request body and get order details out
#### 4) Create a structured JSON object for response
#### 5) Test the API

## Api for getting the status of order or current phase of delivery
#### 1) Observe the trips field in Order schema
#### 2) Create a api endpoint having Id as parameter in URL for getting the get status request
#### 3) Get the Id out of request and find the required order
#### 4) Iterate over the trips field in required Order until we find a trips with status of pending
#### 5) Create response object using the trip and test Api
