import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter.js';
import AppContent from './AppContent';
// import AppFooterFunctionalComponent from './AppFooterFunctionalComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

class App extends Component{

  constructor(props){
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state={posts:[]}
  }

  handlePostChange(posts){
    this.setState({posts:posts});
  }

  render (){
    const myProps = {
      title: "My Cool App!",
      subject: "My Subject",
      favorite_color: "red",
    }
    return ( 
    <div className="app">
      <AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange}/>
      <AppContent handlePostChange={this.handlePostChange} posts={this.state.posts}/>
      <AppFooter/>
      {/* <AppFooterFunctionalComponent myProperty={"Hello World!"}/> */}
      
    </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
