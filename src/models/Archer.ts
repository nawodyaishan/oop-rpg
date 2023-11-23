import {Player} from "./Player";
import {Hero} from "../interfaces/Hero";
import console from "console";

export class Archer extends Player implements Hero {
    constructor(name: string, health: number, level: number) {
        super(name, health, level);
    }

    performHeroicAction(): void {
        console.log(`t${this.name} performs heroic action`)
    }
}