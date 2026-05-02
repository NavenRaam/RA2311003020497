const VALID_STACK = ["backend"];
const VALID_LEVEL = ["debug", "info", "warn", "error", "fatal"];
const VALID_PACKAGES = [
  "controller", "service", "route", "db", "middleware", "config", "utils"
];

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcjA1NjdAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMzczMiwiaWF0IjoxNzc3NzAyODMyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODBmOTI2MDMtYjIyZS00NDRhLThjNWItYjc0ODI3NGY0ZGI1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicyBuYXZlbiByYWFtIiwic3ViIjoiMGUwNjRjMzctZGE5Ny00MjMwLWEyODEtNjYwZGMyYjQ5YzdmIn0sImVtYWlsIjoic3IwNTY3QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoicyBuYXZlbiByYWFtIiwicm9sbE5vIjoicmEyMzExMDAzMDIwNDk3IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiMGUwNjRjMzctZGE5Ny00MjMwLWEyODEtNjYwZGMyYjQ5YzdmIiwiY2xpZW50U2VjcmV0IjoiRXB4TVJ1SFVZQ1ZldXJiZiJ9.gbBcq8b2gg2OmQBoAltzZK0ms83aDdDV6K5sTPi6TnE";
async function Log(stack, level, pkg, message) {
  try {
    const res = await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });

    const data = await res.json();

  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}

module.exports = Log;