# HostelOS AI

HostelOS AI is a modern hostel management platform designed to streamline hostel operations for students, wardens, and administrators through a centralized digital system.

## Problem Statement

Traditional hostel management relies on paper registers, scattered WhatsApp communication, and manual processes for complaints, leave requests, room allocation, and visitor management. This leads to inefficiencies, poor transparency, and delayed issue resolution.

## Solution

HostelOS AI provides a unified platform for:

* Student Registration
* Room Allocation
* Complaint Management
* Leave Requests
* Visitor Management
* Fee Tracking
* QR-based Gate Passes
* AI-powered Student Assistant
* Hostel Analytics Dashboard

## Key Features

### Student Portal

* View room details
* Submit complaints
* Apply for leave
* Access fee information
* Generate digital gate passes
* Chat with AI Hostel Assistant

### Admin Portal

* Manage students and rooms
* Approve leave requests
* Track complaints
* Monitor visitors
* View hostel analytics
* Generate reports

### AI Features

* AI Complaint Classification
* AI Hostel Assistant
* Occupancy Analytics
* Crowd Detection Alerts

## Tech Stack

Frontend:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

Backend:

* Next.js API Routes

Database:

* PostgreSQL / Supabase

AI:

* Google Gemini API

Deployment:

* Vercel

## Getting Started

### Installation

```bash
git clone <repository-url>
cd hostelos-ai

npm install

npm run dev
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

GEMINI_API_KEY=your_gemini_api_key
```

### Run Development Server

```bash
npm run dev
```

Visit:

http://localhost:3000

## Future Scope

* Face Recognition Based Entry
* Mobile Application
* Predictive Hostel Analytics
* Smart Maintenance Scheduling
* Occupancy Forecasting

## Team

Built for WebForge Hackathon 2026.
