import { useEffect, useState } from "react"

const useServices =()=>{
    const [serveces,setServices] =useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return [serveces,setServices]
}
export default useServices