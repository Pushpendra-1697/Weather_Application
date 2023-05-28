import { Box, Button, Container, Heading, Img, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { BiLoader } from 'react-icons/bi';
import '../styles.css';
import GMap from "../Components/GMap";

let key = "1d6d00d85826ad363f137032145ce1b1";
function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);


  const getWeather = async () => {
    try {
      setLoading(true);
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
      res = await res.json();
      setData(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setIsError(true);
    }
    setCity('');
  };

  return (
    <Box w={['100%','100%','70%']} m='auto' padding={'10px'}>
      <Heading mb='2%' textAlign={'center'} color={'green.600'} fontSize={'28px'}>Dashboard</Heading>
      <Input value={city} w={'200px'} onChange={(e) => setCity(e.target.value)} placeholder="Enter City Name" type="text" />
      <Button variant={'outline'} color={'white'} bg='teal' ml='3px' onClick={getWeather}>{loading ? <BiLoader fontSize={'23px'} color="black" /> : "Search"}</Button>
      {isError && <Error />}
      {loading && <Loading />}

      {data && <Container id="container" m='4% 0 0 0'>
        <label style={{ color: 'red', borderBottom: '1px solid red' }}>City Name</label>
        <Text>{data.name}</Text>
        <label style={{ color: 'red', borderBottom: '1px solid red' }}>City Temperature</label>
        <Box display={'flex'} gap={'10px'}>
          <Text>{`Normal_Temp:- ${data.main.temp}`}<sup>0</sup>C</Text>
          <Text>{`Min_Temp:- ${data.main.temp_min}`}<sup>0</sup>C</Text>
          <Text>{`Max_Temp:- ${data.main.temp_max}`}<sup>0</sup>C</Text>
        </Box>
        <label style={{ color: 'red', borderBottom: '1px solid red' }}>City Humidity, Pressure & Sea_level</label>
        <Box display={'flex'} gap={'10px'}>
          <Text>{`Humidity - ${data.main.humidity}`}</Text>
          <Text>{`Pressure - ${data.main.pressure}`}</Text>
          <Text>{`Sea_level - ${data.main.sea_level}`}</Text>
        </Box>
        <label style={{ color: 'red', borderBottom: '1px solid red' }}>Wind</label>
        <Box>{`Deg: ${data.wind.deg} Gust: ${data.wind.gust} Speed: ${data.wind.speed}`}</Box>
        <label style={{ color: 'red', borderBottom: '1px solid red' }}>Weather</label>
        <Box mb='5%'>
          {data && data.weather.map(({ id, description }) =>
            <Box key={id} m='1% 0'>
              <Text>{description}</Text>
              <video type='mp4/video' src="https://cdn.dribbble.com/userupload/3249146/file/original-c04cef3ec8076db4d9cbaf530a9e462f.mp4"></video>
            </Box>
          )}
        </Box>
      </Container>}
      <GMap data={data} />
    </Box>
  );
}

export default Dashboard;
