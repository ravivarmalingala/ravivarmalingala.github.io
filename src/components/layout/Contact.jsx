import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <div>
      <Stack py={{ base: 10, md: 20 }}>
        <Stack flex={1} spacing={{ base: 5, md: 6 }} position={"relative"}>
          <Heading
            lineHeight={1.3}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            <Text as={"span"}>Get in touch with me</Text>
          </Heading>

          <Text>
            Email:{" "}
            <Link href="mailto:ravi@jobitmail.com" color="#DD6B20">
              ravi@jobitmail.com
            </Link>
          </Text>

          <Text>
            Phone:{" "}
            <Link href="tel:+19376106752" color="#DD6B20">
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
            >
              github.com/ravivarmalingala
            </Link>
          </Text>
        </Stack>
      </Stack>
    </div>
  );
}
