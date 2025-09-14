import { Heading, Link, Stack, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <Box py={{ base: 10, md: 20 }} textAlign="center">
      <Heading
        lineHeight={1.3}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        mb={6}
      >
        Get in Touch
      </Heading>

      <Stack spacing={4} align="center">
        <Text>
          Email:{" "}
          <Link href="mailto:ravi@jobitmail.com" color="#DD6B20" fontWeight="bold">
            ravi@jobitmail.com
          </Link>
        </Text>

        <Text>
          Phone:{" "}
          <Link href="tel:+19376106752" color="#DD6B20" fontWeight="bold">
            (937) 610-6752
          </Link>
        </Text>

        <Text>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/ravivarmalingala/"
            target="_blank"
            rel="noopener noreferrer"
            color="#DD6B20"
            fontWeight="bold"
          >
            linkedin.com/in/ravivarmalingala
          </Link>
        </Text>

        <Text>
          GitHub:{" "}
          <Link
            href="https://github.com/ravivarmalingala"
            target="_blank"
            rel="noopener noreferrer"
            color="#DD6B20"
            fontWeight="bold"
          >
            github.com/ravivarmalingala
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}
