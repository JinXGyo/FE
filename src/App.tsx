import './App.css'
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import FocusingPage from './pages/FocusingPage/FocusingPage.tsx'
import BrainstormingPage from './pages/BrainStormingPage/BrainstormingPage.tsx'
import SettingsPage from './pages/SettingsPage/SettingsPage.tsx'

import { AppLayout } from "./layouts/AppLayout.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
              
        <Route element={ <AppLayout/> }>
          <Route path="/home" element={ <HomePage/> }/> 
          <Route path="/focusing" element={ <FocusingPage/> }/>
          <Route path="/brainstorming" element={ <BrainstormingPage/> }/>
          <Route path="/settings" element={ <SettingsPage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
