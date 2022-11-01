import { useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import posthog from 'posthog-js'


export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		posthog.init('phc_7Yz042GajExA7ykR6SgevdX5Idm6QOrs1Zw7DYuTrIJ', { api_host: 'https://app.posthog.com' })
	}, [])

  return <Component {...pageProps} />
}
