
import { useEffect, useState } from "react"

const useOrders = (query,reload) =>{
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/purchased?${query}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[query,reload])

    return orders;
}

export default useOrders;



