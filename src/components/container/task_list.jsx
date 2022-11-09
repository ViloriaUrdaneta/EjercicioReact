import React, { useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import Taskform from '../pure/forms/taskform';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {


    const defaultTask1 = new Task('Example1', 'Default description 1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Default description 2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Default description 1', false, LEVELS.BLOCKING)



    //estado del componente
    const [task, setTasks] = useState(defaultTask1, defaultTask2, defaultTask3);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componenete
    useEffect(() => {
        console.log('Task state has benn modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [task]);


    const changeCompleted = (id) => {
        console.log('TODO: cambiar estado de una tarea')
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
                                {task.map((task, index) => {
                                    return(
                                        <TaskComponent key={index} task={task}>
                                        </TaskComponent>
                                    )
                                }) }
                            </tbody>
                        </table>
                    </div>
                </div>
                    <Taskform></Taskform>
            </div>
        </div>
    );
};




export default TaskListComponent;
