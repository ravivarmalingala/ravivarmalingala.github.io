import { Heading, Link, Stack, Box, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

export default function Contact() {
  return (
    <Box py={{ base: 10, md: 20 }} textAlign="center">
      {/* Heading with zoom + glow on hover */}
      <Heading
        lineHeight={1.3}
        fontWeight={600}
        fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        mb={6}
        display="inline-block"
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.15)",
          color: "#DD6B20",
          textShadow: "0px 0px 12px rgba(221, 107, 32, 0.7)"
        }}
        cursor="pointer"
      >
        Code, Call, Connect
      </Heading>

      {/* Links with creative hover effects */}
      <Stack spacing={4} align="center">
        <HStack
          spacing={2}
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.12)",
            color: "#DD6B20",
            textShadow: "0px 0px 8px rgba(221, 107, 32, 0.6)"
          }}
          cursor="pointer"
        >
          <FaEnvelope />
          <Link
            href="mailto:ravivarmainsights@gmail.com"
            isExternal
            fontWeight="bold"
          >
            Inboxify
          </Link>
        </HStack>

        <HStack
          spacing={2}
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.12)",
            color: "#DD6B20",
            textShadow: "0px 0px 8px rgba(221, 107, 32, 0.6)"
          }}
          cursor="pointer"
        >
          <FaPhone />
          <Link href="tel:+19376106752" isExternal fontWeight="bold">
            Callgate
          </Link>
        </HStack>

        <HStack
          spacing={2}
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.12)",
            color: "#DD6B20",
            textShadow: "0px 0px 8px rgba(221, 107, 32, 0.6)"
          }}
          cursor="pointer"
        >
          <FaLinkedin />
          <Link
            href="https://www.linkedin.com/in/ravivarmalingala/"
            target="_blank"
            rel="noopener noreferrer"
            isExternal
            fontWeight="bold"
          >
            LinkedIn
          </Link>
        </HStack>

        <HStack
          spacing={2}
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.12)",
            color: "#DD6B20",
            textShadow: "0px 0px 8px rgba(221, 107, 32, 0.6)"
          }}
          cursor="pointer"
        >
          <FaGithub />
          <Link
            href="https://github.com/ravivarmalingala"
            target="_blank"
            rel="noopener noreferrer"
            isExternal
            fontWeight="bold"
          >
            GitZone
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
}
