import React from 'react';
import Hello from '../Hello';
import styled from '@emotion/styled';
import './App.css';

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
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello />
        <MainTitle>{name}</MainTitle>
        <div className='gray-box'></div>
    </>
  );
}
//  <div style={style}>{name}</div>

export default App;

// emotion 방법
const MainTitle = styled.div`
  background: black;
  color: aqua;
  padding: 20px;
  font-size: 24px;
`