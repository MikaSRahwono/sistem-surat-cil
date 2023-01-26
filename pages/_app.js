import '../styles/globals.css'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
      <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}