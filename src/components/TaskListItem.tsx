import React from 'react';
import { Task } from '../model/Task';
import { TaskViewModel } from '../viewmodel/TaskViewModel';
import { useState } from 'react'

type TaskListItemProps = {
    task: Task
}

/**
 * データの表示(TaskListから受け取る)
 * 更新処理をViewModelに依頼
 */
export function TaskListItem(props: TaskListItemProps) {
    let viewModel = new TaskViewModel()

    let [isDone, setIsDone] = useState(props.task.isDone)

    let onClickIsDone = () => {
        // 更新と同時に最新の値を取得する。
        let updated = viewModel.updateIsDone(props.task.id)
        // 関数Component上の状態を、取得した値で更新する。
        setIsDone(updated)
    }

    return (<div>
        <input 
            type={"checkbox"} 
            checked={isDone} 
            onChange={() => onClickIsDone()} 
            />
        {props.task.title}
    </div>);
}