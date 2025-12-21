import './App.css'
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
