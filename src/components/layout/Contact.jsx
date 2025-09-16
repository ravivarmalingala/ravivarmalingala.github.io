import { Heading, Link, Stack, Box, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

export default function Contact() {
  return (
    <Box py={{ base: 10, md: 20 }} textAlign="center">
      <Heading
        lineHeight={1.3}
        fontWeight={600}
        fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        mb={6}
        display="inline-block"
        transition="transform 0.25s ease-out"
        _hover={{ transform: "scale(1.12)" }}
        cursor="pointer"
      >
        Code, call, connect
      </Heading>

      <Stack spacing={4} align="center">
        <HStack spacing={2}>
          <FaEnvelope />
          <Link
            href="mailto:ravivarmainsights@gmail.com"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
          >
            Inbox Me, Maybe
          </Link>
        </HStack>

        <HStack spacing={2}>
          <FaPhone />
          <Link
            href="tel:+19376106752"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
          >
            Voice Summoner
          </Link>
        </HStack>

        <HStack spacing={2}>
          <FaLinkedin />
          <Link
            href="https://www.linkedin.com/in/ravivarmalingala/"
            target="_blank"
            rel="noopener noreferrer"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
          >
            Career Lurking Spot
          </Link>
        </HStack>

        <HStack spacing={2}>
          <FaGithub />
          <Link
            href="https://github.com/ravivarmalingala"
            target="_blank"
            rel="noopener noreferrer"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
          >
            Commit Central
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
}
