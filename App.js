
import './App.css';
import {useState} from "react"
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import CreatePost  from "./pages/CreatePost.js";
import {signOut } from "firebase/auth";
import {auth} from "./firebase-config";

function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));

  


  const signUserOut=()=>{
      signOut(auth).then(()=>{
        localStorage.clear()
        setIsAuth(false);
        window.location.pathname="/login";
        
      });
  };

  return (
  <Router>
    <nav>
    <Link to="/">Home</Link>
    
      
      {!isAuth ? <Link to="/login"> Login </Link> : 
      (
     <>
     <Link to="/createpost"> Post </Link>
     <button onClick={signUserOut}>Log Out</button>
     </>)
   }
     </nav>
     
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost  isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
