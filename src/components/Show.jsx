import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHlsPlayer from '@panelist/react-hls-player';

function Show() {
    const {aid,ep} = useParams();
    const [episodes,setEpisodes] = useState('');
    const [link,setLink] = useState('');
    // useEffect(()=> {
    //    getEpisodes();
    // },[]);
    async function getEpisodes(){
        const res = await fetch(`http://localhost:3001/gogo/episodes/${aid}`);
        const data = await res.json();
        setEpisodes(data)
        getStream(data);
        
    }

    async function getStream(data){
        const l = await fetch(`http://localhost:3001/gogoanime/watch/${aid}-episode-${ep}`);
        const d1 = await l.json();
        console.log(d1);
        setLink(d1.sources[0].file);
    }

    function changesrc(src){
        ReactHlsPlayer.src = src;
    }

    function toggle(){
        document.querySelector("#navbar-default").classList.toggle("hidden");
      }
    return (
<div>
   <div>
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://img.icons8.com/clouds/344/naruto-sign.png" className="mr-3 h-10 sm:h-10" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AnimePix</span>
    </a>
    <button id="btn" onClick={() => toggle()} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:bg-blue-500">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
    <div style={{width:"100%"}} className="container">
    
<form className='my-5'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Anime" />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    </div>
  </div>
</nav>
<hr/>

<div>
        <div className="displayMovie">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <h1 className="text-blue-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>{episodes.animeTitle}: Episode {ep}</h1>

            <ReactHlsPlayer
    src= "https://wwwx16.gogocdn.stream/videos/hls/Wse6nH3AolwjqQogsoT2KA/1663007787/25615/027e9529af2b06fe7b4f47e507a787eb/ep.220.1662455466.m3u8"
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />
        <div className="container px-5  mx-auto my-auto"> 
        <h5 className="text-green-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>Episodes</h5>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-black-300 mb-5" style={{width:"50%",margin:"auto"}}>
            </div>
        <div class="grid grid-cols-5 gap-3">
        {/* {episodes.episodes.map((e)=>
            <a href={`/show/${aid}/${e.epNum}`}><div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3'>{e.epNum}</div></a>
        )} */}
        </div>
        </div>
        </section>
        </div>
      </div>

</div>
</div>)
}
  
  export default Show;