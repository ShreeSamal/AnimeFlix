import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHlsPlayer from '@panelist/react-hls-player';
import { Link } from 'react-router-dom';
function Play() {
    var src;
    const {aid,ep} = useParams();
    const [episodes,setEpisodes] = useState('');
    const [link,setLink] = useState([]);
    useEffect(()=> {
       getEpisodes();
    },[]);
    async function getEpisodes(){
        const res = await fetch(`https://gogoanime.herokuapp.com/anime-details/${aid}`);
        const data = await res.json();
        setEpisodes(data);
    }

    async function getanimesrc(eid){
      const lin = document.createElement('a');
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

    if(episodes !== ''){
    return (
<div>
   <div>
<hr/>

<div>
        <div className="displayMovie">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <h1 className="text-blue-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>{episodes.animeTitle}</h1>
        <div className="container px-5  mx-auto my-auto"> 

        <h5 className="text-green-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>Episodes</h5>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-black-300 mb-5" style={{width:"50%",margin:"auto"}}>
            </div>
        <div class="grid grid-cols-5 gap-3">
        {episodes.episodesList.map((e)=>
           <Link to={{
            pathname: `/stream/${e.episodeId}?src=abc.m3u8`
          }}> <div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3'>{e.episodeNum}</div></Link>
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
  
  export default Play;