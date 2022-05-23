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

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Without a porkbun in your hand, you aren't a real man.");
    }
}

const superSensei = new Sensei("Wei Lin");
superSensei.speakWisdom();
superSensei.showStats();
