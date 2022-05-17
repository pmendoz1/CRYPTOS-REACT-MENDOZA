import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    
    <div>
    <header className="App">
      <NavBar />
      </header>
      <body className="App-body">
      <Router>
      {/* <ItemListContainer greetings={"¡Bienvenido!"} /> */}
        <Routes>
          <Route path='' element={<ItemListContainer greetings={"¡Bienvenido!"}/>} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
      </Router>    
      </body>
    </div>
    
  );
}

export default App;
