class Game {
    constructor() {
        this.player = null; //will store an instance of the class Player
    }
    start() {
        // const player = new Player wouldn't live in other methods
        this.player = new Player(); // this way player is available everywhere
        this.attachEventListeners();
    }
    attachEventListeners() {
        document.addEventListener('keydown', (event) => {
            if(event.key === 'Arrowleft') {
                this.player.moveLeft();
            } else if(event.key === 'Arrowright') {
                this.player.moveRight();
            }
        });
    }
}

class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement('div');
        
        this.domElement.id = "player";
        this.domElement.style.width = this.width + 'vw';
        this.domElement.style.height = this.height + 'vh';
        this.domElement.style.bottom = this.positionY + 'vh';
        this.domElement.style.left = this.positionX + 'vw';

        const boardElm = document.getElementById('board');
        boardElm.appendChild(this.domElement)



    }
    moveLeft() {
        this.positionX--
        this.domElement.style.left = this.positionX = 'vw';
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX = 'vw';

    }
}


const funGame = new Game();
funGame.start();