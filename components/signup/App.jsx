import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
  VStack,
  Select,
  InputGroup,
  InputRightElement,
  Link
} from '@chakra-ui/react'
import * as React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FieldGroup } from './fieldGroup'
import { Jurusan } from './jurusan'

import { useState } from 'react'

export const App = () => {
  const [fakultas, setFakultas] = useState("-- Pilih Fakultas --")

  const fakultases = ["-- Pilih Fakultas --","Fakultas Kedokteran", "Fakultas Kedokteran Gigi", "Fakultas Kesehatan Masyarakat", "Fakultas Farmasi", "Fakultas Ilmu Keperawatan", "Fakultas Matematika dan Ilmu Pengetahuan Alam", "Fakultas Ilmu Komputer", "Fakultas Teknik", "Fakultas Hukum", "Fakultas Psikologi", "Fakultas Ilmu Sosial Ilmu Politik", "Fakultas Ilmu Pengetahuan Budaya", "Fakultas Ekonomi Bisnis", "Fakultas Ilmu Administrasi", "Program Vokasi"]
  const list_tahun_masuk = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
  const list_tahun_lulus = [2021, 2022, 2023, 2024, 2025, 2026, 2027]

  const [showPassword, setShowPassword] = useState(false);

  const isNotFakultas = fakultas === "-- Pilih Fakultas --"
  return (
  <Box
    px={{
      base: '4',
      md: '10',
    }}
    py="16"
    maxWidth="3xl"
    mx="auto"
  >
    <form
      id="settings-form"
      onSubmit={(e) => {
        e.preventDefault() // form submit logic
      }}
    >
      <Stack spacing="4" divider={<StackDivider />}>
        <Stack pt={6}>
          <Heading size="lg" as="h1" paddingBottom="4">
            Masukkan Data
          </Heading>
          <Text align={'left'}>
            Sudah Memiliki Akun? <Link color={'blue.400'} href="/login">Login Sekarang</Link>
          </Text>
        </Stack>
        <FieldGroup title="Data Pribadi">
          <VStack width="full" spacing="6">
            <FormControl id="name" isRequired>
              <FormLabel>Nama</FormLabel>
              <Input type="text" maxLength={255} />
            </FormControl>

            <FormControl id="npm" isRequired>
              <FormLabel>NPM</FormLabel>
              <Input type="number"/>
            </FormControl>

            <FormControl id="fakultas" isRequired>
              <FormLabel>Fakultas/Program</FormLabel>
              <Select required id="fakultas" name="fakultas" onChange={(e) => setFakultas(e.target.value)} defaultValue={fakultas}>
                {fakultases.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl id='jurusan' isRequired>
              <FormLabel>Jurusan</FormLabel>
              <Jurusan fakultas={fakultas}></Jurusan>
            </FormControl>

            <FormControl id="tahun_masuk" isRequired>
              <FormLabel>Tahun Masuk</FormLabel>
              <Select placeholder='Pilih Tahun'>
                {list_tahun_masuk.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl id="tahun_lulus" isRequired>
              <FormLabel>Perkiraan Tahun Lulus</FormLabel>
              <Select placeholder='Pilih Tahun'>
                {list_tahun_lulus.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </Select>
            </FormControl>
          </VStack>
        </FieldGroup>
        <FieldGroup title="Data Akun">
          <VStack width="full" spacing="6">
            <FormControl id="email" isRequired>
              <FormLabel>Email UI</FormLabel>
              <Input type="email"/>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
          </VStack>
        </FieldGroup>
        <Stack spacing={10} pt={2}>
          <Button
            loadingText="Submitting"
            size="lg">
            Sign up
          </Button>
        </Stack>
      </Stack>
    </form>
  </Box>
)}
