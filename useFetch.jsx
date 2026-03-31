 import{useEffect, useState} from 'react'

 const useFetch = (url) => {
    const [Courses,setCourses] = useState([]);
        const [dummy,setDummy] = useState(true);
        const [error,setError] = useState(null);
        useEffect(()=>{
            const timer = setTimeout(()=>{ 
            console.log("useeffect called");
            console.log(dummy);
            fetch(url)
            .then(response =>{
                if(!response.ok){    
                throw Error("couldnot retrive data")}
                console.log(response);
            return response.json()})
            .then(data=>setCourses(data))
            .catch((error)=>{
                console.log(error.message);
                setError(error.message);
            })  
        },3090)
        },[]);
        return [Courses,setCourses,error];
    }
    export default useFetch;