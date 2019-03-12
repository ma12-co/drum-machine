import React, { useEffect, useState } from "react"

import StyledPad from "./styled-components/StyledPad"
import Board from "./styled-components/Board"
import DrumMachine from "./styled-components/DrumMachine"
import Wrapper from "./styled-components/Wrapper"

export default function App() {
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    document.addEventListener("keydown", e => {
      if (
        e.key === "q" ||
        e.key === "w" ||
        e.key === "e" ||
        e.key === "a" ||
        e.key === "s" ||
        e.key === "d" ||
        e.key === "z" ||
        e.key === "x" ||
        e.key === "c"
      ) {
        playSound(e.key)
      }
    })
  })

  const handlePress = e => {
    let padName = e.target.innerHTML[0]
    playSound(padName)
  }

  const playSound = padName => {
    let sound = document.getElementById(padName.toUpperCase())
    sound.currentTime = 0
    sound.play()
  }

  return (
    <Wrapper id="drum-machine">
      <DrumMachine id="display">
        <Board>
          <StyledPad className="drum-pad" onClick={handlePress}>
            q
            <audio
              preload="auto"
              id="Q"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            w
            <audio
              preload="auto"
              id="W"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            e
            <audio
              preload="auto"
              id="E"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            a
            <audio
              preload="auto"
              id="A"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            s
            <audio
              preload="auto"
              id="S"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            d
            <audio
              preload="auto"
              id="D"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            z
            <audio
              preload="auto"
              id="Z"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            x
            <audio
              preload="auto"
              id="X"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            />
          </StyledPad>
          <StyledPad className="drum-pad" onClick={handlePress}>
            c
            <audio
              preload="auto"
              id="C"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            />
          </StyledPad>
        </Board>
      </DrumMachine>
    </Wrapper>
  )
}
