import { 
  Container,
  Box,
  Flex,
  Spacer,
  Text,
  IconButton
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

function Navbar() {
  return (
    <>
      <Box bg='teal.500' p={5} data-aos="fade-down">
        <Container maxW='container.lg'>
          <Flex>
            <Box p='2'>
              <Text as='h1' color='white' fontWeight='bold' fontSize='xl'>Muhammad Ikhsan</Text>
            </Box>
            <Spacer />
            <Box>
                <IconButton rounded='50%' aria-label='Theme' size='md' icon={<MoonIcon />} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;