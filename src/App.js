import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h2> React AR JS </h2>
      <div>
        <a-scene embedded arjs="sourceType: webcam;">
          <a-marker>
            <a-box position="0 0.5 0" material="opacity: 0.9;"></a-box>
            <a-text value = "hello world" color = "white" position = '0 2 0' wireframe = {true} wireframe-linewidth = {5}> </a-text>
          <a-marker-camera
              preset="hiro"
            ></a-marker-camera>
          </a-marker>
        </a-scene>
      </div>
    </div>
  );
}

export default App;
