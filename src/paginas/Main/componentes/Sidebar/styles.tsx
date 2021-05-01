import styled from 'styled-components'

export const Container = styled.aside`
  position: fixed;
  width: 300px;
  top: 80px;
  left: 0;
  bottom: 100px;
  height: 100vh;
  background-color: #3b3b4b;
  overflow-y: hidden;
  z-index: 7000;
  box-shadow: 0 2px 2px 0
   rgba(0, 0, 0, 0.14), 0 1px 5px 0 
   rgba(0, 0, 0, 0.12), 0 3px 1px -2px 
   rgba(0, 0, 0, 0.20);
`