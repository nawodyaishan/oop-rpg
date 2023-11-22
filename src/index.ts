import {Player} from "./models/Player";
import {Knight} from "./models/Knight";
import {Archer} from "./models/Archer";

const main = () => {
    // Creating Instances
    const knightOne: Player = new Player("St John", 100, 2);

    knightOne.battle()
    console.log(knightOne.health)
    console.log(knightOne.level)

    const ArcherOne: Player = new Player("Daniel", 80, 3);

    ArcherOne.battle()
    console.log(ArcherOne.health)
    console.log(ArcherOne.level)

    const knightTwo = new Knight("paul", 100, 3, 100)
    knightTwo.battle()

    const archerTwo = new Archer("Catherina", 900, 1, 150)
    archerTwo.battle()
    archerTwo.shootArrow()

    const knightThree = knightTwo
    knightThree.battle()

    console.log("Total Player Count", Player.playerCount)
    console.log("Total Archer Count", Archer.archerCount)
}

main()