import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { setLocalStorage, getLocalStorage } from '../../utils/localstorage';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Date, setDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")

    const [newTask, setNewTask] = useState({})

    useEffect(() => {
        // Populate localStorage with initial data if it's not there
        setLocalStorage();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()

        setNewTask({ Title, Description, Date, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData;

        data.forEach((elem) => {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newTask);
                console.log(elem)
            }
        })
        setUserData(data)
        console.log(data)

        setTitle("")
        setDescription("")
        setDate("")
        setAssignTo("")
        setCategory("")
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => { handleSubmit(e) }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Task Name:</h3>
                        <input
                            value={Title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            className='text-sm py-1 px-2 mb-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300' type="text" placeholder='Pull New update' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Date:</h3>
                        <input
                            value={Date}
                            onChange={(e) => { setDate(e.target.value) }}
                            className='text-sm py-1 px-2 mb-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300' type="Date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Assign to:</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => { setAssignTo(e.target.value) }}
                            className='text-sm py-1 px-2 mb-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300' type="text" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Category:</h3>
                        <input
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                            className='text-sm py-1 px-2 mb-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300' type="text" placeholder='Design, Dev, etc.' />
                    </div>
                </div>
                <div className='w-2/5 flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mg-0.5'>Descrpition</h3>
                    <textarea
                        value={Description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-300' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask