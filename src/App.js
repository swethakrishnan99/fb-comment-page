import React, { useState } from 'react';
import './App.css';
import GifSearch from './components/GifSearch';


function App() {
  const [gifOn, setGifOn] = useState("")
  const addGif = e => {
    const img = e.target.src;
    const iDiv = document.createElement('img');
    iDiv.src = img;
    iDiv.className = 'gif-img';
    document.querySelector(".divtext").appendChild(iDiv);
  }
  return (
    <div className='body'>
      <div className="comment">
        <ul className='buttons-list'>
          <li>compose post</li>
          <li>Photos/Video Album</li>
          <li>Live Video</li>
        </ul>
        <div className='flex'><img src="https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/121105442-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-design-grey-p.jpg?ver=6" alt="gif" />
          <div className="divtext" contentEditable data-placeholder='write something here'></div>
        </div>
        <div className='btns'>
          <div className='flex'>
            <button>Tag friends</button>
            <button>Check in</button>
          </div>
          <div className='flex'>
            <button onClick={() => setGifOn((prevState) => !prevState)}>GIF</button>
            <button>Tag Friends</button>
          </div>
        </div>
        {gifOn && <GifSearch addGif={addGif} />}
      </div >
      <div className='footer'><select name="view" id="view">
        <option value="onlyMe">Only me</option>
        <option value="friends">Friends</option>
        <option value="public">Public</option>
      </select>
        <button type="submit">Post</button>
      </div>
    </div >
  );
}

export default App;
