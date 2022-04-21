
import './App.css';
import {ToDoFormR} from'./ui/todoRedux.js'
import {ToDoR} from'./ui/todoTaskRedux.js'
import {useSelector} from'react-redux';
import {addTaskActionHigh, removeTaskActioHigh} from'./store/highList';
import {addTaskActionLow, removeTaskActionLow} from'./store/lowList';

function App() {

  const highListTasks = useSelector(state => state.high.tasks);
  const lowListTasks = useSelector(state => state.low.tasks);
  console.log(highListTasks);
  console.log(lowListTasks);


  return (
    <div className="App">
         <div className="forma">
            <div className="highPrior">

                <p className="high">HIGH</p>   

                <ToDoFormR taskAction={addTaskActionHigh}/>
                {highListTasks.map((task) => {
                    return (
                      <ToDoR 
                        taskText={task.text}
                        key={task.id}
                        task={task}
                        taskAction={removeTaskActioHigh}
                        />
                          )
                       })}
            </div>

         <div className="lowPrior">
              
         <p className="low">LOW</p>
              
                <ToDoFormR taskAction={addTaskActionLow}/>
                {lowListTasks.map((task) => {
                  return (
                    <ToDoR 
                    taskText={task.text}
                    key={task.id}
                    task={task}
                    taskAction={removeTaskActionLow}
                    />
                  )
                })}
         </div>

       </div>  
    </div>
   )
}

export default App;
