import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './passwordField'

export const LoginForm = (props) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault() // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required borderColor='gray.400'/>
      </FormControl>
      <PasswordField />
      <Button type="submit" boxShadow='md' _hover='' bg='#F7E24A' size="lg" fontSize="md" >
        Sign in
      </Button>
    </Stack>
  </chakra.form>
)
