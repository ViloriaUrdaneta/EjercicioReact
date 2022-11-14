import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import Taskform from '../pure/forms/taskform';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {


    const defaultTask1 = new Task('Example1', 'Default description 1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Default description 2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Default description 3', false, LEVELS.BLOCKING)



    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componenete
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount')
        }
    }, [tasks])


    function completeTask(task){
        console.log('Change tasks state');
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //Update component's state and the iteration map
        setTasks(tempTasks); 
    }

    function deleteTask(task){
        console.log('Tdelete task');
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add task', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={task} 
                                complete={completeTask}
                                remove={deleteTask}
                            >
                            </TaskComponent>
                        )
                    }
                    )}
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    } else{
        tasksTable = (
        <div>
            <h3>There are no tasks to show.</h3>
            <h4>Please, create one.</h4>
        </div>)
    }



    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                        Your Task:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {tasksTable}
                    </div>
                </div>
            </div>
            <Taskform add={addTask} length={tasks.length}></Taskform>
        </div>
    );
};




export default TaskListComponent;
