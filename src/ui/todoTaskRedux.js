import { useDispatch, useSelector } from 'react-redux';


export const ToDoR = ({taskText, task, taskAction}) => {

  const dispatch = useDispatch();

  const removeTask = (task) =>{
       dispatch(taskAction(task))
    }

    return (
      <div  className="field">
  
          <input type="checkbox" className="radioButton" /> 
          <p className="txt"> {taskText}</p>
  
        <div className="close" onClick={() => removeTask(task)}>
          <span className="line_rotate45"></span>
          <span className="line_rotate45"></span>
        </div>
      </div>
    );
  };