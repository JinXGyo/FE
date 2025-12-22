import './App.css'
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import { AppLayout } from "./layouts/AppLayout.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
              
        <Route element={ <AppLayout/> }>
          <Route path="/home" element={ <HomePage/> }/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
