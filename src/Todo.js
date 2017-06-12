import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false
    }
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      complete: true
    })

  }



render(){
  return(
    !this.state.complete ?
    <div>
      <li>{this.props.task}

        <button onClick={ (event)=> this.handleClick(event) }>complete</button>
      </li>
      <br></br>
      mission not complete
    </div>
    :
    <div>
      <li>{this.props.task}
      </li>
      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;
