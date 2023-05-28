import React from "react";
import {
  Box,
  Skeleton,
  Flex,
  Spacer,
  SkeletonCircle,
  Grid,
} from "@chakra-ui/react";

// Loading component responsible for rendering a set of skeleton loading cards
const Loading: React.FC = () => {
  const skeletonCount = 15;

  // Generate an array of skeleton loading cards based on the skeletonCount
  const skeletonCards = Array.from(Array(skeletonCount)).map((_, index) => (
    <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Flex alignItems="center">
        <Skeleton height="30px" width="100px" mr={2} />
        <Spacer />
        <SkeletonCircle height="40px" width="40px" />
      </Flex>
    </Box>
  ));

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {skeletonCards}
    </Grid>
  );
};

export default Loading;