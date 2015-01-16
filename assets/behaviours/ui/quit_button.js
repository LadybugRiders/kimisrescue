"use strict";

//>>LREditor.Behaviour.name: QuitButton
//>>LREditor.Behaviour.params : {}
var QuitButton = function(_gameobject) {
	LR.Behaviour.Button.call(this, _gameobject);
};

QuitButton.prototype = Object.create(LR.Behaviour.Button.prototype);
QuitButton.prototype.constructor = QuitButton;

QuitButton.prototype.create = function(_data) {
	
}

QuitButton.prototype.onInputDown = function() {
	this.entity.game.state.start("Level",true,false,{levelName: "menu_select_levels"});
}
