import {Player} from "./Player";

export class Knight extends Player {
    protected knightArmor: number;

    constructor(name: string, health: number, level: number, knightArmor: number) {
        super(name, health, level);
        this.knightArmor = knightArmor;
    }

    public defend(): void {
        console.log(`${this.name} defends with knight armor rating: ${this.knightArmor} and level - ${this.level}}`);
    }
}
