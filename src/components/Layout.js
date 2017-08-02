import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/'>PollyBlog</NavLink>
          <NavLink to='/create'>Create Post</NavLink>
          <NavLink to='/posts'>Show all Posts</NavLink>
        </nav>
        <div className='children'>
        {this.props.children}
        </div>
      </div>
    )
  }
}
