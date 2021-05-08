import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #3f3f52;
  }
  svg {
    font-size: 24px;
    color: #ffffff;
  }
  p {
    font-size: 18px;
    color: #ffffff;
    padding-left: 10px;
  }
`