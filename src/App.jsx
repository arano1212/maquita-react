import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';
import CardDetail from './pages/CardDetails'; // Asegúrate de que el nombre del archivo sea correcto

const App = () => {
  const [name, setName] = useState(localStorage.getItem('userName') || '');

  const handleSetName = (name) => {
    localStorage.setItem('userName', name);
    setName(name);
  };

  const resetName = () => {
    localStorage.removeItem('userName');
    setName('');
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home name={name} setName={handleSetName} resetName={resetName} />}
        />
        <Route
          path="/adventure/:title"
          element={<CardDetail />} // Solo pasar el componente, los datos estarán en el contexto de Home
        />
      </Routes>
    </Router>
  );
};

export default App;
