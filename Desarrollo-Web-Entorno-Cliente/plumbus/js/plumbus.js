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
var gameOver;
var scoreText;
var levelText;
var textoGameOver = 'GAME OVER';
var nivel = 1;
var posicionesY = [400, 250,200];
var puntuacion = [];
function preload(){
    this.load.image('fondo', '/assets/fondo.png');
    this.load.image('fondoNegro', '/assets/fondonegro.png');
    this.load.image('plataforma', '/assets/platform.png');
    this.load.image('plumbus', '/assets/plumbus.png');
    this.load.image('portal', '/assets/portal.png');
    this.load.image('timecop', '/assets/timecop.png');
    this.load.image('portalgun', '/assets/portalgun.png');
    this.load.spritesheet('morty', '/assets/morty.png', {frameWidth: 32, frameHeight: 40});
}

function create (){
    this.add.image(400, 300, 'fondo');
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 571, 'plataforma').setScale(1.1).refreshBody();
    platforms.create(60, 250, 'plataforma').setScale(.5).refreshBody();
    platforms.create(750, 220, 'plataforma').setScale(.5).refreshBody();
    platforms.create(600, 400, 'plataforma').setScale(.5).refreshBody();

    player = this.physics.add.sprite(100, 450, 'morty');
    player.setBounce(0);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key:'derecha',
        frames: this.anims.generateFrameNumbers('morty', {start:5, end:8}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key:'izquierda',
        frames: this.anims.generateFrameNumbers('morty', {start:3, end:0}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key:'parado',
        frames: [{key:'morty', frame: 4}],
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(platforms, player);
    cursors = this.input.keyboard.createCursorKeys();

    plumbus = this.physics.add.group({
        key:'plumbus',
        repeat: 2
    });
    plumbus.children.iterate(function(child){
        createPlumbus(child);
    })
    this.physics.add.collider(platforms, plumbus);
    this.physics.add.overlap(plumbus, player, collectPlumbus, null, this);

    scoreText = this.add.text(16,54,'Score: ' + score, {fontSize: '32px', fill: '#000'});
    levelText = this.add.text(16,17,'Nivel: ' + nivel, {fontSize: '32px', fill: '#000'});

    portalgun = this.physics.add.image(Phaser.Math.Between(10, 790), posicionesY[Phaser.Math.Between(0,2)], 'portalgun');
    portal = this.physics.add.image(400,400, 'portal');
    portal.disableBody(true, true);
    this.physics.add.collider(platforms, portal);
    this.physics.add.collider(platforms, portalgun);
    this.physics.add.overlap(player, portal, hitPortal, null, this);
    this.physics.add.overlap(player, portalgun, hitPistola, null, this);

    timecops = this.physics.add.group();
    this.physics.add.collider(platforms, timecops);
    this.physics.add.overlap(player, timecops, hitTimecops, null, this);




}

function update(){
    if(gameOver){
        return;
    }
    if(cursors.left.isDown){
        player.anims.play('izquierda', true);
        player.setVelocityX(-150);
    }else if(cursors.right.isDown){
        player.anims.play('derecha', true);
        player.setVelocityX(150);
    }else{
        player.anims.play('parado', false);
        player.setVelocityX(0);
    }

    if(cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-340);
    }



}

function createPlumbus(plumbus){
    plumbus.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    plumbus.x = Phaser.Math.Between(10, 790);
    plumbus.y = posicionesY[Phaser.Math.Between(0,2)];
}

function collectPlumbus(player, plumb){
    plumb.disableBody(true, true);
    score += 10*nivel;
    scoreText.setText('Score: ' + score);
}

function hitPistola(player, pistola){
    pistola.disableBody(true, true);
    portal.enableBody(true, Phaser.Math.Between(10,790), posicionesY[Phaser.Math.Between(0,2)], true, true);
}
function hitPortal(player, elPortal){
    nivel++;

    elPortal.disableBody(true, true);
    player.disableBody(true, true);

    plumbus.children.iterate(function (child){
        child.enableBody(true, child.x, 0, true , true);
        createPlumbus(child);
    });
    player.enableBody(true, Phaser.Math.Between(10, 790), posicionesY[Phaser.Math.Between(0,2)], true , true);
    portalgun.enableBody(true, Phaser.Math.Between(10, 790), posicionesY[Phaser.Math.Between(0,2)], true , true);
    levelText.setText('Nivel: ' + nivel);
    if(nivel%2 == 0){
        var x = (player.x<400) ? Phaser.Math.Between(400,800) : Phaser.Math.Between(0,400);
        var timecop = timecops.create(x, 16, 'timecop');
        timecop.setBounce(1);
        timecop.setCollideWorldBounds(true);
        timecop.setVelocity(Phaser.Math.Between(-200, 200), 50);
        timecop.allowGravity = false;   
    }
}

function hitTimecops(player, timecops){
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
    this.add.image(400, 300, 'fondoNegro');
    this.add.text(120,230,'GAME OVER', {fontSize: '100px', fill: 'red', fontFamily: '"Tahoma"'});
    this.add.text(300, 350, 'Puntuación Obtenida: ' + score , {fontSize: '52px;', fill: 'white'});
    scoreGuardado();
    var altura = 400;
    for (var i = 0 ; i<puntuacion.length ; i++){
        this.add.text(350, altura+=20, (i+1) + 'º -- '+ puntuacion[i], {fontSize: '22px;', fill: 'white'});
    }
}

function scoreGuardado(){
    if(localStorage.getItem('puntuacion') != null){
        puntuacion = localStorage.getItem('puntuacion');
        puntuacion = JSON.parse(puntuacion);
        if(puntuacion.length == 5){
            if(puntuacion[4] < score){
                puntuacion[4] = score;
            }
        }else{
            puntuacion.push(score);   
        }
        for(var i = 0 ; i < 5; i++){
            for (var j = 0 ; j<5; j++){
                if(puntuacion[i] > puntuacion[j]){
                    var aux = puntuacion[i];
                    puntuacion[i] = puntuacion[j];
                    puntuacion[j] = aux;
                }
            }
        }
        console.log(puntuacion);
        localStorage.setItem('puntuacion',JSON.stringify(puntuacion));
    }else{
        puntuacion.push(score);
        localStorage.setItem('puntuacion', JSON.stringify(puntuacion));
    }
}