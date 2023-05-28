import { Alert, AlertIcon, Box } from '@chakra-ui/react';
import React from 'react';

const Error = () => {
    return (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Alert status='error' w="300px" >
                <AlertIcon />
                {`Something went Wrong 😒`}
            </Alert>
        </Box>
    );
}

export default Error;