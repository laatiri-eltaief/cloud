import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
<MyComponent/>

      </header>
    </div>
  );
}

export default App;
