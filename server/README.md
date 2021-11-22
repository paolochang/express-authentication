# EXPRESS-AUTHENTICATION: SERVER

This is practice of user authentication

## Initial Setup

Create `.env` under `/server`

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/<db_name>
JWT_KEY=<jwt_secret>
```

## Run Server

```
$ cd server
$ npm run dev
```

## APIs

### POST /api/auth/register

```json
{
  "username": "kildong",
  "password": "password",
  "confirmPassword": "password",
  "name": "홍길동"
}
```

### POST /api/auth/login

```json
{
  "username": "kildong",
  "password": "password"
}
```

### GET /api/auth/check

no request body needed

### POST /api/auth/logout

no request body needed

### DELETE /api/auth/remove

no request body needed
