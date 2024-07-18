/*eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 let [글제목,글제목변경] = useState(['aubl','kusf','용병경기']);
 let [따봉, 따봉변경] = useState(0);
 let posts = '야구일기';

  return (
    <div className="App">
      <div className="black-nav">
       <div>개발 Blog</div>
      </div> 
      <div className = "list">
      <h3>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
      <p>7월 9일 발행</p>
      <hr/>
      </div>
      <div className = "list">
      <h3>{ 글제목[1] } </h3>
      <p>7월 10일 발행</p>
      <hr/>
      </div>
      <div className = "list">
      <h3>{ 글제목[2] }</h3>
      <p>7월 11일 발행</p>
      <hr/>
      </div>
    </div>
  );
}

export default App;
