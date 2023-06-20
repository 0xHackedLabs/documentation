import 'nextra-theme-docs/style.css'
import { Analytics } from '@vercel/analytics/react';

export default function Nextra({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Analytics />
  </>
}