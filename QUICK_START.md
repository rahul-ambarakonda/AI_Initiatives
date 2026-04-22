# 🚀 Quick Start Guide - AI Initiatives

Get the application up and running in 5 minutes!

## Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Git (optional, for cloning)

## Installation (5 minutes)

### 1. Install Dependencies
```bash
cd AI_Initiatives
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to **http://localhost:3000**

## 🎯 First Time Testing

### Test the Features
1. **View Projects**: Click through the project cards on the home page
2. **Open Details**: Click "View Details" to see full project information in modal
3. **Submit Demo Request**: 
   - Scroll to "Schedule Your Demo" section
   - Fill in the form with test data
   - Click "Request Demo"
   - See success message

### Verify Database
```bash
# Check demo requests in database
sqlite3 kpmg_demos.db "SELECT * FROM demos;"
```

## 📁 Project Structure Quick Reference

```
├── app/
│   ├── api/demos/route.ts      # Form submission endpoint
│   ├── components/              # UI components (Header, Hero, Cards, etc.)
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── lib/
│   ├── db.ts                    # Database functions
│   └── projects.ts              # Project data (6 projects)
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind CSS theme
└── .env.local                   # Environment variables
```

## 💻 Available Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run linter
npm run db:init          # Initialize database

# Database
sqlite3 kpmg_demos.db    # Access SQLite database directly
```

## 🎨 Customization Quick Tips

### Change KPMG Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  kpmg: {
    dark: '#00338D',    // Change dark blue
    light: '#0091DA',   // Change light blue
  }
}
```

### Add a New Project
Edit `lib/projects.ts` and add to the `projects` array:
```typescript
{
  id: 'new-project',
  title: 'New Project Name',
  category: 'Category',
  // ... other fields
}
```

### Modify Form Fields
Edit `app/components/ContactForm.tsx`:
- Add new input fields in the form
- Update the `FormData` interface
- Add validation if needed

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Database Errors
```bash
# Reset database
rm kpmg_demos.db
npm run db:init
```

### Dependencies Issues
```bash
# Clean reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📦 Dependencies Overview

- **Next.js 14**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **Zod**: TypeScript-first schema validation
- **better-sqlite3**: SQLite database for Node.js
- **Framer Motion**: Animation library (ready to use)

## 📱 Responsive Design

The site is fully responsive:
- ✅ Mobile (320px and up)
- ✅ Tablet (768px and up)
- ✅ Desktop (1024px and up)

Test responsiveness by:
1. Opening DevTools (F12)
2. Toggling device toolbar (Ctrl+Shift+M)
3. Resizing browser window

## 🧠 Key Features to Explore

1. **Project Cards**: Beautiful gradient backgrounds with hover effects
2. **Project Modal**: Smooth overlay modals with full project details
3. **Contact Form**: Form validation, loading states, and success messages
4. **Responsive Design**: Works seamlessly on all devices
5. **Smooth Animations**: Page transitions and element animations

## 📊 Database Management

### Connect to Database
```bash
sqlite3 kpmg_demos.db
```

### Useful Queries
```sql
-- View all demo requests
SELECT * FROM demos;

-- View recent requests
SELECT * FROM demos ORDER BY created_at DESC LIMIT 10;

-- Count requests by project
SELECT projectOfInterest, COUNT(*) FROM demos GROUP BY projectOfInterest;

-- Export to CSV
.mode csv
.output demo_requests.csv
SELECT * FROM demos;
```

## 🚀 Next Steps

1. **Customize Content**: Update projects and company information
2. **Set Up Email**: Integrate with SendGrid or AWS SES for notifications
3. **Deploy**: Push to Vercel, AWS, or your hosting provider
4. **Monitor**: Set up analytics and error tracking
5. **Scale**: Add CRM integration for demo management

## 📞 Need Help?

- Check **README.md** for detailed documentation
- See **DEPLOYMENT.md** for deployment instructions
- Review **PRODUCTION_CHECKLIST.md** for production setup
- Check component files for implementation details

## ✨ You're All Set!

The application is production-ready and fully featured. Start exploring and customizing it for your needs!

---

**Happy Coding! 🎉**

For questions or support: support@kpmg.com
