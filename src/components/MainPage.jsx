import { Guest } from "../model/index"
import { Divider } from "@mui/material";
import React from "react"
import InputArea from "./InputArea"
import WaitingTablePage from "./WaitingTablePage"
import InsideOfShopTablePage from "./InsideOfShopTablePage";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : 1,
      inputData : {
        name : "",
        numberOfPeople : "",
        preferredSeat : ""
      },
      waitingArray : [],
      insideOfShopArray : []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToWaitingArray = this.addToWaitingArray.bind(this);

  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = Object.assign({}, this.state.inputData, {[name] : target.value});
    this.setState({
      inputData : value
    })
  }

  addToWaitingArray() {
    const array = this.state.waitingArray;
    array.push(
      new Guest(
        this.state.id,
        this.state.inputData.name,
        this.state.inputData.numberOfPeople,
        this.state.inputData.preferredSeat
      )
    );
    console.log(array)
    this.setState({
      waitingArray : array,
      id : this.state.id + 1
    });
  }

  renderInputArea() {
    return (
      <InputArea
        value={this.state.inputData}
        onChange={(e) => this.handleChange(e)}
        onClick={() => this.addToWaitingArray()}
      />
    )
  }

  renderWaitingTablePage() {
    return (
      <WaitingTablePage
        value={this.state.waitingArray}
        // cancelOnClick={() => this.cancelOnClick()}
      />
    )
  }

  renderInsideOfShopTablePage() {
    return (
      <InsideOfShopTablePage
        value={this.state.insideOfShopArray}
      />
    )
  }

  render () {
    return(
      <>
        {this.renderInputArea()}
        <Divider/>
        {this.renderWaitingTablePage()}
        <Divider/>
        {this.renderInsideOfShopTablePage()}
      </>
    )
  }
}

export default MainPage