import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  flex: 1;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: auto;
  .tipo {
    font-size: 26px;
  }
  .nome {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
    max-width: 100%;
    overflow-y: auto;
    white-space: nowrap;
  }
  .matricula, .campus {
    font-size: 20px;
    margin-top: 4px;
  }
  b {
    font-weight: 500;
  }
`