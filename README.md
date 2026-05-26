# AI Initiatives - Project Showcase Platform

A modern web application showcasing AI initiatives in Technology Transformation, Digital Engineering, and Quality services. Built with React, Vite, and Tailwind CSS.

## Stack

- **React 18** + **TypeScript**
- **Vite 7** — dev server and build tool
- **Tailwind CSS 3** — styling
- **Zod** — form validation

## Features

- Project showcase with card-based layout
- Interactive modals with detailed project info
- Demo request form (submits to backend API)
- Search and category filtering on hero section
- Responsive design

## Projects Showcased

1. **Design Document to 3D** — Convert 2D drawings to 3D models using AI
2. **Automated CAD to PDF Conversion** — Multi-stage pipeline for CAD document processing
3. **CodeLens AI** — Full-stack code quality analysis with AI insights
4. **Agentic CAD to Creo** — Automated QA and healing pipeline for PTC Creo
5. **Enterprise Document Intelligence** — Centralized document management with AI Q&A
6. **Vendor Performance Analytics** — Real-time vendor and contractor performance dashboard
7. **AI SDLC** — AI-orchestrated software delivery from intake to release

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |

## Environment

Copy `.env.example` to `.env.local` and set your backend URL:

```
VITE_BACKEND_API_URL=https://api.ai-coe.net
```

The Vite dev server proxies `/api` requests to the backend automatically.
