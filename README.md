# CoffeeStore

A basic implementation for the api of the coffee store mobile application

## Technologies
Technologies used in that implementation are
- Node js as a javascript runtime environment
- Express
- MongoDB for accessing resources

## Setup
Configure the following environment variables on your machine or server
by editing your .bashrc file on linux or ~/.bash_profile om mac or follow
this [link](https://phoenixnap.com/kb/windows-set-environment-variable) for windows
users.

```
export PORT=<your running port>
export MONGO_URI='your mongodb url'
export DEBUG=app:*
```

## Running
- For running on development, type in your terminal project Dir:

  ```
  npm run dev
  ```

- For running on production, type in your terminal project Dir:

  ```
  npm start
  ```

## Flow
- We have two endpoints, each of them has its own derivative for filtering the associated documents

- I will assume here, that we are running on the development, port: 3000.
  You can modify the following with your host and port as preffered.

  1. Endpoint for getting all coffee machines 
  - 
  ```
   http://localhost:3000/api/coffee-machines
  ```
  - For filtering those coffee machines, I am using query strings for getting
    filteration parameters, like for example.If you want to get all the small
    coffee machines that are not water line comatible, here is the endpoint
    ```
    http://localhost:3000/api/coffee-machines?product_type=COFFEE_MACHINE_SMALL&water_line_compatible=false
    ```
    And for getting all the larg machines, here is the endpoint

    ```
    http://localhost:3000/api/coffee-machines?product_type=COFFEE_MACHINE_LARGE
    ```


  2. Endpoint for getting all coffee machines 
  - 
    ```
    http://localhost:3000/api/coffee-pods
    ```
  - For filtering those coffee pods, I am using also query strings for getting
    filteration parameters, if you want to get all espresso pods, with vanilla 
    flavor and pack size 3 or 36, here is the endpoint.
    ```
    http://localhost:3000/api/coffee-pods?product_type=ESPRESSO_POD&pack_size=3&coffee_flavor=vanilla
    ```
    And so on.

    Thanks