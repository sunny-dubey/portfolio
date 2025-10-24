export const blogPost5 = {
  id: 5,
  title: 'API Design Best Practices',
  excerpt:
    'Creating RESTful APIs that are intuitive, maintainable, and developer-friendly.',
  date: '2023-12-28',
  readTime: 6,
  content: `
    <p>Well-designed APIs are crucial for building successful applications. This post covers essential best practices for creating RESTful APIs that are intuitive, maintainable, and developer-friendly.</p>
    
    <h2>RESTful Design Principles</h2>
    
    <h3>Resource-Based URLs</h3>
    <p>Use nouns to represent resources, not verbs:</p>
    
    <pre><code>// Good
GET /users/123
POST /users
PUT /users/123
DELETE /users/123

// Bad
GET /getUser/123
POST /createUser
PUT /updateUser/123
DELETE /removeUser/123</code></pre>
    
    <h3>HTTP Methods</h3>
    <p>Use appropriate HTTP methods for different operations:</p>
    
    <ul>
      <li><strong>GET:</strong> Retrieve data (idempotent)</li>
      <li><strong>POST:</strong> Create new resources</li>
      <li><strong>PUT:</strong> Update entire resource (idempotent)</li>
      <li><strong>PATCH:</strong> Partial updates</li>
      <li><strong>DELETE:</strong> Remove resources (idempotent)</li>
    </ul>
    
    <h2>URL Design</h2>
    
    <h3>Hierarchical Structure</h3>
    <pre><code>// Resource hierarchy
GET /users/123/orders
GET /users/123/orders/456/items
GET /users/123/orders/456/items/789</code></pre>
    
    <h3>Query Parameters</h3>
    <pre><code>// Filtering and pagination
GET /users?status=active&limit=20&offset=0
GET /orders?user_id=123&status=pending
GET /products?category=electronics&sort=price&order=asc</code></pre>
    
    <h2>Response Format</h2>
    
    <h3>Consistent Structure</h3>
    <pre><code>{
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "meta": {
    "timestamp": "2024-01-01T10:00:00Z",
    "version": "v1"
  }
}</code></pre>
    
    <h3>Error Responses</h3>
    <pre><code>{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}</code></pre>
    
    <h2>HTTP Status Codes</h2>
    
    <h3>Success Codes</h3>
    <ul>
      <li><strong>200 OK:</strong> Successful GET, PUT, PATCH</li>
      <li><strong>201 Created:</strong> Successful POST</li>
      <li><strong>204 No Content:</strong> Successful DELETE</li>
    </ul>
    
    <h3>Client Error Codes</h3>
    <ul>
      <li><strong>400 Bad Request:</strong> Invalid request data</li>
      <li><strong>401 Unauthorized:</strong> Authentication required</li>
      <li><strong>403 Forbidden:</strong> Insufficient permissions</li>
      <li><strong>404 Not Found:</strong> Resource doesn't exist</li>
      <li><strong>422 Unprocessable Entity:</strong> Validation errors</li>
    </ul>
    
    <h3>Server Error Codes</h3>
    <ul>
      <li><strong>500 Internal Server Error:</strong> Unexpected server error</li>
      <li><strong>502 Bad Gateway:</strong> Upstream server error</li>
      <li><strong>503 Service Unavailable:</strong> Service temporarily down</li>
    </ul>
    
    <h2>Authentication and Authorization</h2>
    
    <h3>API Keys</h3>
    <pre><code>// Header-based authentication
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// API key authentication
X-API-Key: sk_live_1234567890abcdef</code></pre>
    
    <h3>Rate Limiting</h3>
    <pre><code>// Rate limit headers
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200</code></pre>
    
    <h2>Versioning Strategies</h2>
    
    <h3>URL Versioning</h3>
    <pre><code>GET /v1/users/123
GET /v2/users/123</code></pre>
    
    <h3>Header Versioning</h3>
    <pre><code>Accept: application/vnd.api+json;version=1
API-Version: v2</code></pre>
    
    <h2>Documentation</h2>
    
    <h3>OpenAPI Specification</h3>
    <p>Use OpenAPI (Swagger) to document your API:</p>
    
    <pre><code>openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: List users
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: List of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'</code></pre>
    
    <h2>Performance Considerations</h2>
    
    <ul>
      <li>Implement pagination for large datasets</li>
      <li>Use compression (gzip) for responses</li>
      <li>Cache frequently accessed data</li>
      <li>Implement proper indexing in databases</li>
      <li>Use CDN for static content</li>
    </ul>
    
    <h2>Security Best Practices</h2>
    
    <ul>
      <li>Use HTTPS for all communications</li>
      <li>Validate and sanitize all input data</li>
      <li>Implement proper authentication and authorization</li>
      <li>Use rate limiting to prevent abuse</li>
      <li>Log and monitor API usage</li>
      <li>Implement CORS policies</li>
    </ul>
    
    <p>Good API design is essential for building successful applications. Focus on consistency, clarity, and developer experience to create APIs that are both powerful and easy to use.</p>
  `,
};
