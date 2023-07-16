import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Form() {
  // const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullname: '',
    job: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    relation_1: '',
    relation_1_phone: '',
    relation_1_name: '',
    relation_2: '',
    relation_2_phone: '',
    relation_2_name: ''

  })

  function handleFormSubmission(e) {
    // e.preventDefault()
    console.log(formData)
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Employee Contact Form
          </Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {/* <HStack> */}
            {/* <Box> */}
            <FormControl id="full_name" isRequired>
              <FormLabel>Employee Full name</FormLabel>
              <Input type="text" value={formData.fullname} onChange={(e) => setFormData(prev => ({ ...prev, fullname: e.target.value }))} />
            </FormControl>
            {/* </Box> */}
            {/* <Box> */}
            <FormControl id="job_title">
              <FormLabel>Job Title</FormLabel>
              <Input type="text" value={formData.job} onChange={(e) => setFormData(prev => ({ ...prev, job: e.target.value }))} />
            </FormControl>
            {/* </Box> */}
            {/* </HStack> */}
            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input type="phone" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />
            </FormControl>

            {/* Address */}
            <FormControl id="address_complete" isRequired>
              <FormLabel>Address</FormLabel>
              <Textarea value={formData.address} onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))} />
            </FormControl>

            <FormControl id="city" isRequired>
              <FormLabel>City</FormLabel>
              <Input type="text" value={formData.city} onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))} />
            </FormControl>

            <FormControl id="state" isRequired>
              <FormLabel>State</FormLabel>
              <Input type="text" value={formData.state} onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))} />
            </FormControl>

            {/* Primary contact */}
            <FormControl id="relation_1_name" isRequired>
              <FormLabel>Primary Emergency Contact</FormLabel>
              <Input type="text" value={formData.relation_1_name} onChange={(e) => setFormData(prev => ({ ...prev, relation_1_name: e.target.value }))} />
            </FormControl>

            {/* Relation 1 */}
            <FormControl id="relation_1" isRequired>
              <FormLabel>Relationship</FormLabel>
              <Input type="text" value={formData.relation_1} onChange={(e) => setFormData(prev => ({ ...prev, relation_1: e.target.value }))} />
            </FormControl>

            {/* phone 1 */}
            <FormControl id="relation_1_phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input type="phone" value={formData.relation_1_phone} onChange={(e) => setFormData(prev => ({ ...prev, relation_1_phone: e.target.value }))} />
            </FormControl>


            <FormControl id="relation_2_name" isRequired>
              <FormLabel>SecondaryEmergency Contact</FormLabel>
              <Input type="text" value={formData.relation_2_name} onChange={(e) => setFormData(prev => ({ ...prev, relation_2_name: e.target.value }))} />
            </FormControl>

            {/* Relation 1 */}
            <FormControl id="relation_2" isRequired>
              <FormLabel>Relationship</FormLabel>
              <Input type="text" value={formData.relation_2} onChange={(e) => setFormData(prev => ({ ...prev, relation_2: e.target.value }))} />
            </FormControl>

            {/* phone 1 */}
            <FormControl id="relation_2_phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input type="phone" value={formData.relation_2_phone} onChange={(e) => setFormData(prev => ({ ...prev, relation_2_phone: e.target.value }))} />
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleFormSubmission}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}