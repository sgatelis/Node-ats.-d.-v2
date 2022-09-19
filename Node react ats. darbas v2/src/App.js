import react, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from "./context/MainContext"
import './App.css'
import MoviePage from './pages/MoviePage';

import io from "socket.io-client"
import LoginRegistration from './pages/LoginRegistration';
import ReservationPage from './pages/ReservationPage';


const socket = io.connect("http://localhost:4000")


function App() {

    const [user, setUser] = useState(null)
    const [movies, setMovies] = useState([])
    const [tickets, setTickets] = useState([])
    

    useEffect(() => {

        socket.on("login", (data) => {
            console.log(data);
        })
        socket.on("movies", data => {
            setMovies(data)
            console.log(data);
        })
    }, []) 

    
    
    return (
        <div className="App d-flex">
            <MainContext.Provider value={{socket, user, setUser, movies, setMovies, tickets, setTickets}}>
                <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginRegistration/>} ></Route>
                    <Route path='/movie' element={<MoviePage/>} ></Route>
                    <Route path='/reservation/:index' element={<ReservationPage/>} ></Route>
                </Routes>            
            </BrowserRouter>
            </MainContext.Provider>         

         </div>

    );
}

export default App;