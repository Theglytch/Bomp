function Game() {
    this.$game = $('#game');
    this.fps = 60;
    this.player = new Player(this);
    
    this.init=function(){
        $('#fps').text(this.fps);
        this.player.init();
        this.player.update();
    }
    
    this.run=function(){
        var update = setInterval(function(){
            
        },1000/this.fps);
    }
}

function Player(game) {
    var game = game;

    this.init=function(){
        game.$game.append('<div id="player">');
    }
    
    this.update=function(){
        var collide = $("#player").collision(".rigid");
        //if (!collide) alert(collide);
    }
}

var game = new Game();
game.init();
game.run();