import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo/>
      </header>
    </div>
  );
}

export default App;
