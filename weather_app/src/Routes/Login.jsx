import { Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Box, Input, useToast } from "@chakra-ui/react";



function Login() {
  const [formData, setFormData] = useState('');
  const { isAuth, loginUser } = useContext(AuthContext);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    loginUser();
    toast({
      title: `Login Successful.`,
      status: "success",
      isClosable: true,
    });
  };

  if (isAuth) {
    return <Navigate to='/dashboard' />
  }
  return (
    <Box mt={['25%', '25%', '5%']}>
      <form onSubmit={onSubmit}>
        <Box mb='1%'>
          <label>
            <Input w='300px' type="text" name="name" placeholder="Enter Username" onChange={handleChange} />
          </label>
        </Box>
        <Box m='1% 0'>
          <label>
            <Input
              w='300px'
              type="password" name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </label>
        </Box>
        <Box>
          <Input bg='black' color={'white'} w='300px' type="submit" value="SUBMIT" />
        </Box>
      </form>
      <Box color={'red'} mt='2%' fontSize={'23px'}>
        <Link to="/">Go Back</Link>
      </Box>
    </Box>
  );
}
export default Login;
