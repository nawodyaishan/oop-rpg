import {Player} from "./models/player";

const main = () => {
    // Creating class instance with constructor
    const archer = new Player("Archer", 300, 3)

    // Manipulating inner state
    archer.name = "Knight"
    archer.level = 5
    archer.health = 500

    // Main actions
    archer.defend()
    archer.attack()
    console.log(archer.greet())
}

main()