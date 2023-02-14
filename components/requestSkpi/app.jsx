import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    StackDivider,
    VStack,
    Select,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FieldGroup } from './fieldGroup'
  import { MBKM2 } from './mbkm2'
  import { useState } from 'react'
  import { RangeDatepicker } from 'chakra-dayzed-datepicker';

  export const App = () => {
    const [mbkm2, setMbkm2] = useState("Tidak")
    const list_mbkm2 = ["Iya", "Tidak"]
    const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
  
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
              Masukkan Data Kegiatan MBKM Anda
            </Heading>
          </Stack>
          <FieldGroup title="Data MBKM 1">
            <VStack width="full" spacing="6">
              <FormControl id="name" isRequired>
                <FormLabel>Nama MBKM</FormLabel>
                <Input type="text" maxLength={255} />
              </FormControl>
  
              <FormControl id="jenis" isRequired>
                <FormLabel>Jenis MBKM</FormLabel>
                <Input type="text"/>
              </FormControl>
  
              <FormControl id="mitra" isRequired>
                <FormLabel>Mitra/Tempat Pelaksanaan</FormLabel>
                <Input type="text"/>
              </FormControl>
  
              <FormControl id='periode' isRequired>
                <FormLabel>Periode Pelaksanaan</FormLabel>
                <RangeDatepicker
                  selectedDates={selectedDates}
                  onDateChange={setSelectedDates}
                />
              </FormControl>

              <FormControl id="mbkm2" isRequired>
              <FormLabel>Apakah anda mengambil MBKM 2 Kali?</FormLabel>
              <Select required id="mbkm2" name="mbkm2" onChange={(e) => setMbkm2(e.target.value)} defaultValue={mbkm2}>
                {list_mbkm2.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </Select>
            </FormControl>
            </VStack>
          </FieldGroup>
          <MBKM2 mbkm2={mbkm2 == "Iya" ? true : false}></MBKM2>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  )}
  