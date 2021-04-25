import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 15px;
  h1 {
    font-size: 100px;
    color: #3e5374;
  }
  span {
    font-size: 23px;
    text-align: center;
  }
  button {
    width: 300px;
    margin-top: 20px;
    span {
      font-size: 16px;
    }
  }
`