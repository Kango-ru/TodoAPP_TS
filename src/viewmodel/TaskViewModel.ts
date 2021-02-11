import { Task } from "../model/Task";
import {TaskService} from '../service/TaskService';

/**
 * Viewからデータの更新処理などを行わないようにする。
 */
export class TaskViewModel {
    private readonly service = new TaskService()
    
    constructor(){}

    /**
     * @param id 取得するタスクのID
     */
    getTask(id: string): Task{
        let task = this.service.getTask(id)
        return task
    }

    getAllTasks(): Task[] {
        let tasks = this.service.getAllTasks();
        return tasks;       
    }

    /**
     * @param id 更新するタスクのID
     * @returns 最新のisDone
     */
    updateIsDone(id: string): boolean {
        this.service.updateIsDone(id);
        return this.service.getTask(id).isDone;
    }

    addTask(newTaskTitle: string){
        this.service.addTask(newTaskTitle);
    }
}