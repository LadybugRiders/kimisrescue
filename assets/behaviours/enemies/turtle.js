"use strict";
//>>LREditor.Behaviour.name: Turtle
//>>LREditor.Behaviour.params : { "direction": 1, "smoke":null, "range":100, "maxSpeed":50}
var Turtle = function(_gameobject) {	
	Enemy.call(this,_gameobject);
  this.state = "run";
  this.entity.play("run");
  this.range = 100;
  this.maxSpeed = 50;
}

Turtle.prototype = Object.create(Enemy.prototype);
Turtle.prototype.constructor = Turtle;

Turtle.prototype.create = function( _data ){
	Enemy.prototype.create.call(this,_data);
  if(_data.range) this.range = _data.range;
  if(_data.speed) this.speed = _data.speed;
}

Turtle.prototype.update = function(){
  if( this.state == "run"){
    this.updateRun();
    this.updateMoveRange();
  }
}