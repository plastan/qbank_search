

import { effect, signal } from "@preact/signals-react";
import {useState , useEffect} from 'react';
import "./styles.css"
import axios from 'axios';
// import {Cards} from './cards';
// import {card} from './card';
const query = signal("");
const tray = signal([]);


export  function Home() {
    const [stuffs,setstuffs] = useState([]);  
    let list_of_items = [];
  
    function handleQuery(value) {
      query.value = value;
  
      axios.get('http://127.0.0.1:8000/query?s=' + value)
        .then(function (response) {
          // handle success
          // console.log(response.data.data);
          tray.value = [...response.data.data]
          setstuffs([...response.data.data])
          
          console.log(tray.value.length)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    // console.log(tray.value)
    
  
    console.log(tray.value.length)
    let tem = [];
  
    // tem = stuffs.slice(1,10);
    tem = tray.value.slice(1,10);

    console.log(tem)
    return (
  
      <div className='container'>
        <div className='small_cont'>
          <input
            className='search'
            type="text"
            onKeyDownCapture={e => handleQuery(e.target.value)}
          />
  
          <input type='submit' className='btn-search'/>
        </div>
        {tem.map(x=> <p>{x.q}</p>)}
      </div>
  
    )
  }