import React from "react";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "Tarun Chandra",
      LastName: "Manepally",
      count: false,
    };
    console.log("This is Constructer Execution")
  }
  componentDidMount(){
    console.log("This is componentDidMount")
  }
  componentDidUpdate(){
    console.log("This is componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("This is componentWillUnmount")
  }
  render() {
    return (

      <div>
        <h1>{this.state.Firstname}</h1>
        {console.log("This is render Method execution")}
        <button
          onClick={() => {
            this.state.count ? this.setState({
                  Firstname: "Kiran Kumar",
                  count: false,
                })
              : this.setState({
                  Firstname: "Tarun Chandra",
                  count: true,
                });
          }}
        >
          Toggle Name
        </button>
      </div>
    );
  }
}

export default ClassComponent;
