import React, {Component} from 'react';

class AllPost extends Component{
  render(){
    return(
      <div>
        <h3>All Posts</h3>
        <ul>
          <li>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
