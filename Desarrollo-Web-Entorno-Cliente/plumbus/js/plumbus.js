var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;
var plumbus;
var timecops;
var portalgun;
var portal;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var levelText;
var nivel = 1;
var posicionesY = [400, 250,200];

function preload(){
    this.load.image('fondo', '/assets/fondo.png');
    this.load.image('fondoNegro', '/assets/fondonegro.png');
    this.load.image('plataforma', '/assets/platform.png');
    this.load.image('plumbus', '/assets/plumbus.png');
    this.load.image('portal', '/assets/portal.png');
    this.load.image('timecop', '/assets/timecop.png');
    this.load.spritesheet('morty', '/assets/morty.png', {frameWidth: 32, frameHeight: 40});
}

function create (){
    this.add.image(400, 300, 'fondo');
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 571, 'plataforma').setScale(1.1).refreshBody();
    platforms.create(60, 250, 'plataforma').setScale(.5).refreshBody();
    platforms.create(750, 220, 'plataforma').setScale(.5).refreshBody();
    platforms.create(600, 400, 'plataforma').setScale(.5).refreshBody();
    
}

function update(){

}