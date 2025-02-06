# API Error Codes

## HTTP Status Codes
- 400: Validation Error
- 401: Authentication Required
- 404: Resource Not Found
- 500: Internal Server Error

## Validation Error Format
```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Validation Error",
    "details": [
      { "field": "fieldName", "message": "Error description" }
    ]
  }
}
```

## Rate Limiting
All API endpoints are protected with rate limiting (100 requests/15min). Exceeding limits returns:
```json
{
  "success": false,
  "error": {
    "code": 429,
    "message": "Too many requests"
  }
}
