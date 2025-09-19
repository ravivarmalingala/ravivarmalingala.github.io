import { Heading, Link, Stack, Box, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const MotionHStack = motion(HStack);

export default function Contact() {
  return (
    <Box py={{ base: 10, md: 20 }} textAlign="center">
      {/* Heading with zoom + glow + pulse on hover */}
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
        Code, Call, Connect, Clone
      </Heading>

      {/* Links with staggered fade-in and creative hover effects */}
      <Stack spacing={4} align="center">
        {[
          {
            icon: <FaEnvelope />,
            label: "Inboxify",
            href: "mailto:ravivarmainsights@gmail.com",
          },
          {
            icon: <FaPhone />,
            label: "Callgate",
            href: "tel:+19376106752",
          },
          {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ravivarmalingala/",
          },
          {
            icon: <FaGithub />,
            label: "GitZone",
            href: "https://github.com/ravivarmalingala",
          },
        ].map((item, i) => (
          <MotionHStack
            key={item.label}
            spacing={2}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{
              scale: 1.12,
              color: "#DD6B20",
              textShadow: "0px 0px 8px rgba(221, 107, 32, 0.6)",
              rotate: 1,
            }}
            style={{
              cursor: "pointer",
              padding: "6px 12px",
              borderRadius: "8px",
            }}
            _hover={{
              backgroundColor: "rgba(221, 107, 32, 0.1)",
            }}
          >
            {item.icon}
            <Link
              href={item.href}
              target={item.label !== "Inboxify" && item.label !== "Callgate" ? "_blank" : undefined}
              rel="noopener noreferrer"
              isExternal
              fontWeight="bold"
              color="#DD6B20"
            >
              {item.label}
            </Link>
          </MotionHStack>
        ))}
      </Stack>
    </Box>
  );
}
