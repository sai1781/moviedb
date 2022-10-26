import {Routes,Route} from 'react-router-dom';
// import FavouriteMovieCard from './Components/FavouriteMovieCard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Details from './Pages/Details';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Search from './Pages/Search';
import useInternetStatus from './hooks/useInternetStatus';
import Offline from './Components/Offline';
// import { useNavigate } from 'react-router-dom';
// import useLocalStorage from 'use-local-storage';
import dp from './assets/encoded-20221019174729.txt'
// import SingleSearchCardSkelton from './Components/SingleSearchCardSkelton';
// import { useEffect, useState } from "react";


function App() {
  const internetConnected = useInternetStatus();
  // const navigate = useNavigate();
  console.log(internetConnected);
  console.log(dp);
  const ima = dp;
  console.log(ima);

  // useEffect(_ =>{
  //   if(internetConnected == false){
  //     navigate(-1);
  //     console.log("Online");
  //   }else{
  //     navigate("no_internet");
  //     console.log("offline");
  //   }
  // },[internetConnected])
  return (
    <>
      
      <main>
      <Header />
      {internetConnected ? <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/search' element ={<Search />} />
        <Route path='/Details/:id' element ={<Details />} />
        <Route path='/404' element ={<NotFound />} /> 
        <Route path='no_internet' element={<Offline/>}/>
      </Routes> : <Offline image={dp}  />}
      
      <Footer />
      </main>
    </>

  );
}

export default App;
