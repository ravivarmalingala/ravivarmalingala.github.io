import { Heading, Link, Stack, Text, Box } from "@chakra-ui/react";
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
      >
        Contact me however you like. I’m multichannel.
      </Heading>

      <Stack spacing={4} align="center">
        <Text>
          <FaEnvelope />{" "}
          <Link
            href="mailto:ravivarmainsights@gmail.com"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
          >
            Inbox Me
          </Link>
        </Text>

        <Text>
          <FaPhone />{" "}
          <Link
            href="tel:+19376106752"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
          >
            Voice
          </Link>
        </Text>

        <Text>
          <FaLinkedin />{" "}
          <Link
            href="https://www.linkedin.com/in/ravivarmalingala/"
            target="_blank"
            rel="noopener noreferrer"
            isExternal
            color="#DD6B20"
            fontWeight="bold"
          >
            Career
          </Link>
        </Text>

        <Text>
          <FaGithub />{" "}
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
        </Text>
      </Stack>
    </Box>
  );
}
