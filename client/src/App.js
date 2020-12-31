import logo from './logo.svg';
import './App.css';
import Test from "./components/Test"
import MusicPlayer from './components/MusicPlayer';
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
        <Test />
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
