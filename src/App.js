// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

//
import Todo from './Todo';


class App extends React.Component {
// constructor method is where our states are initialized
  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }
    // this.handleDelete = this.handleDelete.bind(this);
  }

// Establish a function that we are going to be passing
// into the Todo Component.

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: '',
    })

  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })

  }

  handleDelete(e){
    debugger
    console.log(this.state)
    this.setState({
      tasks: this.state.tasks.filter((task)=>task !== e)
    })
  }

  componentDidUpdate(){
      console.log(this.state)
  }


  render() {

    //use the .map() function below instead of forEach

  //   var tasks = []
  //  this.state.tasks.forEach(function(task){
  //     tasks.push(<li>{task}</li>)
  //     }
  //   )


    let tasks = this.state.tasks.map((task)=>
      // We're passing in attributes into the Todo Component
      <Todo task={task} del={(e)=>this.handleDelete(e)} />
    )


    return (
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)} />
          <input type="submit"/>
        </form>

        { tasks }

      </div>
    );
  }
}


// Change the state of both the local component and the parent component
// introduce the local loop and creating a new component to handle the loop
// talk about key in the <li>
// constructor method


export default App;
