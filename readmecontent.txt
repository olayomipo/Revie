


User Registration:
Endpoint: /user/register
Method: POST
Request Body:
JSON

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secure_password"
}


Response (Success):
JSON

{
  "message": "User registered successfully",
  "user_id": 123
}


User Login:
Endpoint: /user/login
Method: POST
Request Body:
JSON

{
  "email": "john@example.com",
  "password": "secure_password"
}


Response (Success):
JSON

{
  "message": "Login successful",
  "user_id": 123,
  "access_token": "your_access_token_here"
}


Create Review:
Endpoint: /reviews
Method: POST
Request Body:
JSON

{
  "apartment_id": 456,
  "userid": 283,
  "rating": 4,
  "comment": "Great apartment with friendly landlord!",
  "media_uri":  "link to pictures and videos"

}


Response (Success):
JSON

{
  "message": "Review created successfully",
  "review_id": 789
}


Get Reviews for an Apartment:
Endpoint: /apartments/{apartment_id}/reviews
Method: GET
Response (Example):
JSON

{
  "reviews": [
    {
      "review_id": 789,
      "user_id": 123,
      "rating": 4,
      "comment": "Great apartment with friendly landlord!",
    },
    // Other reviews...
  ]
}
