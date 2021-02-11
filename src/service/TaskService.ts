import { Task } from "../model/Task";
import { TaskRepository } from "../repository/TaskRepository";

/**
 * Service:
 *   Repositoryを操作してデータを更新したり、更新のときのルールを管理する。
 *   複数のViewModelを作成したとしても、Serviceを呼び出すことで、処理を繰り返し書かなくて良くなる。
 */
export class TaskService {
  private readonly repository = new TaskRepository();

  constructor() {}

  getTask(id: string): Task {
    return this.repository.get(id);
  }

  getAllTasks(): Task[] {
    let tasks = this.repository.getAll();
    return tasks;
  }

  updateIsDone(id: string) {
    let task = this.repository.get(id);
    let currentIsDone = task.isDone;
    this.repository.updateIsDone(id, !currentIsDone);
  }

  updateTitle(id: string, newTitle: string) {
    let task = this.repository.get(id);
    this.repository.updateTitle(id, newTitle);
  }

  addTask(newTaskTitle: string){
    let newTaskId = Math.random().toString(32) // ランダムな16桁の数を取得
    let newTask = new Task(newTaskId, newTaskTitle, false);
    this.repository.addTask(newTask);
  }
}