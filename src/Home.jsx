

import { effect, signal } from "@preact/signals-react";

import "./styles.css"
import axios from 'axios';
// import {Cards} from './cards';
// import {card} from './card';
const query = signal("");
const tray = signal([]);


export  function Home() {
    // const [stuffs,setstuffs] = useState([]);  
    let list_of_items = [];
    fetch("os.json")
  .then(response => response.json())
  .then(json => {
    // console.log(json);
    localStorage.setItem("paper",JSON.stringify(json));
  })



  const Fdata = JSON.parse(localStorage.paper);
  // console.log(Fdata);
  const hmap = new Map(Object.entries(Fdata));
  // console.log(hmap);

  function search(svalue){
    
    for (const [key, value] of hmap) {
      
      if (value.q.includes(svalue)) {
        // console.log(`Key: ${key}, Value: ${value}`); 
        tray.value=[...tray.value, key];
      }
    }
  
  }
  
    // function handleQuery(value) {
    //    query.value = value;
  
    //   axios.get('http://127.0.0.1:8000/query?s=' + value)
    //     .then(function (response) {
    //       // handle success
    //       // console.log(response.data.data);
    //       tray.value = [...response.data.data]
    //       setstuffs([...response.data.data])
          
    //       // console.log(tray.value.length)
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .finally(function () {
    //       // always executed
    //     });
    // }
    // console.log(tray.value)
    
  
    // console.log(tray.value.length)
    
  
    let tem = [];
    for (let i =0; i < tray.value.slice(1,10).length;i++){
      tem.push(hmap.get(tray.value[i]));
    }
    console.log(tem)
    return (
  
      <div className='container'>
        <div className='small_cont'>
          <input
            className='search'
            type="text"
            onKeyDownCapture={e => search(e.target.value)}
          />
  
          <input type='submit' className='btn-search'/>
        </div>
        {tem.map(x=> <p>{x.q}</p>)}
        
      </div>
  
    )
  }