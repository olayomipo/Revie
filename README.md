
# Revie API Documentation

Welcome to the documentation for your Revie API! Below, you'll find details about the available endpoints, request methods, and response formats.

## User Registration

### Endpoint

`POST /user/register`

### Request Body

```JSON
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secure_password"
}
```
### Response (Success)


```JSON

{
  "message": "User registered successfully",
  "user_id": 123
}
```
