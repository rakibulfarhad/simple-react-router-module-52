import logo from './logo.svg';
import './App.css';
import Home from './componants/Home/Home';
import Friends from './componants/Friends/Friends';
import About from './componants/About/About';
import NotFound from './componants/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './componants/Header/Header';
import FriendDetail from './componants/FriendDetail/FriendDetail';
import Culture from './componants/Culture/Culture';
import PostDetail from './componants/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
        <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
