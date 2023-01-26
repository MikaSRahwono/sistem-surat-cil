import { Container, Box, Heading, Button } from "@chakra-ui/react"
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
            <Heading as='h2' variant='page-title' mb={15} mt={25}>
              Sistem Permintaan Surat CIL UI
            </Heading>
            <p>Menyediakan layanan permintaan Surat Rekomendasi untuk mendukung kegiatan MBKM serta memberikan layanan pembuatan Lampiran Surat Keterangan Pendamping Ijazah untuk MBKM</p>
          </Box>
        </Box>
        <NextLink href='/login' passHref>
          <Button as="a">Login Sekarang</Button>
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