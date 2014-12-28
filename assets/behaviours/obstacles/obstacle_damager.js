"use strict";
//>>LREditor.Behaviour.name: ObstacleDamager
//>>LREditor.Behaviour.params : { "right": false,"top":false,"bottom":true,"left":false,"forceVectorX":-150,"forceVectorY":-200}
var ObstacleDamager = function(_gameobject) {	
	LR.Behaviour.call(this,_gameobject);
	this.canDamage = true;
	this.rightDamage = false;
	this.leftDamage = false;
	this.topDamage = false;
	this.bottomDamage = false;
	this.forceVectorX = -100;
	this.forceVectorY = -200;
}

ObstacleDamager.prototype = Object.create(LR.Behaviour.prototype);
ObstacleDamager.prototype.constructor = ObstacleDamager;

ObstacleDamager.prototype.create = function(_data){
	if(_data.right == true) this.rightDamage = true;
	if(_data.left == true) this.leftDamage = true;
	if(_data.top == true) this.topDamage = true;
	if(_data.bottom == true) this.bottomDamage = true;
	if(_data.forceVectorX) this.forceVectorX = _data.forceVectorX;
	if(_data.forceVectorY) this.forceVectorY = _data.forceVectorY;
}

ObstacleDamager.prototype.onBeginContact = function(_otherBody, _myShape, _otherShape, _equation){
	if(this.canDamage == true && _otherBody.go.layer == "player" && _otherShape.lr_name == "mainShape"){
		var side = LR.Utils.getRectCollisionSide(this.go,_myShape,_otherBody.go,_otherShape);
		
		var damage = false;

		switch(side){
			case side == LR.Utils.BOTTOM : if( this.bottomDamage ) damage = true;
				break;
			case side == LR.Utils.RIGHT : if( this.rightDamage ) damage = true;
				break;
			case side == LR.Utils.LEFT : if( this.leftDamage ) damage = true;
				break;
			case side == LR.Utils.TOP : if( this.topDamage ) damage = true;
				break;
		}
		if( damage ){
			_otherBody.go.sendMessage("hit",{shape:_otherShape,
											sender:this.go,
											forceVector : new Phaser.Point(this.forceVectorX,this.forceVectorY)
									});
		}
	}
}

ObstacleDamager.prototype.activateDamager = function(){
	this.canDamage = true;
}

ObstacleDamager.prototype.deactivateDamager = function(){	
	this.canDamage = false;
}