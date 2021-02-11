import {Task} from '../model/Task';


/**
 * 辞書型でデータを保存
 */
const tasks: { [id: string]: Task } = {
    "a": new Task("a", "Task", false),
    "b": new Task("b", "Task2", false),
    "c": new Task("c", "Task3", false)
}

/**
 * Repository: 
 * 　　データの保存をする。
 * 　　Repositoryを使う側からすると、複雑になりやすいデータの更新処理を省くことができる。
 */
export class TaskRepository {

    getAll(): Task[] {
        let keys: string[] = Object.keys(tasks)
        return keys.map(key => tasks[key])
    }

    get(id: string): Task {
        return tasks[id]
    }

    updateIsDone(id: string, isDone: boolean){
        tasks[id] = tasks[id].updateIsDone(isDone);
    }

    updateTitle(id: string, newTitle: string){
        tasks[id] = tasks[id].updateTitle(newTitle);
    }

    addTask(newTask: Task) {
        tasks[newTask.id] = newTask
    }
}