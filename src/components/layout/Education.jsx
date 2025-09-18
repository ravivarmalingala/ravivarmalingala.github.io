import { Box, Heading, Text, Stack, HStack } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

export default function Education() {
  const educationData = [
    {
      degree: "Master’s in Computer Science",
      school: "University of Dayton, USA",
      year: "Dec 2024",
    },
    {
      degree: "Bachelor’s in Computer Science and Technology",
      school: "Jawaharlal Nehru Technological University, India",
      year: "May 2016",
    },
  ];

  return (
    <Box py={{ base: 10, md: 20 }} textAlign="center">
      <Heading
        mb={10}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        fontWeight={700}
        color="#DD6B20"
      >
        🎓 Education
      </Heading>

      <Stack spacing={10} align="center">
        {educationData.map((edu, i) => (
          <MotionBox
            key={i}
            p={6}
            w="80%"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(221, 107, 32, 0.6)",
            }}
          >
            <HStack spacing={4} justify="center">
              <FaGraduationCap size={36} color="#DD6B20" />
              <Stack textAlign="left">
                <Text fontWeight="bold" fontSize="lg">
                  {edu.degree}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {edu.school}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {edu.year}
                </Text>
              </Stack>
            </HStack>
          </MotionBox>
        ))}
      </Stack>
    </Box>
  );
}
