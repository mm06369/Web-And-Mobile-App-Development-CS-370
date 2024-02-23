
import './App.css';
import MainScreen from './components/mainScreen';
import {Route, Routes} from 'react-router-dom';
import SignIn from './components/login';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" Component={MainScreen}/>
      <Route path = '/signIn' Component={SignIn} />
      <Route path = '/admin' Component={AdminPage}/>
      <Route path = '/home' Component={HomePage}/>
      <Route path = '/contact' Component={ContactPage}/>
      <Route path = '/about' Component={About}/>

    </Routes>
    </div>
  );
}

export default App;
