import React from "react"
import StyledPad from "./styled-components/StyledPad"
import Board from "./styled-components/Board"
import DrumMachine from "./styled-components/DrumMachine"
import Wrapper from "./styled-components/Wrapper"

export default function App() {
  const handlePress = e => {
    console.log(e.target.id)
    let snd = new Audio("./assets/Korg-KR-55-mp3/55.bd1.mp3")
    snd.play()
  }

  return (
    <Wrapper id="drum-machine">
      <DrumMachine id="display">
        <Board>
          <StyledPad className="drum-pad" onClick={handlePress} id="Q">
            q
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="W">
            w
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="E">
            e
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="A">
            a
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="S">
            s
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="D">
            d
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="Z">
            z
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="X">
            x
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress} id="C">
            c
          </StyledPad>
        </Board>
      </DrumMachine>
    </Wrapper>
  )
}
