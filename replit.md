# Personal Marketing Portfolio Website

## Overview

This is a personal marketing portfolio website for Vũ Thị Mỹ Linh, a marketing professional and brand strategist. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a modern design system and contact form functionality.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React application with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage as fallback)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Development**: Replit-optimized with hot reloading and error overlays

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui component library built on Radix UI
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **Typography**: Inter and Playfair Display fonts

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas for request validation
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Database Schema
- **contacts** table with fields:
  - id (serial, primary key)
  - name (text, required)
  - email (text, required)
  - company (text, optional)
  - message (text, required)
  - createdAt (timestamp, auto-generated)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form with validation
   - Form data validated using Zod schemas
   - API call to `/api/contact` endpoint
   - Server validates and stores contact information
   - Success/error feedback displayed to user

2. **Portfolio Display**:
   - Static content rendered from components
   - Scroll-based animations triggered by intersection observer
   - Smooth scrolling navigation between sections

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Data Management
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **drizzle-orm**: Database ORM
- **@neondatabase/serverless**: Neon database driver

### Development Tools
- **vite**: Build tool and dev server
- **@replit/vite-plugin-***: Replit-specific plugins
- **tsx**: TypeScript execution for development

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Development Mode**: 
   - Uses Vite dev server with HMR
   - Express server runs with tsx
   - Replit-specific plugins for development experience

2. **Production Build**:
   - Frontend built with Vite to `dist/public`
   - Backend bundled with esbuild to `dist/index.js`
   - Static files served by Express in production

3. **Database**:
   - Configured for PostgreSQL via DATABASE_URL environment variable
   - Falls back to in-memory storage for development
   - Drizzle migrations in `./migrations` directory

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 30, 2025: Restructured all content to reflect authentic CV data from Vũ Thị Mỹ Linh
- Updated Hero section with real experience (1+ year Marketing Executive)
- Modified Services section to showcase actual skills: Social Media Management, Event Organization, Content Creation & PR
- Replaced Portfolio with real work experience: Gitiho Việt Nam and VJ Việt Nam positions
- Updated Results section with authentic achievements: 1M+ views, 55K community members, 2K+ event participants
- Added real contact information: vumylinhmkt@gmail.com, 0343464725, Facebook profile
- Maintained key brand phrase: "MARKETING không chỉ LÀ QUẢNG CÁO, mà là nghệ thuật"
- Enhanced glassmorphism effects with appropriate text colors for readability

## Changelog

- June 30, 2025: Initial setup and authentic content integration