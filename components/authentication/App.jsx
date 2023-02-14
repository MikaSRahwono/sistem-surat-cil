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
  import { Card } from './card'
  import { DividerWithText } from './dividerWithText'
  import { Link } from './link'
  import { LoginForm } from './loginForm'
  
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
          <Link href="/signup">Daftar Sekarang!</Link>
        </Text>
        <Card>
          <LoginForm />
        </Card>
      </Box>
    </Box>
  )