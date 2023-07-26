import { Task } from "./task.model";

export class TasksList {
    private tasks: Task[] = [];
    private count: number = 0;

    constructor(tasks: Task[]) {
        this.tasks = tasks;
        this.count = tasks.length;
    }

    public getTasksList(): Task[] {
        return this.tasks;
    }

    public addTask(task: Task): void {
        this.tasks.unshift(task);
        this.count++;
    }

    public addTasks(tasks: Task[]): void {
        for (let task of tasks) {
            this.addTask(task);
        }
    }

    public deleteTask(task: Task): void {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
        this.count--;
    }
}