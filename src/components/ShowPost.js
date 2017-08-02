import React, { Component } from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      title: '',
      blog: ''
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    fetch(URL).then(results => {
          return results.json();
        }).then(data => {
          this.setState({
            author: data.author,
            title: data.title,
            blog: data.blog
          });
        })
  }
  render() {
    return (
      <div className='post-spec'>
        <h1>{this.state.title}</h1>
        <p className="author"> - {this.state.author}</p>
        <p>{this.state.blog}</p>
      </div>
    )
  }
}
