export class Character {
    constructor(
        name, type, attack, defence
    ) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;

        this.validateName();
        this.validateType();
    }

    validateName() {
        if (typeof this.name !== 'string') {
            throw new Error('Имя должно быть строкой');
        }
        if (this.name.length < 2 || this.name.length > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов');
        }
    }

    validateType() {
        const validTypes = [
            'Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'
        ];
        if (!validTypes.includes(this.type)) {
            throw new Error(
                `Тип должен быть одним из следующих: ${validTypes.join(', ')}`
            );
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить уровень умершего');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health < 0) {
            throw new Error('Нельзя нанести урон умершему');
        }
        this.health -= points * (1 - this.defence / 100);
    }
}

export class Bowerman extends Character {
    constructor(name) {
        super( name, 'Bowerman',25, 25)
    }
}
export class Swordsman extends Character {
    constructor(name) {
        super( name, 'Swordsman', 40, 10)
    }
}
export class Magician extends Character {
    constructor(name) {
        super( name, 'Magician', 10, 40)
    }
}
export class Daemon extends Character {
    constructor(name) {
        super( name, 'Daemon', 25, 25)
    }
}
export class Undead extends Character {
    constructor(name) {
        super( name, 'Undead', 40, 10)
    }
}
export class Zombie extends Character {
    constructor(name) {
        super( name, 'Zombie', 10, 40)
    }
}

