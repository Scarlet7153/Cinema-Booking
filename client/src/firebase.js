import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Replace with your Firebase project's config or set the VITE_ env vars in client/.env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
