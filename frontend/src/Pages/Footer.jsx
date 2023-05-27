import { Box, Container, Grid, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="red.100">
      <Container maxW="container.xl" py={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Box>
            <Text fontWeight="bold">OVERVIEW</Text>
            <Text>About us</Text>
            <Text>FAQs</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms & Conditions</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">OTHERS</Text>
            <Text>Advertise with Us</Text>
            <Text>Careers</Text>
            <Text>Customer Care</Text>
            <Text>Scrap my car</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">CONNECT WITH US</Text>
            <Text>support@buycars.com</Text>
            <Text>Dealer solutions</Text>
            <Text>Used Cars Business</Text>
          </Box>
        </Grid>
        
      </Container>
    </Box>
  );
}

export default Footer;