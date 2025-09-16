import { Heading, Link, Stack, Box, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

export default function Contact() {
  return (
    <Box py={{ base: 10, md: 20 }} textAlign="center">
      {/* Heading with zoom on hover */}
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

      {/* Links with hover zoom */}
      <Stack spacing={4} align="center">
        <HStack spacing={2}>
          <FaEnvelope />
          <Link
            href="mailto:ravivarmainsights@gmail.com"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
            transition="transform 0.25s ease-out"
            _hover={{ transform: "scale(1.12)" }}
          >
            Inboxify
          </Link>
        </HStack>

        <HStack spacing={2}>
          <FaPhone />
          <Link
            href="tel:+19376106752"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
            transition="transform 0.25s ease-out"
            _hover={{ transform: "scale(1.12)" }}
          >
            Callgate
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
            transition="transform 0.25s ease-out"
            _hover={{ transform: "scale(1.12)" }}
          >
            LinkedIn
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
            transition="transform 0.25s ease-out"
            _hover={{ transform: "scale(1.12)" }}
          >
            GitZone
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
}
