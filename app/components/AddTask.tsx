'use client'
import { IoIosAdd } from "react-icons/io";
import Modal from "./Modal";
import { addTodo } from "@/api";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
const AddTask =()=>{
    const router=useRouter();
    const [modalOpen , setModalOpen]=useState<boolean>(false)
    const[newTaskValue ,setNewTaskValue]=useState<string>('')
    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement>=async(e)=>{
e.preventDefault();
await addTodo({
    id:uuidv4(),
    text:newTaskValue
})
setNewTaskValue("");
setModalOpen(false);
router.refresh()
    }
return( 
<div>
    
    <button onClick={()=>setModalOpen(true)} className="btn btn-secondary w-full">Add new task<IoIosAdd  className='ml-2'size={15}/>
    </button>
<Modal modalOpen={modalOpen}  setModalOpen={setModalOpen}>
  <form onSubmit={handleSubmitNewTodo}>
    <h3 className="font-bold text-lg text-green">Add new Task</h3>
<div className="modal-action px-20">
    <input  value={newTaskValue}
    onChange={(e)=>setNewTaskValue(e.target.value)}
    type="text" placeholder="Type here" className="input " />
    <button type='submit' className="btn btn-secondary"> Add</button>
</div>
  </form>
</Modal>
</div>);

}
export default AddTask;