# Notification System Design

---

## What It Does

- Fetch all notifications for a user
- Create new notifications
- Mark notifications as read
- Push updates in real-time (via WebSockets or SSE)


### Get All Notifications

```
GET /notifications
```

Returns a list of notifications for the authenticated user.

**Response**
```json
{
  "notifications": [
    {
      "id": "abc123",
      "type": "event",
      "message": "You have a new event",
      "timestamp": "2026-04-22T17:51:30",
      "isRead": false
    }
  ]
}
```

---

### Create a Notification

```
POST /notifications
```

**Request Body**
```json
{
  "type": "event",
  "message": "New notification message"
}
```

**Response**
```json
{ "msg": "added" }
```

---

### Mark a Notification as Read

```
PATCH /notifications/:id
```

**Response**
```json
{ "msg": "updated" }
```

---

## Notification Shape

| Field       | Type                              | Description                        |
|-------------|-----------------------------------|------------------------------------|
| `id`        | string                            | Unique identifier                  |
| `type`      | `event` \| `result` \| `placement` | Category of the notification      |
| `message`   | string                            | The notification text              |
| `timestamp` | datetime                          | When it was created                |
| `isRead`    | boolean                           | Whether the user has seen it       |
