
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Play from './components/Play';
import Show from './components/Show';
import Stream from './components/Stream'
import { Component } from 'react';
import Search from './components/Search';
import Top from './components/Top';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path='/' element={Home} />
//       </Routes>
//     </Router>
//   );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/top-airing' element={<Top/>} />
          <Route exact path='/watch/:aid' element={<Play/>} />
          <Route exact path='/show/:aid' element={<Show/>} />
          <Route exact path='/search/:q' element={<Search/>} />
          <Route exact path='/stream/:eid' element={<Stream/>} />
        </Routes>
      </Router>

    );
  }
}

export default App;
