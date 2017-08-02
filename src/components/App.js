import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './Layout'
import ShowPost from './ShowPost'
import CreatePost from './CreatePost'
import PostList from './PostList'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path='/posts/:id' component={ShowPost}></Route>
              <Route path='/posts' component={PostList}></Route>
              <Route path='/create' component={CreatePost}></Route>
              <Route path='/' component={Home}></Route>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
