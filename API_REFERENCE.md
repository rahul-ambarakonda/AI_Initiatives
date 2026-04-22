# API Reference - AI Initiatives Platform

## Base URL

```
Development: http://localhost:3000
Production: https://ai-initiatives.com (after deployment)
```

---

## POST /api/demos

Submit a new demo request.

### Request

**Method**: `POST`  
**Content-Type**: `application/json`

**Parameters**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Full name (min 2 characters) |
| `email` | string | Yes | Valid email address |
| `company` | string | Yes | Company name (min 2 characters) |
| `phone` | string | No | Phone number with country code |
| `message` | string | No | Additional message (max 1000 chars) |
| `projectOfInterest` | string | No | Project ID from projects list |
| `preferredDemoDate` | string | No | ISO date format (YYYY-MM-DD) |

**Example Request**:

```bash
curl -X POST http://localhost:3000/api/demos \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@company.com",
    "company": "Tech Corp",
    "phone": "+1-555-0123-4567",
    "message": "Interested in the CodeLens AI project for our team",
    "projectOfInterest": "codelens-ai",
    "preferredDemoDate": "2024-06-15"
  }'
```

### Response

**Success Response (201 Created)**:

```json
{
  "success": true,
  "message": "Demo request submitted successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@company.com",
    "company": "Tech Corp",
    "phone": "+1-555-0123-4567",
    "message": "Interested in the CodeLens AI project for our team",
    "projectOfInterest": "codelens-ai",
    "preferredDemoDate": "2024-06-15",
    "status": "new",
    "created_at": "2024-04-15T10:30:00Z"
  }
}
```

**Validation Error (400 Bad Request)**:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "code": "too_small",
      "minimum": 2,
      "type": "string",
      "path": ["name"],
      "message": "Name must be at least 2 characters"
    },
    {
      "code": "invalid_string",
      "validation": "email",
      "path": ["email"],
      "message": "Invalid email address"
    }
  ]
}
```

**Server Error (500 Internal Server Error)**:

```json
{
  "success": false,
  "message": "An error occurred while processing your request"
}
```

---

## Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 201 | Created | Demo request submitted successfully |
| 400 | Bad Request | Validation failed - check errors array |
| 401 | Unauthorized | Invalid authentication (admin endpoints) |
| 500 | Server Error | Internal server error - check logs |

---

## Project IDs Reference

Use these IDs for the `projectOfInterest` parameter:

| ID | Project Name | Category |
|----|--------------|----------|
| `3d-project` | Design Document to 3D | AI-Powered Design |
| `cad-pdf` | Automated CAD to PDF Conversion | Document Processing |
| `codelens-ai` | CodeLens AI | Code Quality & Security |
| `creo-project` | Agentic CAD to Creo | CAD Engineering |
| `jindal-steel` | Jindal Steel Document Management | Enterprise Solutions |
| `sail-dashboard` | SAIL Vendor Performance Dashboard | Analytics & Reporting |
| (leave empty) | No specific project | General inquiry |

---

## Validation Rules

### Name
- **Type**: String
- **Min Length**: 2 characters
- **Max Length**: 100 characters
- **Required**: Yes
- **Pattern**: Any characters allowed

### Email
- **Type**: String
- **Format**: Valid email address (RFC 5322)
- **Required**: Yes
- **Examples**: `user@domain.com`, `firstname.lastname@company.co.uk`

### Company
- **Type**: String
- **Min Length**: 2 characters
- **Max Length**: 150 characters
- **Required**: Yes
- **Pattern**: Any characters including spaces, hyphens, etc.

### Phone
- **Type**: String
- **Min Length**: 10 characters
- **Max Length**: 20 characters
- **Required**: No
- **Format**: Any format accepted (e.g., +1-555-0123, (555) 0123, 555.0123)

### Message
- **Type**: String
- **Min Length**: 0 characters
- **Max Length**: 1000 characters
- **Required**: No

### Project of Interest
- **Type**: String
- **Allowed Values**: See Project IDs Reference table
- **Required**: No
- **Default**: Empty/null if not specified

### Preferred Demo Date
- **Type**: String (ISO 8601 date)
- **Format**: YYYY-MM-DD
- **Required**: No
- **Example**: `2024-06-15`
- **Validation**: Must be a valid date

---

## Error Handling

### Common Errors

**Missing Required Field**:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "undefined",
      "path": ["name"],
      "message": "Required"
    }
  ]
}
```

**Invalid Email Format**:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "code": "invalid_string",
      "validation": "email",
      "path": ["email"],
      "message": "Invalid email address"
    }
  ]
}
```

**String Too Short**:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "code": "too_small",
      "minimum": 2,
      "type": "string",
      "path": ["company"],
      "message": "Company must be at least 2 characters"
    }
  ]
}
```

---

## Rate Limiting

**Current**: No rate limiting (add before production)

**Recommended Production Settings**:
```
- 5 requests per minute per IP
- 50 requests per hour per IP
- 500 requests per day per IP
```

---

## Authentication

**Development**: No authentication required

**Production**: Implement authentication for:
- Admin endpoints (view/manage demo requests)
- Sensitive operations
- API key-based access

---

## CORS Configuration

**Current**: Same-origin requests only

**Production Setting**:
```javascript
ALLOWED_ORIGINS: [
  'https://ai-initiatives.com',
  'https://www.ai-initiatives.com'
]
```

---

## Response Headers

**Includes**:
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Webhooks (Future Enhancement)

**Planned Webhook Events**:
- `demo.created` - New demo request submitted
- `demo.updated` - Demo request status changed
- `demo.completed` - Demo session completed

---

## SDK/Client Code Examples

### JavaScript/Fetch
```javascript
async function submitDemo(formData) {
  const response = await fetch('/api/demos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to submit demo request');
  }
}
```

### Python/Requests
```python
import requests

def submit_demo(data):
    response = requests.post(
        'http://localhost:3000/api/demos',
        json=data
    )
    response.raise_for_status()
    return response.json()

# Usage
demo_data = {
    'name': 'John Doe',
    'email': 'john@company.com',
    'company': 'Tech Corp',
    'projectOfInterest': 'codelens-ai'
}
result = submit_demo(demo_data)
```

### cURL
```bash
curl -X POST http://localhost:3000/api/demos \
  -H "Content-Type: application/json" \
  -d @demo_request.json

# Where demo_request.json contains:
# {
#   "name": "John Doe",
#   "email": "john@company.com",
#   "company": "Tech Corp"
# }
```

---

## Monitoring & Logging

### Events Logged
- ✅ Successful submissions (request data stored)
- ✅ Validation errors
- ✅ Database errors
- ✅ Server errors (with error details)

### Metrics to Track
- Total submissions per day
- Submissions by project
- Top referrers
- Error rate
- Response time

---

## Database Query for Submitted Requests

```sql
-- View all demo requests
SELECT * FROM demos;

-- View recent submissions (last 7 days)
SELECT * FROM demos 
WHERE created_at >= datetime('now', '-7 days')
ORDER BY created_at DESC;

-- Count by project interest
SELECT projectOfInterest, COUNT(*) as count 
FROM demos 
GROUP BY projectOfInterest;

-- Average response metrics
SELECT 
  COUNT(*) as total,
  COUNT(DISTINCT company) as unique_companies,
  COUNT(DISTINCT email) as unique_emails
FROM demos;
```

---

## Change Log

### v1.0.0 (Initial Release)
- ✅ Demo request submission endpoint
- ✅ Form validation
- ✅ Database storage
- ✅ Error handling

### v1.1.0 (Planned)
- [ ] Admin authentication
- [ ] Request status management
- [ ] Email notifications
- [ ] CRM integration
- [ ] Rate limiting
- [ ] Webhook support

---

## Support

For API questions or issues:
- **Email**: support@kpmg.com
- **Documentation**: See README.md and QUICK_START.md
- **Issues**: GitHub Issues (if applicable)

---

**Last Updated**: April 2024  
**API Version**: 1.0.0  
**Status**: Production Ready
