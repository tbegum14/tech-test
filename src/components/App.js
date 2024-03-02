import {React, useState} from 'react'
import '../styles/app.css';
import Search from './Search';

function App() {
  const [searchText, setSearchText] = useState("")


  return (
    <div className="app">
      <img className='nasa-logo' src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasa logo" />
      <Search searchText={searchText} setSearchText={setSearchText} />
    </div>
  );
}

export default App;
