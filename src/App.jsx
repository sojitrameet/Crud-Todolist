import { useState } from 'react';
import './App.css';

function App() {

  const [task,setTask] = useState();
  const [status ,setStatus] = useState();
  const [dead ,setDead] =useState();
  const [displayTodo, setDisplayTodo] = useState([]);

  const addItem = () => {
    const newItem = {task,status,dead}
    setDisplayTodo([...displayTodo, newItem]);
    setTask("");
    setStatus("");
    setDead("");
  };
  return (
    <>
      <div className='container'>
       <center> <h1>Add Task</h1></center>
        <div className="main">
          <label>
            Task
          </label>
          <div className="inputdiv">
            <input type='text'    value={task} placeholder="Enter a todo"
              onChange={(e) => setTask(e.target.value)}/>
          </div>
          <label>
            status
          </label>
          <div className="inputdiv">

          <select name="" id=""   value={status}
              onChange={(e) => setStatus(e.target.value)}>
            <option value="">Enter Status</option>
            <option value="Complete">Complete</option>
            <option value="OnGoing">OnGoing</option>
            <option value="Pending">Pending</option>
          </select>
          </div>

          <label>
            Dead Line 
          </label>
          <div className="inputdiv">
            <input type='date'  value={dead} onChange={(e) => setDead(e.target.value)}/>
          </div>
          <button
            onClick={addItem}
            className="btn"
          >
            Add
          </button>
        </div>
      </div>

      <center className='tab'>
        <table border= "1px" width="30%" style={{ borderRadius: '10px' }}>
         <thead >
                <tr style={{ backgroundColor: 'skyblue' }}>
                  <td>Task</td>
                  <td>Status</td>
                  <td>Deadline</td>
                  <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                  displayTodo.map((item, index)=>
                  {
                    const { task, status, dead } = item;
                    return(
                      <tr  key={index}>
                      <td>{task}</td>
                      <td>{status}</td>
                      <td>{dead}</td>
                      <td><button>Delete</button></td>
                      </tr>
                    )
                  })
                }
                </tbody>
        </table>
      </center>
    </>
  );
}

export default App;
