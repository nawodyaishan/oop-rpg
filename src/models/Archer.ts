import {Player} from "./Player";

export class Archer extends Player {
    static archerCount: number = 0
    private readonly range: number

    constructor(name: string, health: number, level: number, range: number) {
        super(name, health, level);
        this.range = range
        Archer.archerCount += 1
    }

    public shootArrow() {
        console.log(`${this.name} shoots arrows up to ${this.range} range`)
    }
}