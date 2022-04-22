

 import React, {Component} from 'react';
 import Contacts from './components/contacts';
 //import Posts from './components/posts';

 class App extends Component {
   //render () {
    // return (
      
      state = {
        contacts: []
      }
      componentDidMount() {
        fetch("http://127.0.0.1:7776/fake")
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }
      render() {
        return (
          <Contacts contacts={this.state.contacts} />
        )
      }

      // state = {
      //   posts: []
      // }
      // componentDidMount() {
      //   fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(res => res.json())
      //   .then((data) => {
      //     this.setState({ posts: data })
      //   })
      //   .catch(console.log)
      // }

      // render() {
      //   return (
      //     <Posts posts={this.state.posts} />
      //   )
      // }
    
 }

export default App;
