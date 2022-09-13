import { useEffect } from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { useParams,Link } from 'react-router-dom';
import ReactHlsPlayer from '@panelist/react-hls-player';
function Stream() {
    var {eid} = useParams();
    const query = new URLSearchParams(window.location.search);
    const src = query.get("src")
    const [link,setLink] = useState([]);
    useEffect(()=> {
       getanimesrc();
    },[]);

    async function getanimesrc(){
      var l= [];
      const res = await fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/${eid}`);
      const data = await res.json();
      data.sources.map((s)=>{
        l.push(s.file);
      })
      data.sources_bk.map((s)=>{
        l.push(s.file);
      })
      setLink(l);
    }
    if(link.length>0){
    return (
<div>
   <div>
<hr/>

<div>
        <div className="displayMovie">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <h1 className="text-blue-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>{eid}</h1>
            <div id="player">
  <ReactHlsPlayer
    src= {src}
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />
  </div>
        <div className="container px-5  mx-auto my-auto"> 

        <h5 className="text-green-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>Links</h5>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-black-300 mb-5" style={{width:"50%",margin:"auto"}}>
            </div>
        <div class="grid grid-cols-5 gap-3" style={{height:"40vh"}}>
        {link.map((e)=>
            <Link to={{
                pathname: `/stream/${eid}?src=${e}`
              }}> <div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3'>Link</div></Link>
        )}
        </div>
        </div>
        </section>
        </div>
      </div>

</div>
</div>)}
else{
    return(
        <div>
            Loading....
        </div>
    )
}
}
  
  export default Stream;