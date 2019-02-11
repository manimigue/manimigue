import React from 'react';
import { Link } from 'react-router-dom';

function Error(){
  return(
    <div className='appMain'>
      <h1>エラーページ</h1>
      <Link to='/'>戻る</Link>
    </div>
  );
}

export default Error;
