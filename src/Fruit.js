import React ,{useState, useEffect} from 'react';
import "./Products.css"


const Fruits=()=>{
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:5000/products/fruits')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setData(result);
        })
    
    }, [])
   
    if(!loading){
        return <div>Loading ...</div>;
    }
    else{
        return(
                 <div className="fruit">  
            <ul className="fruits">
            {data.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
            </div>   
     )
    }
}
export default Fruits;
