import logo from './logo.svg';
import './App.css';
import Library from "./components/Library";
import Authors from "./components/Authors";

function App() {
  return (
    <div className="container">
        <div className="row">
            <Library></Library>
        </div>
        <div className="row">
            <Authors></Authors>
        </div>
    </div>

  );
}

export default App;
