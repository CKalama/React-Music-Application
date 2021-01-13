/** @jsxImportSource @emotion/react */
import {jsx, css } from "@emotion/react";

//Importing FontAwesome globally
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import MusicPlayer from './components/MusicPlayer';

library.add( faCheckSquare, faPlusCircle)



function App() {
  return (
    <div className="App">
      <div>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
