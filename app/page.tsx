"use client"

import { Container, Box, Stack, Heading, Text, Button } from "@chakra-ui/react"
import { Animate } from "react-simple-animate";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container maxWidth="container.xl" padding="0px 10px 0px 10px" flexDirection="column" justifyContent="center" alignItems="center">
        <Box
          position="relative"
          bgImage="/Cover.jpg"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="column" spacing={6} alignItems="center" padding="10px 0px 0px 0px">
            <Animate
              play
              duration={2}
              start={{
                opacity: 0,
                transform: "translateY(-10px)",
              }}
              end={{ opacity: 1, transform: "translateY(10px)" }}
            >
              <Box py={2} px={3} bg="teal" width="max-content" color="white" rounded="md" fontSize="sm">
                <Stack direction="row">
                  <Text fontWeight="bold">Search, Plan, Go! 🚀</Text>
                  <Text>Join the Tryp.com</Text>
                </Stack>
              </Box>
            </Animate>
            <Animate
              play
              duration={2}
              start={{
                opacity: 0
              }}
              end={{ opacity: 1 }}
            >
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
            </Animate>
            <Animate
              play
              duration={2}
              easeType="cubic-bezier(0.12, 0, 0.39, 0)"
              start={{
                opacity: 0,
                transform: "translateX(-100px)",
              }}
              end={{ opacity: 1, transform: "translateX(0px)" }}
            >
              <Button size="lg" colorScheme="green" mt="24px">
                <Link href="/BookingsTable">See Bookings Table</Link>
              </Button>
            </Animate>
          </Stack>
        </Box>
      </Container>
    </main>
  )
}
