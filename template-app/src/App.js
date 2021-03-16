import './App.css';
import Home from './home'
import Contact from './contact'
import Projects from './projects'
import About from './about'
import {Route} from 'react-router-dom';
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
    </div>
  );
}

export default App;
