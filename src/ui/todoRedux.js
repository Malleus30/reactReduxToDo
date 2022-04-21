import { useDispatch, useSelector } from 'react-redux';


export const ToDoFormR =({taskAction}) => {

  
    
    
    const addTask = (e) => {
        e.preventDefault();
        if(e.currentTarget.value ==="") return;
        const task = {
          text: e.currentTarget.value,
          id: Date.now()
        }
        dispatch(taskAction(task))
        e.currentTarget.value='';
    }
    
    const dispatch = useDispatch();  
    
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        addTask(e);
      }
    };


  
    return(
  
      <form  onSubmit={addTask}>
  
          <div className="addCross">
          <span className="line_rotate90"></span>
          <span className="line_rotate90"></span>
          <input type="submit" className="buttonPlus high_list" value=""/>
          </div>
      <input type="text" className="inp" id='highInpId' placeholder="Добавить важных дел" onKeyDown={handleKeyPress} />
  
      </form>
    )
  
  }