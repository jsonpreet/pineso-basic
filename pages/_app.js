
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from "next-themes"
import '@styles/globals.css'
import '@styles/app.scss'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <NextNProgress color="#cb0038" showOnShallow={true} />
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
