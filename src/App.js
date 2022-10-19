import './App.css';
import Home from './Home.jsx';
import Users from './Users.jsx';
import Contacts from './Contacts.jsx';
import Error from './Error.jsx';


import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Link>
          <Link to="/Home">Home</Link>
        </Link>
        <Link>
          <Link to="/Users">Users</Link>
        </Link>
        <Link>
          <Link to="/Contacts">Contacts</Link>
        </Link>
        <Link>
          <Link to="/Error">Whoops</Link>
        </Link>
        <Routes>
        <Route path= '/home' element ={<Home />}/>
        <Route path= '/users' element ={<Users />}/>
        <Route path= '/contacts' element ={<Contacts />}/>
        <Route path= '/Error' element ={<Error />}/>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
