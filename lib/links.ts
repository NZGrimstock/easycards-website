// Where the web app lives. Override per environment with NEXT_PUBLIC_APP_URL.
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? 'https://admin.easycards.co.nz').replace(/\/$/, '')

// The Easy Cards app (sign in).
export const APP_LOGIN_URL = `${APP_URL}/login`

// "Buy now": sign in, then land straight on the subscription page. Someone
// who is already signed in skips the form. New customers use the free trial
// first and subscribe from the same page.
export const BUY_NOW_URL = `${APP_URL}/login?next=${encodeURIComponent('/dashboard/settings/billing')}`
