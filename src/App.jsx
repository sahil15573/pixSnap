import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import axios from 'axios';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {

  const [images, setImages] = useState([])
  const [search, setSearch] = useState("nature")

  const API_KEY = "lNgzJ3mMUz5bEDzmlGDvQuhDHs0T4QauNqB6MdWJoH5pI5UUqKXOlEjQ";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      //console.log("response from API",res)
      setImages(res.data.photos)
      console.log(images)
    }
    fetchImage()
  }, [search])

  return (
    <>
    <Router>
    <Navbar setSearch={setSearch}/>
    <Routes>
      <Route path='/' element={<Home images={images} />}/>
    </Routes>
    </Router>
      
    </>
  )
}

export default App