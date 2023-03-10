import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    bg={useColorModeValue('gray.100', 'gray.700')}
    py="8"
    px={{
      base: '4',
      md: '10',
    }}
    shadow="2xl"
    rounded={{
      sm: 'lg',
    }}
    {...props}
  />
)
