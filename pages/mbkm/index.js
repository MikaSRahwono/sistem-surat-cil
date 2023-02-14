import { Container, Box, Heading, Button, Text, useColorModeValue, Link,  Cener } from "@chakra-ui/react"
import NextLink from 'next/link'

export default function Home() {
  return (
    <Box mt={10}>
        <Box mb='60vh'>
            {/* Attention */}
            <Container borderRadius='lg' bg='red' p={3} mb={30} align='center'>
            Pendaftaran MSIB Masih dibuka Hingga 2 Februari 2023
            </Container>
            {/* HERO & CTA */}
            <Container>
                <Box flexGrow={1}>
                    <Heading as='h2'mb={30} mt='20vh' textAlign='center'>
                    Permitaan Surat untuk MBKM (Surat Rekomendasi dan SPTJM)
                    </Heading>
                    <Text textAlign='center'>Coming Soon</Text>
                </Box>
            </Container>
        </Box>
      {/* Prosedur */}
        <Box mt={10}>
            <Container>
                <Heading>
                    Prosedur Permintaan
                </Heading>
            </Container>
        </Box>
    </Box>
  )
}