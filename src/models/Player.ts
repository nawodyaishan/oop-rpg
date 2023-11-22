export class Player {

    static playerCount: number = 0

    // Parameter based constructor
    constructor(protected name: string, public health: number, public level: number) {
        Player.playerCount += 1
    }

    public battle() {
        this.attack()
        this.defend()
    }

    // Methods
    protected attack() {
        console.log(`${this.name} is attacking`)
    }

    protected defend() {
        console.log(`${this.name} is defending`)
    }
}
