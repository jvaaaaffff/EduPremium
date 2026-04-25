# EduPremium Full-Stack Platform

A premium, modern executive education platform designed for high-intensity, cohort-based learning.

## 🚀 Live Demo & Deployment
* **Live Link (Vercel/Cloud Run)**: [Insert Link Here]
* **GitHub Repository**: [Insert Link Here]

## 🛠️ Tech Stack
- **Frontend**: React (built with Vite), Tailwind CSS, Framer Motion (`motion/react`), Lucide React.
- **Backend / API Routing**: Node.js, Express.js (serving as the API framework to handle backend logic).
- **Database**: MongoDB (Mongoose) for dynamic lead data storage.

## 📦 Scope & Features Implemented (Bonus Included!)
- **Landing Page**: Fully responsive landing page with engaging hero, statistics, featured programs, and instructor sections.
- **Navigation & Footer**: Persistent, mobile-responsive layout across all views.
- **Bonus - Lead Capture & API Integration**: Robust inquiry form (`/inquire`) with backend API routing (`/api/v1/leads`) storing data directly into MongoDB.

## 📝 Setup Instructions
1. **Clone the repository**: 
   ```bash
   git clone <repo-url>
   ```
2. **Install Dependencies**: 
   ```bash
   npm install
   ```
3. **Environment Setup**: Create a `.env` file in the root directory containing your MongoDB URI and port:
   ```env
   MONGODB_URI=your_mongodb_cluster_string
   PORT=3000
   ```
4. **Run Development Server**: 
   ```bash
   npm run dev
   ```
   *(This starts the Express backend and the Vite frontend concurrently).*
5. **Production Build**: 
   ```bash
   npm run build
   npm run start
   ```

## 🧠 Approach Taken
- **Design & UX First**: Adopted a "Premium Corporate" aesthetic using Inter for readability and refined, subtle Tailwind color palettes (slate, deep blues). Used Framer Motion for subtle, advanced-level entrance animations and interactive hover states.
- **Component Reusability**: Extracted recurring UI patterns (Accordions, Confirmation Modals, Hero Cards) into modular generic components to adhere to React best practices.
- **Backend Architecture**: Implemented a scalable `Controller -> Route -> Model` architecture for the Express API with global error handling, mimicking the robust nature of enterprise REST APIs.
- **Responsiveness**: Utilized Tailwind's mobile-first prefixes (`sm:`, `md:`, `lg:`) to ensure seamless scaling from high-density desktop monitors down to mobile devices.

## 🤖 AI Usage Explanation
- **Tools Used**: Google AI Studio (Antigravity/Gemini agentic assistance), ChatGPT (conceptualization).
- **Where AI Helped**: 
  - Scaffolding the initial Express server and Vite build system context.
  - Generating placeholder copywriting and structural layouts for the landing page.
  - Bootstrapping the Mongoose schema mapping for the lead capture system.
- **Manual Modifications & Improvements**:
  - Restructured API backend into a `controllers/` and `middleware/` pattern for proper separation of concerns and scalability.
  - Implemented strict error handling middleware and decoupled validation from standard routes.
  - Refined visual design heavily (manually adjusting padding, flexbox gaps, typography scales, and responsive breakpoints).
  - Adjusted frontend animation timings and interaction states (e.g., `AnimatePresence` for the accordion and modals) to prevent UI jitter and ensure a premium feel.

## 📈 Improvements You Would Make With More Time
- **Next.js App Router Migration**: While the current setup utilizes React+Vite+Express to achieve the identical full-stack API capabilities required for the assignment, migrating the codebase to Next.js would natively improve SEO (SSR/SSG) and streamline API routing.
- **Client-Side Validation**: Integrate Zod and React Hook Form for mathematically robust, client-side schema validation on the lead capture form before it hits the API.
- **Authentication**: Add JWT-based auth or external OAuth (Auth.js) for a personalized student dashboard.
- **Unit Testing**: Implement Jest/Vitest suites to cover API endpoints and critical UI component interactive states.
