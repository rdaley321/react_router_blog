import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
          return results.json();
        }).then(data => {
          this.setState({posts: data});
        })
  }
  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          const url = `/posts/${post._id}`
          return(
            <div className="post" key={post._id}>
                <Link to={url}>{post.title}</Link>
            </div>
          )
        })}
      </div>
    )
  }
}
