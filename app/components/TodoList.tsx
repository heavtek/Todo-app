import {Task} from '@/types/tasks'
import Taskcomp from './Task';
import { TbSkateboard } from 'react-icons/tb';
interface TodoListProps{
    tasks:Task[]
}

const TodoList:React.FC<TodoListProps>=({tasks })=>{
        console.log(tasks)
    return <div className="overflow-x-auto">
    
  <table className="table">
    {/* head */}
    <thead>
      <tr>
    
        <th>Name</th>
       
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {tasks.map((task)=>( 
<Taskcomp key={task.id} task={task}/>
        ))}
      {/* row 1 */}
     
      {/* row 2 */}
  
      {/* row 3 */}
      
    </tbody>
  </table>
</div>
}
export default TodoList;