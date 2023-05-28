import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from '../Components/PrivateRoute';
import { Box } from '@chakra-ui/react';

function AllRoutes() {
  return (
    <Box mt={['10%', '10%', '7%']}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }></Route>
      </Routes>
    </Box>
  );
}

export default AllRoutes;
