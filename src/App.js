import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import StyledLink from './style';
import NewsContainer from './Components/NewsContainer';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import {Component} from 'react';

export class App extends Component {
  render() {
    return (
      <Router>
              <NavBar/>
        
        {/* <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/Comp'>Component</StyledLink> */}
              <Routes>
                    <Route path = '/home' element = {<Home/>} />
                    <Route path = '/comp' element = {<NewsContainer/>} />
              </Routes> 
      </Router>
    )
  }
}

export default App

