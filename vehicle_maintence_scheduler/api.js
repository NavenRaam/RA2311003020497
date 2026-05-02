const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcjA1NjdAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDkwNywiaWF0IjoxNzc3NzA0MDA3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYmNhMzNlZTEtMjY4My00NmQ3LWJhNzctMWIyNGU4ZGY5MzljIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicyBuYXZlbiByYWFtIiwic3ViIjoiMGUwNjRjMzctZGE5Ny00MjMwLWEyODEtNjYwZGMyYjQ5YzdmIn0sImVtYWlsIjoic3IwNTY3QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoicyBuYXZlbiByYWFtIiwicm9sbE5vIjoicmEyMzExMDAzMDIwNDk3IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiMGUwNjRjMzctZGE5Ny00MjMwLWEyODEtNjYwZGMyYjQ5YzdmIiwiY2xpZW50U2VjcmV0IjoiRXB4TVJ1SFVZQ1ZldXJiZiJ9.elSQUWFQJSvpYD3ZZpe49RdYNe3EeHnM8dIu9y59kqs"
const BASE_URL = "http://20.207.122.201/evaluation-service";

async function fetchDepots() {
  const res = await fetch(`${BASE_URL}/depots`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });
  return res.json();
}

async function fetchVehicles() {
  const res = await fetch(`${BASE_URL}/vehicles`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });
  return res.json();
}


module.exports = { fetchDepots, fetchVehicles };