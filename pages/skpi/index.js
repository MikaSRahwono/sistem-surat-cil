import { Container, Box, Heading, Button, Text, useColorModeValue, Link,  Center } from "@chakra-ui/react"
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
            <Box>
                <Box flexGrow={1}>
                    <Heading as='h2'mb={30} mt='20vh' textAlign='center'>
                    Permintaan SKPI
                    </Heading>
                    <Heading as='h5' textAlign='center'>
                    Surat Keterangan Pendamping Ijazah
                    </Heading>
                </Box>
            </Box>
            <Center mt={10}>
            <Button href='/skpi/request' boxShadow='dark-lg' as="a" outline='none' bg='#F6DB00' _hover={{ bg: '#DBC200' }} color='gray.800'>Lakukan Permintaan</Button>
            </Center>
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