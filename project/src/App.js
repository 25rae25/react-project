import React from 'react';
import Hello from './Hello';
import styled from '@emotion/styled';

function App() {
  const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // }

  return (
    <>
      <Hello />
        <MainTitle>{name}</MainTitle>
    </>
  );
}
//  <div style={style}>{name}</div>

export default App;

const MainTitle = styled.h3`
  background: black;
  width: 200px;
  color: aqua;
  text-align: center;
`