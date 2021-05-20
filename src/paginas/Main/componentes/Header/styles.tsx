import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: #32323d;
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  img {
    margin-bottom: 8px;
  }
  @media (max-width: 885px) {
    width: 100%;
  }
  @media (max-width: 944px) {
    img {
      padding-left: 15px;
    }
  }
`

export const Right = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  h1 {
    font-size: 23px;
    text-align: center;
    margin-top: 28px;
    color: #97b0eb;
    font-family: Comfortaa; 
    user-select: none;
    margin-top: 0px;
    font-weight: 100;
  }
  @media (max-width: 1056px) {
    h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 932px) {
    h1 {
      font-size: 18px;
    }
  }
  @media (max-width: 885px) {
    display: none;
  }
`