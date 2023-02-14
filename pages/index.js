import { Container, Box, Heading, Button, Text, useColorModeValue, Link } from "@chakra-ui/react"
import NextLink from 'next/link'

export default function Home() {
  return (
    <Box mt={10}>
      <Box mb='50vh'>
        {/* Attention */}
        <Container borderRadius='lg' bg='red' p={3} mb={5} align='center'>
          Pendaftaran MSIB Masih dibuka Hingga 2 Februari 2023
        </Container>
        {/* HERO & CTA */}
        <Box display={{md: 'flex'}} mb={5} mt='15vh'>
          <Box flexGrow={1}>
            <Heading as='h2'mb={15} mt={25}>
              Sistem Permintaan Surat CIL UI
            </Heading>
            <Text>Menyediakan layanan permintaan Surat Rekomendasi untuk mendukung kegiatan MBKM serta memberikan layanan pembuatan Lampiran Surat Keterangan Pendamping Ijazah untuk MBKM</Text>
          </Box>
        </Box>
        <NextLink href='/login' passHref >
          <Button boxShadow='dark-lg' as="a" outline='none' bg='#F6DB00' _hover={{ bg: '#DBC200' }} color='gray.800'>Login Sekarang</Button>
        </NextLink>
      </Box>
      {/* Prosedur */}
      <Box mt={50}>
        <Container>
          <Heading>
            Prosedur Permintaan
          </Heading>
        </Container>
      </Box>
    </Box>
  )
}