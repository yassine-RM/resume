import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
function App() {
  const [name,setName] = useState('yassine')
  useEffect(() => {
    axios.get('http://localhost:5555/')
          .then(res=>{
            console.log("res==>",res);
            setName(res.data.page)})
          .catch(err=>{
            console.log("err==>",err);
          })
  }, [])
  
  return (
    <div className="App">
       {name}
    </div>
  );
}

export default App;
