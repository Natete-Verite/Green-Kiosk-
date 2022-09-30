import React ,{useState, useEffect} from 'react'
import './index.css';
import "./Products.css";

 const Vegetables=()=>{
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:5000/products/vegetables')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setData(result);
        })
     
    }, [])
   
  
     if(!loading){
        return <div>Loading ...</div>;
    }
  
      
        return(
                <div className="vegetable">  
                <h3>Our vegetables</h3> 
            <ul className="vegies" >
            {data.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
            </div> 
 
     )
    }
    
    export default Vegetables;
