import React, { Component } from 'react';
import List from './List';
import {RedditData} from '../reducers';

class Grid extends Component {
  render() {
    return (
      <div className="Grid" href={this.props.post.url}><img src={this.props.post.thumbnail} alt="thumbnail"/>
         This
      </div>
    );
  }
}


mapStateToProps(state){

  return{
    posts: state.posts
  }
}



export default connect (mapStateToProps) (Grid);
