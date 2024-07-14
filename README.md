
# Revie API Documentation

Welcome to the documentation for your Revie API! Below, you'll find details about the available endpoints, request methods, and response formats.

## User

### User Registration

#### Endpoint

`POST /user/register`

#### Request Body

```JSON
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secure_password"
}
```
#### Response 201 (Created)


```JSON

{
  "message": "User registered successfully",
  "user_id": 123
}
```

### User Login

#### Endpoint

`POST /user/login`

#### Request Body

```JSON
{
  "email": "john@example.com",
  "password": "secure_password"
}
```
#### Response (Success)


```JSON

{
  "message": "Login successful",
  "user_id": 123,
  "access_token": "your_access_token_here"
}
```

## Apartment

### Create Apartment

#### Endpoint

`POST /apartment`

#### Request Body

```JSON
{
  "name": "john doe",
  "address": "234 Roseburn Lane ...",
  "contact": " +1 893948984",
  "amenities": "...",
}
```
#### Response 201 (Created)


```JSON

{
  "message": "Apartment created successfully",
  "apartment_id": 123
}
```

## Review

### Create Review

#### Endpoint

`POST /review`

#### Request Body

```JSON
{
  "apartment_id": 456,
  "userid": 283,
  "rating": 4,
  "comment": "Great apartment with friendly landlord!",
  "media_uri":  "link to pictures and videos"
}
```
#### Response 201 (Created)


```JSON

{
  "message": "Review created successfully",
  "review_id": 789
}
```

