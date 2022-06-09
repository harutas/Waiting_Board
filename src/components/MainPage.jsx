import React from "react"

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
  }
}

export default MainPage