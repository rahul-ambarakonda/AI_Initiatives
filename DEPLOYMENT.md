# AI Initiatives - Setup & Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Directory Structure Overview

```
app/
├── api/demos/route.ts          ← API endpoint for demo submissions
├── components/                  ← React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── globals.css                  ← Global styles
├── layout.tsx                   ← Root layout
└── page.tsx                     ← Home page

lib/
├── db.ts                        ← Database operations
└── projects.ts                  ← Project data

scripts/
└── initializeDb.js              ← Database setup script
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="./demos.db"
API_SECRET_KEY="your-secret-key-here-change-in-production"
NEXT_PUBLIC_SUPPORT_EMAIL="support@example.com"
```

---

## Database

### Accessing the Database

```bash
# Install SQLite CLI
npm install -g sqlite3

# Connect to database
sqlite3 demos.db

# View all demo requests
SELECT * FROM demos;

# View recent submissions
SELECT * FROM demos ORDER BY created_at DESC LIMIT 10;

# Count by status
SELECT status, COUNT(*) as count FROM demos GROUP BY status;
```

---

## Analytics & Monitoring

### Available Metrics
- Demo requests over time
- Interest by project
- Geographic distribution (if captured)
- Conversion rates

### Query Examples

```sql
-- Demos by project
SELECT projectOfInterest, COUNT(*) as count 
FROM demos 
GROUP BY projectOfInterest 
ORDER BY count DESC;

-- Submissions by date
SELECT DATE(created_at) as date, COUNT(*) as count
FROM demos
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Most common companies
SELECT company, COUNT(*) as count
FROM demos
GROUP BY company
ORDER BY count DESC;
```

---

## Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

```bash
# Vercel CLI
npm i -g vercel
vercel
```

### AWS EC2

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone repository
git clone <your-repo-url>
cd AI_Initiatives

# Install and build
npm install
npm run build

# Start with PM2
sudo npm install -g pm2
pm2 start npm --name "ai-initiatives" -- start
pm2 startup
pm2 save
```

### Docker

```bash
# Build image
docker build -t ai-initiatives .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="./demos.db" \
  ai-initiatives
```

---

## Performance Optimization

### Next.js Optimization Features
- ✅ Image optimization (next/image)
- ✅ Code splitting and lazy loading
- ✅ API route optimization
- ✅ CSS-in-JS optimization with Tailwind

### Production Checklist

- [ ] Update API_SECRET_KEY with strong random value
- [ ] Set up email notifications for demo requests
- [ ] Configure CRM integration
- [ ] Set up error tracking (Sentry)
- [ ] Enable CORS for specific domains only
- [ ] Set up rate limiting
- [ ] Configure CDN for static assets
- [ ] Enable GZIP compression
- [ ] Set up database backups
- [ ] Configure SSL/TLS certificates
- [ ] Set up monitoring and alerting
- [ ] Create admin dashboard for demo management

---

## Security

### Best Practices Implemented
✅ Input validation (Zod schema)
✅ Parameterized database queries
✅ Environment variables for secrets
✅ CORS protection
✅ No sensitive data in logs

### Additional Security Measures

1. **Rate Limiting**
```typescript
// Install express-rate-limit
npm install express-rate-limit
```

2. **HTTPS Enforcement**
```typescript
// Add to next.config.ts
headers: () => [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  }
]
```

3. **CSP Headers**
```typescript
// Content Security Policy
'default-src self'
'script-src self unsafe-inline'
'style-src self unsafe-inline'
```

---

## Troubleshooting

### Database Issues
```bash
# Reset database
rm demos.db
npm run db:init

# Check database integrity
sqlite3 demos.db "PRAGMA integrity_check;"
```

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev
```

---

## Support

For issues or questions, contact the KPMG Technology Transformation team:
- Email: support@kpmg.com
- Documentation: See README.md

---

## Version History

- v1.0.0 - Initial release with 6 projects and demo booking system
