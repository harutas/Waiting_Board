import React from "react"
import InputArea from "./InputArea"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData : {
        name : "",
        numberOfPeople : "",
        preferredSeat : ""
      },
      waitingArray : [],
      insideOfShopArray : []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = Object.assign({}, this.state.inputData, {[name] : target.value});
    this.setState({
      inputData : value
    })
  }

  renderInputArea() {
    return (
      <InputArea
        value={this.state.inputData}
        onChange={(e) => this.handleChange(e)}
      />
    )
  }

  render () {
    return(
      <>
        {this.renderInputArea()}
      </>
    )
  }
}

export default MainPage