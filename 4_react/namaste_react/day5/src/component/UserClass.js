import React from 'react';
// Class based component
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0, //1st state vairbale
      // count2: 1, //2nd state varibale
    };
  }

  render() {
    return (
      <div className="user-card">
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count+1,
          });
        }}>Count Increase</button>
        {/* <h1>Count2 : {this.state.count2}</h1> */}
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Hyderabad</h3>
        <h4>Contact: abc@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;