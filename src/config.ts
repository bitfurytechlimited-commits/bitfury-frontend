// Base URL for the backend API.
//
// - In dev, requests to /api/* are proxied to the backend (see vite.config.ts),
//   so leave VITE_API_URL unset and this resolves to an empty string.
// - In production, the frontend and backend are deployed separately
//   (GitHub Pages + Render), so set VITE_API_URL to the deployed backend URL,
//   e.g. VITE_API_URL=https://bitfurytech-asset-management-5.onrender.com
export const API_BASE_URL: string =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, "") ??
  (import.meta.env.PROD
    ? "https://bitfurytech-asset-management-5.onrender.com"
    : "");
