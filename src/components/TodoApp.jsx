import React from 'react';
import '../index.css';

function TodoApp({ task,tasks,inputTask,addTask,redirectToError}){
  return(
    <div className='appMain'>
      <input type="text" onChange={(e)=>inputTask(e.target.value)} />
      <input type="button" value="add" onClick={()=>addTask(task)} />
      <ul>
        {
          tasks.map(function callback(item,i) {
            return(<li key={i}>{item}</li>);
          })
        }
      </ul>
      <button onClick={() => redirectToError()} >エラー</button>
    </div>
  );
}

export default TodoApp;
