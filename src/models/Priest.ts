import {Player} from "./Player";
import {Healer} from "../interfaces/Healer";
import {Combatant} from "../interfaces/Combatant";

export class Priest extends Player implements Healer, Combatant {
    constructor(name: string, health: number, level: number) {
        super(name, health, level);
    }

    fight(): void {
        console.log(`${this.name} fights bravely!`);
    }

    heal(): void {
        console.log(`${this.name} performs healing.`);
    }
}