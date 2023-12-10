import { useEffect,useState } from "react";
import "./styles.css"


fetch("os.json")
.then(response => response.json())
.then(json => {
localStorage.setItem("paper",JSON.stringify(json));
})

const Fdata = JSON.parse(localStorage.paper);
  
const hmap = new Map(Object.entries(Fdata));


export  function Home() {
  const [results, setResults] = useState([]);
//   const [query,setQuery] = useState("");  

 



  function performSearch(svalue){  
    let count = 0;
    let res = [];
    for (const [key, value] of hmap) {
        if (value.q.includes(svalue)) {
            res.push(key);
            count +=1 ;
        }
        // if (count == 10)break;
        
    }
    setResults(res);
    console.log(res);
  
  }

    let tem = [];
    for (let i =0; i < results.slice(1,10).length;i++){
      tem.push(hmap.get(results[i]));
    }
    

    return (
  
      <div className='container'>
        <div className='small_cont'>
          <input
            className='search'
            type="text"
            onKeyDownCapture={e => {
                if (e.target.value.trim() != ""){
                    performSearch()
                }
                performSearch(e.target.value);
            }}
          />
  
          <input type='submit' className='btn-search'/>
        </div>
        {tem.map(x=> <p>{x.q}</p>)}
        
      </div>
  
    )
  }