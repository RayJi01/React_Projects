import { Heading, HStack, Image, Text, VStack, Box, Flex} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc }) => {
  console.log(imageSrc);
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="4"
      bg="white"
    >
      <Image src={imageSrc} alt={title} height="200px" width="100%" objectFit="cover" />
      <Box p="2">
        <Heading size="md">{title}</Heading>
        <Text mt="2" color="gray.600">
          {description}
        </Text>
        <Text
          color="gray.600"
          bottom="4" // Distance from the bottom of the parent Box
          mt="4"
        >
          See More
          {'    '}
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
