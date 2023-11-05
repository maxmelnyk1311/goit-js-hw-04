'use strict';

const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        return this.username = newName;
    },
    updatePlayTime(hours) {
        return this.playTime += hours;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"