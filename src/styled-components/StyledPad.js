import styled from "styled-components"

export default styled.button`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 0px solid black;
  box-shadow: 0px 0px 15px 0px #737373;
  &:hover {
    background-color: red;
  }
  &:active {
    background-color: blue;
  }
  &:focus {
    outline: none;
  }
`
