import axios from 'axios';
import { useEffect } from 'react';

const url = 'https://yahoo-weather5.p.rapidapi.com/weather';
function App() {

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://yahoo-weather5.p.rapidapi.com/weather',
      params: {
        location: 'sunnyvale',
        format: 'json',
        u: 'f'
      },
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'c908fc90d5msh8a4c92ce59a7eaep18880ejsnb9737895b1e3',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    };
    
    try{
      const res = await axios.request(options);
      console.log(res.data)
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div>
    </div>
  );
}

export default App;
