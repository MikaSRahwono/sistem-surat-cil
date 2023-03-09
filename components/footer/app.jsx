import { Box, Stack, Container } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './copyright'
import Logo from '../logo'
import { SocialMediaLinks } from './socialMediaLinks'

export const App = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
    bg='gray.200'
  >
    <Container maxW="container.lg">
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      />
    </Stack>
    </Container>
  </Box>
)
