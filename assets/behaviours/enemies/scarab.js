"use strict";
//>>LREditor.Behaviour.name: Scarab
//>>LREditor.Behaviour.params : { "direction": 1, "jumpable" : true, "cutable" : true, "hatable":true, "dead":false, "smoke":null, "range":100, "maxSpeed":50}
var Scarab = function(_gameobject) {	
	Enemy.call(this,_gameobject);
  this.state = "run";
  this.entity.play("run");
  this.range = 100;
  this.maxSpeed = 50;
}

Scarab.prototype = Object.create(Enemy.prototype);
Scarab.prototype.constructor = Scarab;

Scarab.prototype.create = function( _data ){
	Enemy.prototype.create.call(this,_data);
  if(_data.range) this.range = _data.range;
  if(_data.speed) this.speed = _data.speed;
}

Scarab.prototype.update = function(){
  if( this.state == "run"){
    this.updateRun();
    var rangeDone = this.initX - this.entity.x ;
    if(this.direction < 0 && rangeDone > this.range * 0.5){
      this.direction = 1;
      this.scaleByGravity();
      this.currentSpeed = 0;
    }
    if(this.direction > 0 && rangeDone < -this.range *0.5){
      this.direction = -1;
      this.scaleByGravity();
      this.currentSpeed = 0;
    }
  }
}
