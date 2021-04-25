import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height:100vh;
  background: linear-gradient(rgb(96, 108, 136), rgb(64, 77, 108));
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  width: 460px;
  height: 348px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 488px) {
    width: 96%;
  } 
`