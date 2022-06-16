import { Guest } from "../model/index"
import { Box, Divider } from "@mui/material";
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

  // inputデータの更新
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = Object.assign({}, this.state.inputData, {[name] : target.value});
    this.setState({
      inputData : value
    })
  }

  // 順番待ち
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

  // キャンセル
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

  // 案内
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

  // 退店
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
      <Box sx={{overflow: "auto"}}>
        {this.renderInputArea()}
        <Divider/>
        {this.renderWaitingTablePage()}
        <Divider/>
        {this.renderInsideOfShopTablePage()}
      </Box>
    )
  }
}

export default MainPage