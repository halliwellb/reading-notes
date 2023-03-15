var person = { 
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

person.bio();
person.introduceSelf();

// var EpicFailVideo = function(epicRating, hasAnimals) {
//     this.epicRating = epicRating;
//     this.hasAnimals = hasAnimals;
// }

// EpicFailVideo.prototype.generateRandom = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// EpicFailVideo.prototype.dailyLikes = function() {
//     var viewers, percentage;

//     viewers = this.generateRandom(10, 30) * this.epicRating;

//     if (this.hasAnimals) {
//         percentage = 0.75;
//     } else {
//         percentage = 0.40;
//     }

//     return Math.round(viewers * percentage);
// }

// EpicFailVideo.prototype.weeklyLikes = function () {
//     var total = 0;
//     for (var i = 0; i < 7; i++) {
//         total += this.dailyLikes();
//     }
//     return total;
// }

// var parkourFail = new EpicFailVideo(7, false);
// var corgiFail = new EpicFailVideo(4, true);

// console.log(parkourFail.weeklyLikes());
// console.log(corgiFail.weeklyLikes());