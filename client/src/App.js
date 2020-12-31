import logo from './logo.svg';
import './App.css';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello React World, Here is a Button!</h1>
        <button>
        <a href="https://www.youtube.com/" target="_blank">Click</a>
        </button>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
