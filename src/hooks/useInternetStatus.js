import {useEffect, useState} from 'react'


const useInternetStatus = () =>{
    const [status, setStatus] = useState(true); // Here we are using the state because we need to track the changing thing ....
    

    const internetOn = () =>{ // It is changing the value of state according to the internet connection
        setStatus(true);
    }
    const internetOff = () =>{ // It is changing the value of state according to the internet connection
        setStatus(false);
    }

    useEffect(_ =>{
        window.addEventListener('online' ,internetOn); //It is an eventhandler which calls the functions according to the internet connections
        window.addEventListener('offline', internetOff); //Here the 'Online & Offline' we are getting from browser....
        return(_ =>{
             window.removeEventListener('online', internetOn); // It is cleanup function when the internet is about to off or on..
            window.removeEventListener('offline', internetOff);// It is cleanup function when the internet is about to off or on..
        })
    }, []);
    return status // we are returning this state becuase all the components are re-render...
}

export default useInternetStatus;