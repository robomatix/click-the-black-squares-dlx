'use strict';

// Prefabs
var Square = require('./square');

var SquareGroup;

SquareGroup = function (game, parent) {
    Phaser.Group.call(this, game, parent);


    for (var i = 0; i < 10; i++) {

        // Some variables
        var x = i * 50;
        var x25 = x + 25;// Add 25 because of the anchor in the middle ( square width = 50 ) -> To be improved

        // Add a square-bv with some properties
        this.square = new Square(this.game, x25, 525);
        this.add(this.square);
    }

    this.width = 500;

};

SquareGroup.prototype = Object.create(Phaser.Group.prototype);
SquareGroup.prototype.constructor = SquareGroup;

SquareGroup.prototype.update = function () {

    // write your prefab's specific update code here

};

SquareGroup.prototype.unique_random_number = function () {// NOT USED BUT KEPT FOR ARCHIVES !!!!!
// we want the amount of generated squares to increase from 1 to 10 ( max ) with a random position... So we use the code below to do that !
// http://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x
    var amount = 0;
    var unique_random_numbers = [];

    if (this.game.countIteration >= 10) {
        unique_random_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Well... Not really random numbers ! LOL !
    } else {
        amount = this.game.countIteration;
        while (unique_random_numbers.length < amount) {
            var random_number;
            random_number = this.game.rnd.integerInRange(0, 9);
            if (unique_random_numbers.indexOf(random_number) == -1) {
                // Yay! new random number
                unique_random_numbers.push(random_number);
            }
        }
    }
//unique_random_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Well... Not really random numbers ! LOL !
// unique_random_numbers is an array containing 'amount' unique numbers in the given range
    console.log(unique_random_numbers + ' fffffffffffffffffff / ' + this.game.countIteration);
    return unique_random_numbers;
}

SquareGroup.prototype.reset = function (x, y) {
    this.x = x;
    this.y = y;
    this.exists = true;
};

module.exports = SquareGroup;
