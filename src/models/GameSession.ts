import {Player} from "./Player";

export class GameSession {
    private static gameSessionInstance: GameSession
    public players: Player[] = []
    private isGameActive: boolean = false
    private isGameStarted: boolean = false

    private constructor() {
    }

    // Implementing singleton pattern
    static getInstance(): GameSession {
        if (!GameSession.gameSessionInstance) {
            GameSession.gameSessionInstance = new GameSession()
        }
        return GameSession.gameSessionInstance
    }

    addPlayer(player: Player): void {
        this.players.push(player)
        console.log(`Player ${player.name} added to the game.`);
    }

    startGame(): void {
        this.isGameActive = true;
        this.isGameStarted = true
        console.log("Game has started.");
    }

    endGame(): void {
        this.isGameActive = false;
        console.log("Game has ended.");
    }

    viewCurrentSessionPlayers(): void {
        console.log("Current Players in the Game Session")
        console.log("____")
        this.players.map(player => {
            console.log(player.name)
        })
        console.log("____")
    }

    manageGame() {
        if (this.isGameActive) {
            console.log("Managing active game session...");
        } else {
            console.log("No active game session to manage.");
        }
    }

}