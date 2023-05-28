import React, { useContext } from "react";
import {
  Text,
  Flex,
  Button,
  HStack,
  Container,
  Link,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

let userDetails = JSON.parse(localStorage.getItem('userDetails')) || "";
// Navbar component responsible for rendering the navigation bar
const Navbar: React.FC = () => {
  // Retrieve authentication context and logout function from the AuthContext
  const { isAuth, logoutUser } = useContext(AuthContext);

  // Retrieve the current location
  const location = useLocation();

  // Initialize Chakra UI toast
  const toast = useToast();

  // Handle logout action
  const handleLogout = () => {
    logoutUser();
    // Show a toast notification for successful logout
    toast({
      title: "Logout Success.",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container
      px={4}
      shadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
      maxW={"100%"}
      position="fixed"
      backdropFilter={"blur(10px)"}
      color="rgb(1, 75, 97)"
      padding={"20px 30px"}
      top="0px"
      margin={"auto"}
      left="0px"
      zIndex={"10"}
    >
      <Flex h={8} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={6}
            justifyContent={"space-between"}
            display={"flex"}
          >
            {/* Render the Home link */}
            <Link
              to={"/"}
              as={NavLink}
              borderBottom={
                location.pathname === "/" ? "5px solid" : undefined
              }
              _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
            >
              <Text fontSize={"20px"} fontWeight="500">
                Home
              </Text>
            </Link>
            {/* Render the Login link or Logout button based on authentication state */}
            {isAuth ? (
              <Button onClick={handleLogout} colorScheme="teal">
                Logout
              </Button>
            ) : (
              <Link
                to={"/login"}
                as={NavLink}
                borderBottom={
                  location.pathname === "/login" ? "5px solid" : undefined
                }
                _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
              >
                <Text fontSize={"20px"} fontWeight="500">
                  Login
                </Text>
              </Link>
            )}
          </HStack>
        </HStack>
        {isAuth && <Text textAlign={'right'}>Welcome❤️{userDetails.name}</Text>}
      </Flex>
    </Container>
  );
};

export default Navbar;