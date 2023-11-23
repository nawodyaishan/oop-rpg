import {Knight} from "./models/Knight";
import {Witch} from "./models/Witch";
import {Archer} from "./models/Archer";
import {Priest} from "./models/Priest";
import {GameSession} from "./models/GameSession";

const main = () => {
    // Creating Game Session
    const gameSession: GameSession = GameSession.getInstance()

    // Creating Instances
    const arthur = new Knight("Arthur", 100, 5, 40);
    const morgana = new Witch("Morgana", 85, 5);
    const legolas = new Archer("Legolas", 95, 4);
    const gandalf = new Priest("Gandalf", 110, 6);

    // Game Session
    gameSession.addPlayer(arthur)
    gameSession.addPlayer(morgana)
    gameSession.addPlayer(legolas)
    gameSession.addPlayer(gandalf)

    //View players inside the Game Session
    gameSession.viewCurrentSessionPlayers()

    // Starting the game
    gameSession.startGame();

    arthur.performHeroicAction()
    morgana.performEvilDeed()
    legolas.performHeroicAction()
    gandalf.fight()
    gandalf.heal()

    // Managing
    gameSession.manageGame()

    gameSession.endGame()

    gameSession.manageGame()
}

main()
