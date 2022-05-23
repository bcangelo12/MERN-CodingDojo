class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`The ninja's name is ${this.name}`);
    }
    showStats() {
        console.log(
            `Ninja stats: Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`
        );
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Kenji", 50);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
