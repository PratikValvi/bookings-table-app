"use client"

import { Container, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <main>
      <Container maxWidth="container.xl" padding="10px 10px 0px 10px" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading>Hello Next.js</Heading>
      </Container>
    </main>
  )
}
