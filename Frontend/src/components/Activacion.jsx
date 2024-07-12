import { useEffect } from "react";
import { useParams } from "react-router-dom";


export const Activacion = () => {
    const { token } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/api/activate/${token}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[]);
  return (
      <div className="p-2">
          <h1>Activacion</h1>
          <div>
              <h1>{token}</h1>
          </div>
      </div>
  );
}