

import "./stylesheets/style.css";
import {useNavigate} from "react-router-dom"


function MainScreen() {
  
  const navigate = useNavigate();

  return (

    <div class="container">
    <h1>Portfolio Website Authentication</h1>
    <button class="btn btn-info" onClick={()=>navigate("/signIn")}>Sign In</button>

    </div>
  );
}

export default MainScreen;
