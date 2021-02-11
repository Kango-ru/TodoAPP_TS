import React, { useState } from "react";
import { TaskViewModel } from "../viewmodel/TaskViewModel";
import { TaskListItem } from "./TaskListItem";
import { Task } from "../model/Task";

/**
 * Task全体を表示
 * ViewModelからデータを受け取る
 */
export function TaskList() {
  let viewModel = new TaskViewModel();

  let [tasks, setTasks] = useState(viewModel.getAllTasks()); // 表示する全てのタスク
  let [inputText, setInputText] = useState(""); // テキストフィールドの値

  let onClickCreateButton = () => {
    // タスクを新規作成
    viewModel.addTask(inputText);
    setTasks(viewModel.getAllTasks()) // View内のタスクリストを更新(画面を更新)
  };
  
  return (
    <div>
      <input type={"text"} value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <button onClick={() => onClickCreateButton()}>作成</button>
      {tasks.map((task, i) => {
        return <TaskListItem key={i} task={task} />;
      })}
    </div>
  );
}
