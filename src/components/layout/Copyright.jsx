import { Link, Text } from "@chakra-ui/react";

export default function Copyright() {
  return (
    <Text py={"50px"} mt={5} fontSize="sm" color="#5A6065" fontWeight={400} textAlign="center">
      © {new Date().getFullYear()} Ravi Varma Lingala. All rights reserved.{" "}
      <Text
        as={Link}
        href="https://github.com/ravivarmalingala/ravivarmalingala.github.io"
        position="relative"
        isExternal
        color="#DD6B20"
        fontWeight="bold"
      >
        View Source
      </Text>
    </Text>
  );
}
