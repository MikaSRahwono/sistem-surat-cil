import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
  import { Card } from './Card'
  import { DividerWithText } from './DividerWithText'
  import { Link } from './Link'
  import { LoginForm } from './LoginForm'
  
  export const App = () => (
    <Box
      minH="100vh"
      py="12"
      px={{
        base: '4',
        lg: '8',
      }}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Login ke Akun CIL anda
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Anda belum memiliki akun?</Text>
          <Link href="#">Daftar Sekarang!</Link>
        </Text>
        <Card>
          <LoginForm />
          <DividerWithText mt="6">atau login menggunakan</DividerWithText>
          <SimpleGrid mt="6" columns={1} spacing="3">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
              <Text ml={2}>Google</Text>
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  )