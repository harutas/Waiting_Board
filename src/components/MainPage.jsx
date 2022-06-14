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
    if (this.state.inputData.name === "") return alert("お名前を入力してください。");
    else if (this.state.inputData.numberOfPeople === "") return alert("人数を入力してください。");
    else if (this.state.inputData.preferredSeat === "") return alert("希望の座席を選択してください。");
    const array = this.state.waitingArray;
    array.push(
      new Guest(
        this.state.id,
        this.state.inputData.name,
        this.state.inputData.numberOfPeople,
        this.state.inputData.preferredSeat
      )
    );
    this.setState({
      waitingArray : array,
      id : this.state.id + 1,
      inputData : {
        name : "",
        numberOfPeople : "",
        preferredSeat : ""
      }
    });
  }

  cancelOnClick(e) {
    const array = this.state.waitingArray;
    for (let i = 0; i < array.length; i++){
      if (array[i].id === parseInt(e.target.id)){
        array.splice(i, 1);
        break;
      }
    }
    this.setState({waitingArray : array});
  }

  guideOnClick(e) {
    const waitingArr = this.state.waitingArray;
    const insideOfShopArr = this.state.insideOfShopArray;

    for (let i = 0; i < waitingArr.length; i++){
      if (waitingArr[i].id === parseInt(e.target.id)){
        insideOfShopArr.push(waitingArr[i]);
        waitingArr.splice(i, 1);
        break;
      }
    }
    this.setState({
      waitingArray : waitingArr,
      insideOfShopArray : insideOfShopArr
    });
  }

  goOutOnClick(e) {
    const insideOfShopArr = this.state.insideOfShopArray;
    for (let i = 0; i < insideOfShopArr.length; i++){
      if (insideOfShopArr[i].id === parseInt(e.target.id)){
        insideOfShopArr.splice(i, 1);
        break;
      }
    }
    this.setState({
      insideOfShopArray : insideOfShopArr
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
        cancelOnClick={(e) => this.cancelOnClick(e)}
        guideOnClick={(e) => this.guideOnClick(e)} 
      />
    )
  }

  renderInsideOfShopTablePage() {
    return (
      <InsideOfShopTablePage
        value={this.state.insideOfShopArray}
        goOutOnClick={(e) => this.goOutOnClick(e)}
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