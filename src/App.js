//EJERCICIO 1
/*import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Sobre from './Componentes/Sobre';
import './App.css';

function App() {
  return (
    < BrowserRouter>
      <nav>
        <Link to="/inicio">Inicio</Link> | <Link to="/sobre">Sobre</Link>
      </nav>
      <div className="container">
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;*/

//EJERCCIO 2
/*import React from 'react';
import Contador from './Componentes/Contador';

function App() {
  return (
    <div className="App">
      <h1>Bienvenido a mi Contador</h1>
      <Contador />
    </div>
  );
}

export default App;*/


//EJERCICIO3

/*import React, {useEffect} from 'react';
import { ThemeProvider, useTheme } from './Componentes/ThemeContext';
import './AppTema.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Content />
      </div>
    </ThemeProvider>
  );
}

function Content() {
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark' : 'light';
  }, [isDarkTheme]);

  return (
    <div className={`container ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>{isDarkTheme ? 'Tema Oscuro' : 'Tema Claro'}</h1>
      <p>Aqui estremos viendo el cambio de color.</p>
      <button onClick={toggleTheme}>
        Cambiar a {isDarkTheme ? 'Tema Claro' : 'Tema Oscuro'}
      </button>
    </div>
  );
}

export default App;*/


//EJERCICIO 4
/*import React from "react";
import { Provider } from "react-redux";
import { Store } from "./Store";
import CounterComponent from "./CounterComponent";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App" style={{ textAlign: "center", margin: "20px" }}>
        <h1 style={{ color: "#4A90E2" }}>Contador Redux</h1>
        <p style={{ fontSize: "18px" }}>¡Aumenta o disminuye el contador!</p>
        <CounterComponent />
      </div>
    </Provider>
  );
};

export default App;*/
