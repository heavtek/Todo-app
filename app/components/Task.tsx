'use client'
import {Task} from '@/types/tasks';
import { useState,FormEventHandler } from 'react';
import { FiEdit,FiTrash2  } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { editTodo,deleteTodo } from '@/api';

interface TaskProps{
    task:Task;
}
const Taskcomp:React.FC<TaskProps> =({task})=>{
      const router=useRouter();
    const [modalOpenEdit,setModalOpenEdit] =useState<boolean>(false)
     const [modalOpenDelete,setModalOpenDelete] =useState<boolean>(false)
     const [taskToEdit,setTaskToEdit]=useState<string>(task.text);
     const handleSubmitEditTodo :FormEventHandler<HTMLFormElement>=async(e)=>{
     e.preventDefault();
     await editTodo({
         id:task.id,
         text:taskToEdit
     })
    
     setModalOpenEdit(false);
     router.refresh()
         }
          const handleDeleteTodo =async(id:string)=>{
    
     await deleteTodo(id)
     setModalOpenDelete(false);
    router.refresh()
         }
    return(
         <tr key={task.id}>
     
        <td>{task.text}</td>
     
        <td className='flex gap-4'>
            <FiEdit onClick={()=>setModalOpenEdit(true)} cursor="pointer" className='text-pink-500'/>
            <Modal modalOpen={modalOpenEdit}  setModalOpen={setModalOpenEdit}>
  <form onSubmit={handleSubmitEditTodo}>
    <h3 className="font-bold text-lg text-green">Edit Task</h3>
<div className="modal-action px-20">
    <input  value={taskToEdit}
    onChange={(e)=>setTaskToEdit(e.target.value)}
    type="text" placeholder="Type here" className="input " />
    <button type='submit' className="btn btn-secondary"> Edit</button>
</div>
  </form>
</Modal>
        <FiTrash2 onClick={()=>setModalOpenDelete(true)} cursor="pointer" className='text-red-500' />
        <Modal modalOpen={modalOpenDelete}  setModalOpen={setModalOpenDelete}>
 <h3 className='text-lg'>Are you Sure You Want to Delete?</h3>
 <div className='modal-action'>
<button onClick={()=>handleDeleteTodo(task.id)} className='btn btn-secondary'>Yes</button>

 </div>
</Modal>
        </td>
      </tr>
    );



};
export default Taskcomp;