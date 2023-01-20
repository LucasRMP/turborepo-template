import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  const RenderComponent = Component as any
  return <RenderComponent {...pageProps} />
}
