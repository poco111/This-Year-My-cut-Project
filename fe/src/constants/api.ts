export const SUPABASE_API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_SUPABASE_API_URL
    : process.env.REACT_APP_DEV_SUPABASE_API_URL;

export const SUPABASE_API_KEY =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SUPABASE_API_KEY
    : process.env.REACT_APP_SUPABASE_API_KEY;
