import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './routes/home/home';

function App() {
  return (
    <div className="App">
      <div className="sticky top-0 z-10">
      <Navbar />
      </div>
      <Home/>
    </div>
  );
}

export default App;
