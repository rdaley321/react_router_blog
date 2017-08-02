import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      title: '',
      blog: ''
    }
  }
  handleAuthorChange = (e) => {
    e.preventDefault()
    this.setState({
      author: e.target.value
    })
  }
  handleTitleChange = (e) => {
    e.preventDefault()
    this.setState({
      title: e.target.value
    })
  }
  handleBlogChange = (e) => {
    e.preventDefault()
    this.setState({
      blog: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let listItem = JSON.stringify(this.state);
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay")
      this.props.history.push('/posts')
    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({author: '', title: '', blog: ''});
  }
  render() {
    return (
      <div className='create-post-container'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='author'>Author's Name</label>
          <input onChange={this.handleAuthorChange} type="text" name="author" placeholder='Enter your name or an e-mail' value={this.state.value} />
          <label htmlFor='title'>Title</label>
          <input onChange={this.handleTitleChange} type="text" name="title" placeholder='Enter the title of your blog' value={this.state.value} />
          <label htmlFor='blog'>Write your blog</label>
          <textarea onChange={this.handleBlogChange} name="blog" rows="8" cols="80" value={this.state.value} placeholder="What's on your mind?"></textarea>
          <button type='submit'>Post!</button>
        </form>
      </div>
    )
  }
}
