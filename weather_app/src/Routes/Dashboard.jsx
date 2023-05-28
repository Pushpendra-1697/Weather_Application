import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Loading from "../Components/Loading";
import Error from "../Components/Error";


function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  return (
    <Box padding={'10px'}>
      <Heading mb='2%' textAlign={'center'} color={'green.600'} fontSize={'28px'}>Dashboard</Heading>
      {isError && <Error />}
      {loading && <Loading />}
    </Box>
  );
}

export default Dashboard;
