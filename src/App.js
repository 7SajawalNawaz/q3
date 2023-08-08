import logo from './logo.svg';
import './App.css';
import DragAndDropList from './components/DragAndDropList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag and Drop Example</h1>
      </header>
      <main>
        <DragAndDropList />
      </main>
    </div>
  );
}

export default App;
