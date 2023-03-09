import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { App as Footer } from '../footer/app'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={0}>
            <Head>
                <meta name='viewport' content='width=device-width, inital-scale=1' />
                <title>Center For Independent Learning</title>
            </Head>

            <NavBar path={router.asPath}></NavBar>

            <Container maxW="container.lg" pt={14}>
                {children}
            </Container>

            <Footer></Footer>
        </Box>
    )
}

export default Main