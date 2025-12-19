import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  SignIn from "./Components/SignIn.jsx"
import  SignUp from "./Components/SignUp.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Main from "./Pages/Home.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import { Toaster } from 'react-hot-toast';
function App() {
  

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
