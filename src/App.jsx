import * as React from 'react';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='app-container'>
      <Calendar />
      <TaskList />
    </div>
  );
}

export default App;
