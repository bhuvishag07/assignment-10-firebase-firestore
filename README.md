# Assignment 10 – Store Data in Firebase Firestore Using Express.js

## Student Details

**Name:** Bhuvisha Gohil

**Roll Number:** 150096725190

**Course:** B.Tech CSE

**Year:** Second Year

## Assignment Objective

The objective of this assignment is to create an Express.js application that accepts user data through a POST request and stores the data in Firebase Firestore.

Schema validation is performed before storing the data to ensure that the required user information is valid.

## Technologies Used

* Node.js
* Express.js
* Firebase Admin SDK
* Firebase Firestore
* JavaScript

## Folder Structure

```text
Assignment 10/
├── server.js
├── data.json
├── README.md
├── config/
│   └── firebase.js
├── schema/
│   └── userSchema.js
└── router/
    └── userRouter.js
```

## Description of Files

### server.js

Creates the Express server, enables JSON data handling, connects the router, and runs the server on port 4000.

### config/firebase.js

Connects the application to Firebase Firestore using the Firebase Admin SDK.

### schema/userSchema.js

Contains validation logic for user data.

The following fields are validated:

* Name – Required
* Email – Required and must contain a valid email format
* Age – Required and must be between 16 and 100
* Course – Required

### router/userRouter.js

Contains the POST API route and handles validation, Firestore storage, success responses, and error responses.

### data.json

Contains the Firebase service account credentials used to connect the application to Firebase.

**Note:** This file contains private credentials and should not be uploaded to a public GitHub repository.

## API Endpoint

### POST /api/users

```text
http://localhost:4000/api/users
```

## Request Body

Example of valid user data:

```json
{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "B.Tech CSE"
}
```

## Expected Flow

```text
POST /api/users
        ↓
Receive User Data
        ↓
Schema Validation
        ↓
Valid Data?
     ↓       ↓
    No       Yes
     ↓       ↓
   Error   Firestore
  Response     ↓
          users Collection
               ↓
        Success Response
```

## Firestore Collection

Valid user data is stored in the Firestore collection:

```text
users
```

## Validation

The application checks the received data before storing it in Firestore.

Validation errors include:

```text
Name is required
Email is required
Valid email is required
Age is required
Age must be between 16 and 100
Course is required
```

## Successful Response

When valid data is stored successfully, the API returns:

```text
User stored successfully in Firestore
```

## Error Handling

The application handles errors using appropriate HTTP status codes.

* **400 Bad Request** – Validation error
* **500 Internal Server Error** – Database error

## Firebase Connection

When the application starts successfully, the terminal displays:

```text
Firebase connected successfully
Server is running on port 4000
```

## Testing

### Successful POST Request

The API was tested using Thunder Client with the following data:

```json
{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "B.Tech CSE"
}
```

Response:

```text
User stored successfully in Firestore
```

### Validation Error

An invalid age was used to test schema validation:

```json
{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 12,
    "course": "B.Tech CSE"
}
```

Response:

```text
Age must be between 16 and 100
```
## Folder Structure

<img width="370" height="552" alt="image" src="https://github.com/user-attachments/assets/76ee83f1-8cd9-4bbd-a8fe-1d39df301d83" />


## Screenshots

### 1. Successful Firebase Connection

<img width="992" height="212" alt="087BE8D6-4205-47DB-8F4F-5014EEC6EE4F_4_5005_c" src="https://github.com/user-attachments/assets/15ee1922-3376-4a19-9ded-aec7c770a174" />


Terminal showing:

```text
Firebase connected successfully
Server is running on port 4000
```

### 2. Successful POST Request

<img width="1942" height="778" alt="B1F5AE5E-C328-46CC-AFF8-B6FE6C09536F" src="https://github.com/user-attachments/assets/eb8d9447-d02a-42d0-b24f-18a15cd40fac" />


Thunder Client showing the POST request to:

```text
/api/users
```

and the successful response.

### 3. Data Stored in Firestore

<img width="1522" height="696" alt="C2D21522-B543-4C3D-A244-9BB02348E554" src="https://github.com/user-attachments/assets/bdd4ffe2-f90e-42bb-8439-f95d92c01b22" />


Firebase Firestore showing the `users` collection and stored user data.

### 4. Validation Error

<img width="2156" height="840" alt="38D2846B-2ADE-43BF-A9D6-856A0361CFAB" src="https://github.com/user-attachments/assets/3e09ce78-15d9-4158-96f5-c81ab5d94c31" />


Thunder Client showing the validation error for invalid user data.

## Conclusion

The Express.js application was successfully created and connected to Firebase Firestore. User data is validated before being stored, valid data is successfully added to the `users` collection, and appropriate error messages are returned when validation or database errors occur.
