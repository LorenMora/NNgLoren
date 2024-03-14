import { useEffect, useState } from 'react'
import getCourses from '../api/getCourses';

const useGetCourses = () => {
    const [ data, setData ] = useState([]);

    //Pretending I am getting these resources through an http request
    useEffect(()=>{
        const courses = getCourses();
        setData(courses);
    },[])
    
  
    return data;
}

export default useGetCourses;