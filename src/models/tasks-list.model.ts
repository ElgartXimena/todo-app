import { Task } from "./task.model";

export class TasksList {
    private tasks: Task[] = [];
    private count: number = 0;

    constructor(tasks: Task[]) {
        this.tasks = tasks;
        this.count = tasks.length;
    }

    public getCount(): number {
        return this.count;
    }

    public getTasksList(): Task[] {
        return this.tasks;
    }

    public getTask(id: number): Task {
        return this.tasks.find(task => task.id === id)!;
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
            this.count--;
            this.updateIds();
        }
    }

    private updateIds(): void {
        const totalTasks = this.tasks.length;
        for (let i = 0; i < totalTasks; i++) {
          this.tasks[i].id = totalTasks - i;
        }
    }

}