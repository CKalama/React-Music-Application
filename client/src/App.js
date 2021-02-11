/** @jsxImportSource @emotion/react */
import {jsx, css, Global } from "@emotion/react";

//Importing FontAwesome globally
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faBackspace } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import MusicPlayer from './components/MusicPlayer';

library.add( faCheckSquare, faPlusCircle, faBackspace)



function App() {
  return (
    <div className="App">
      <div>
        <Global styles={GlobalCSS}/>
        <MusicPlayer />
      </div>
    </div>
  );
}

const GlobalCSS = css `
    * {
      box-sizing:border-box;
    }

`

export default App;
