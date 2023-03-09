import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { FieldGroup } from './fieldGroup'
import { useState } from 'react'
import { RangeDatepicker } from 'chakra-dayzed-datepicker';

export const MBKM2 = (props) => {
    const mbkm2 = props.mbkm2
    const [selectedDates2, setSelectedDates2] = useState([new Date(), new Date()]);

    if (mbkm2 == true) {
        return (
            <FieldGroup title="Data MBKM 2">
            <VStack width="full" spacing="6">
              <FormControl id="name">
                <FormLabel>Nama MBKM</FormLabel>
                <Input type="text" maxLength={255} />
              </FormControl>
  
              <FormControl id="jenis">
                <FormLabel>Jenis MBKM</FormLabel>
                <Input type="text"/>
              </FormControl>
  
              <FormControl id="mitra">
                <FormLabel>Mitra/Tempat Pelaksanaan</FormLabel>
                <Input type="text"/>
              </FormControl>
  
              <FormControl id='periode'>
                <FormLabel>Periode Pelaksanaan</FormLabel>
                <RangeDatepicker
                  selectedDates={selectedDates2}
                  onDateChange={setSelectedDates2}
                />
              </FormControl>
            </VStack>
          </FieldGroup>
        )
    }
    else {
        return (
            <Box>
            </Box>
        )
    }
}