import * as console from "console";

export abstract class Player {
    static playerCount: number = 0
    name: string | undefined
    crush: Player | undefined
    speed: number | undefined
    isInvincible: boolean | undefined
    protected _health: number | undefined;

    constructor(health: number) {
        Player.playerCount++
        console.log(`Current PLayer Count = ${Player.playerCount}`)
        this._health = health
    }

    getHealth(): number | undefined {
        if (this._health === undefined) {
            console.log(`Health is undefined in ${this.name}`)
            return
        }
        return this._health;
    }

    setHealth(value: number) {
        if (value < 0) {
            console.log("Please provide valid range")
            return
        }
        this._health = value;
    }

    greet() {
        console.log("Hello World")
    }

    move() {
        console.log("Player is moving")
    }

    abstract attack(): void
}