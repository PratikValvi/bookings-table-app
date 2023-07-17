"use client"

import { Container, Box, Stack, Heading, Text, Button } from "@chakra-ui/react"

export default function Home() {
  return (
    <main>
      <Container maxWidth="container.xl" padding="0px 10px 0px 10px" flexDirection="column" justifyContent="center" alignItems="center">
        <Box
          position="relative"
          bgImage="/cover.jpg"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="column" spacing={6} alignItems="center" padding="10px 0px 0px 0px">
            <Box py={2} px={3} bg="teal" width="max-content" color="white" rounded="md" fontSize="sm">
              <Stack direction="row">
                <Text fontWeight="bold">Search, Plan, Go! 🚀</Text>
                <Text>Join the Tryp.com</Text>
              </Stack>
            </Box>
            <Heading
              as="h1"
              fontWeight="bold"
              textAlign="center"
            >
              Welcome to Bookings Table <br />
              where you can find the
            </Heading>
            <Heading as="h3" color="teal" bg="linear-gradient(transparent 50%, #83e9e7 50%)">
              perfect travel deal for your budget
            </Heading>
            <Button size="lg" colorScheme="green" mt="24px">
              See Bookings Table
            </Button>
          </Stack>
        </Box>
      </Container>
    </main>
  )
}
