import React, { Component } from "react"
import StyledPad from "./styled-components/StyledPad"
import Board from "./styled-components/Board"
import DrumMachine from "./styled-components/DrumMachine"
import Wrapper from "./styled-components/Wrapper"

class App extends Component {
  render() {
    return (
      <Wrapper>
        <DrumMachine>
          <Board>
            <StyledPad />
            <StyledPad />
            <StyledPad />
            <StyledPad />
            <StyledPad />
            <StyledPad />
            <StyledPad />
            <StyledPad />
            <StyledPad />
          </Board>
        </DrumMachine>
      </Wrapper>
    )
  }
}

export default App
