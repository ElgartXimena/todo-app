export class Task {
    static nextId: number = 1;
    id: number;
    name: string;
    done: boolean;

    constructor(name: string) {
        this.id = Task.nextId;
        this.name = name;
        this.done = false;
        Task.nextId++;
    }
}