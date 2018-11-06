import React, { Component } from 'react';

class Home extends Component {    
  
  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path); 
  }
  
  render() {
    return (
      <div className="main-content home">
        <h2>Code Louisville React Project</h2>
        <p>This is the homepage of the <em>Super Awesome!</em> react framework project</p>
        <p>Navigate the API page to use an interactive API </p>
        <p>We can use all types of APIs!</p>
        <hr />
        <h3>Featured Players</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={ (input) => this.name = input } />
          <input type="text" placeholder="Topic" ref={ (input) => this.topic = input } />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;



