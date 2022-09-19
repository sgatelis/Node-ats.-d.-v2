import {useRef, useContext} from 'react';
import MainContext from '../context/MainContext';
import {useNavigate} from "react-router-dom"


const LoginRegistration = () => {

    const {socket, setUser} = useContext(MainContext)

    const nav = useNavigate()

    const refs = {
        username: useRef(),
        password1: useRef(),      
        password2: useRef(),       
        age: useRef()       
    }

    function register() {

        const user  = {                      
            username: refs.username.current.value,
            password1: refs.password1.current.value,            
            password2: refs.password2.current.value,            
            age: refs.age.current.value            
        }

        console.log(user)

        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        }

        fetch("http://localhost:4000/register", options)
            .then(res => res.json())
            .then(data => {
                console.log(data)           
            })
    } 

    const ref = {
        username: useRef(),
        password: useRef()        
    }

    function login() {
        
        const user  = {                      
            username: ref.username.current.value,
            password: ref.password.current.value               
        }

        console.log(user)

        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        }

        fetch("http://localhost:4000/login", options)
            .then(res => res.json())
            .then(data => {               
                if(!data.error){
                    setUser(data.data) 
                    socket.emit("login", data.data)                
                    nav("/movie")
                }
                console.log(data) 
                
            })
             
    }

    return (
        <div className="d-flex align-center">
            
            <div className="grow1 d-flex align-center flex-column">               
                <input ref={refs.username} type="text" placeholder="username"/>
                <input ref={refs.password1} type="text" placeholder="password 1"/>
                <input ref={refs.password2} type="text" placeholder="password 2"/>
                <input ref={refs.age} type="number" placeholder="user age"/>
               
                <button onClick={register}>Register</button>
            </div>

            <div className="grow1 d-flex align-center flex-column">
                <input ref={ref.username} type="text" placeholder="username"/>
                <input ref={ref.password} type="text" placeholder="password"/>
                <button onClick={login}>Login</button>
            </div>

        </div>
    );
};

export default LoginRegistration;