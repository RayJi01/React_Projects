import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import { Box, Center, Text, Image } from '@chakra-ui/react';
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Image src="https://i.pravatar.cc/150?img=7" alt="Avatar" borderRadius="full" boxSize="150px" mb="4" />
    <Text fontSize="3xl" fontWeight="bold">
          {greeting}
        </Text>
    <Text fontSize="60px" color="white" fontWeight="bold">
      {bio1}
    </Text>
    <Text fontSize="60px" color="white" fontWeight="bold">
      {bio2}
    </Text>
  </FullScreenSection>
);

export default LandingSection;
