# StoryPathAI

StoryPathAI is a full-stack application that generates interactive, choose-your-own-adventure stories. The backend is built with FastAPI and the frontend uses React with Vite.

## Features
- Story generation jobs with status polling
- Interactive story gameplay
- Simple, clean UI for story creation and reading

## Quick Start

### Backend
1. Create and activate a virtual environment.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a backend environment file at `backend/.env` with required values:
   ```env
   DATABASE_URL=...
   GEMINI_API_KEY=...
   ALLOWED_ORIGINS=...
   ```
4. Start the API:
   ```bash
   cd backend
   uvicorn main:app --reload --port 8000
   ```

### Frontend
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Notes
- The frontend expects the API at `/api` in development (proxy configured in Vite).
- Configure `VITE_API_BASE_URL` for non-local deployments.
