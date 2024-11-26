/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string; // 'development', 'production', etc.
  readonly DEV: boolean; // true in development mode
  readonly PROD: boolean; // true in production mode
  // Add other custom environment variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
