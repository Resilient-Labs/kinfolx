import { useEffect } from 'react';
import './App.css';

function App() {
  //sample code to make sure backend is connected. 
  const fetchTest = async() => {
    const res = await fetch('/api/test'); 
    const result = await res.json(); 
    console.log(result); 
  }

  useEffect(() => {
    fetchTest()
  }, [])

  return (
    <>
      <div>Hello Kinfolx!!!</div>
    </>
  );
}

export default App;
