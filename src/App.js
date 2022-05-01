import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
    <header className="App">
      <NavBar />
      </header>
      <body className="App-body">
          <ItemListContainer greetings={"¡Bienvenido!"} />
      </body>
    </div>
  );
}

export default App;
