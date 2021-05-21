import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - (180px + 20px));
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #2d2d46;
  }
`