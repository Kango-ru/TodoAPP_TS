export class Task {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly isDone: boolean
    ) {}

    updateIsDone(newValue: boolean): Task {
        return new Task(this.id, this.title, newValue)
    }

    updateTitle(newTitle: string): Task {
        return new Task(this.id, newTitle, this.isDone);
    }
}