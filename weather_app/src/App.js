import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import "./styles.css";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Box className="App" display="flex" flexDirection="column">
      {/* The Navbar component is rendered at the top of the application */}
      <Navbar id="top" />
      {/* The AllRoutes component is responsible for rendering different routes based on the current URL */}
      <AllRoutes />
      {/* Footer Component */}
      <Footer />
    </Box>
  );
}

