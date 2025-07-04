# Pooja Markam Portfolio Website

## Overview

This is a modern, luxurious portfolio website for Pooja Markam, a digital creator, Gondhi song artist, influencer, and model. The application is built as a full-stack web application using React with TypeScript on the frontend and Express.js on the backend, featuring a dual-theme design system and responsive layouts.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for dual-theme support
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: Hot module replacement with Vite integration
- **Session Management**: Express sessions with PostgreSQL storage

### Theme System
- **Royal Mode**: Royal Blue (#224F7A) + Gold (#E6A500) color scheme
- **Classic Mode**: Deep Burgundy (#8B2635) + Rich Emerald (#4ECDC4) color scheme
- **Implementation**: CSS custom properties with dynamic theme switching

## Key Components

### Frontend Components
- **Hero Section**: Parallax background with floating animations and call-to-action buttons
- **Portfolio Gallery**: Masonry-style grid with category filtering and lightbox functionality
- **About Section**: Skills showcase with animated reveal on scroll
- **Contact Form**: Glassmorphic design with mailto integration
- **Navigation**: Sticky header with smooth scrolling navigation
- **Theme Toggle**: Seamless switching between Royal and Classic modes
- **Lightbox**: Full-screen image viewing with keyboard navigation

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Route Handler**: Modular route registration system
- **Vite Integration**: Development middleware for hot reloading
- **Static Asset Serving**: Optimized static file delivery

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Definition**: Drizzle ORM with Zod validation integration
- **Migrations**: Database schema versioning with Drizzle Kit

## Data Flow

1. **Client Request**: Browser requests are handled by Express server
2. **Development Mode**: Vite middleware serves React application with HMR
3. **Production Mode**: Express serves pre-built static assets from dist/public
4. **API Routes**: All backend routes are prefixed with `/api`
5. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
6. **Theme Persistence**: Theme preferences stored in localStorage
7. **Contact Form**: Form submissions trigger mailto links to client's email

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Animations**: Framer Motion, react-intersection-observer
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Form Handling**: React Hook Form, @hookform/resolvers
- **State Management**: TanStack Query
- **Development**: Vite, TypeScript, ESBuild

### Asset Management
- **Images**: Imported from attached_assets directory
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Font Awesome, Lucide React

### Email Integration
- **Contact Form**: Direct mailto integration to 95poojamarkam@gmail.com
- **Social Media**: Instagram (@poojamarkam308), YouTube (Poojamarkamvlog)

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Process**: TSX runs Express server with Vite middleware
- **Features**: Hot module replacement, runtime error overlay, development cartographer

### Production Build
- **Frontend Build**: Vite builds React app to dist/public
- **Backend Build**: ESBuild bundles server code to dist/index.js
- **Static Serving**: Express serves built frontend assets
- **Database**: Neon Database serverless PostgreSQL

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit environment identifier

### Build Commands
- `npm run build`: Build both frontend and backend
- `npm run start`: Start production server
- `npm run check`: TypeScript type checking
- `npm run db:push`: Push database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 04, 2025. Initial setup