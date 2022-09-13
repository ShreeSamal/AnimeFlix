import { useEffect } from 'react';
import { useState } from 'react';

function Home() {
    const mystyle = {
        width: '50%',
        margin: 'auto'
      };
    var hidden = true;
    const [show,setShow] = useState('');
    useEffect(()=>{
        getShow();
    });
    async function getShow(){
        const res = await fetch('https://gogoanime.herokuapp.com/popular');
        const data = await res.json();
        setShow(data);
    }
    if(show.length>0){
    return (
   <div>
<hr/>
<div>
        <div className="displayMovie">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <h1 className="text-green-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>POPULAR</h1>
            

{show.map((s)=>  
    <div className="container px-5  mx-auto my-auto">        
<div className="w-full max-w-sm bg-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="p-8 rounded-t-lg rounded" style={{height: "350px",width:"350px"}} src={s.animeImg} alt="product image"/>
    <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{s.animeTitle}</h5>
            <p>Released: {s.releasedDate}</p>
        <div className="flex justify-between items-center">
            {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}
            <a href={`/watch/${s.animeId}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3">Watch Now</a>
        </div>
    </div>
</div>
<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5" style={mystyle}>
            </div>
</div>
)}
          </section>
        </div>
      </div>


</div>
    )}
    else{
        return(
            <div>
                Loading...
            </div>
        )
    }
  }
  
  export default Home;