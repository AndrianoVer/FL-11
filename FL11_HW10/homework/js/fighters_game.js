class Fighter {
	constructor({ name: name, damage: damage, hp: health, agility: agility }) {
    this._name = name;
    this._damage = damage;
	this._health = health;
    this._agility = agility;
    this._wins = 0;
	this._maxHealth = this._health;
    this._losses = 0;
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }

  getHealth() {
	return this._health;
  }

  getAgility() {
    return this._agility;
  }

	attack(soldier){
    const maxChance = 100;
    const random = Math.floor(Math.random() * maxChance);
    if (soldier.getAgility() <= random) {
		console.log(`${this.getName()} make ${this.getDamage()} damage to ${soldier.getName()}`)
		soldier._health -= this.getDamage()
		if (soldier._health <= 0) {
			soldier._health = 0;
      }
    } else {
      console.log(`${this.getName()} missed`)
    }
  }

  heal(a) {
	this._health + a > this._maxHealth ? this._health = this._maxHealth : this._health += a;
  }

  dealDamage(a) {
	this._health - a <= 0 ? this._health = 0 : this._health -= a;
  }

  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins: ${this._wins}, Losses: ${this._losses}`)
  }

  addWin() {
    this._wins += 1
  }

  addLoss() {
    this._losses += 1
  }
}

const battle = (soldier1, soldier2) => {
	const name1 = soldier1.getName();
	const name2 = soldier2.getName();
  let game = true;

	if (soldier1.getHealth() <= 0) {
    game = false
    console.log(`${name1} is dead and can't fight`)
	} else if (soldier2.getHealth() <= 0) {
    game = false
    console.log(`${name2} is dead and can't fight`)
  }

  while (game) {
	if (soldier2.getHealth() > 0 && soldier1.getHealth() > 0) {
		soldier1.attack(soldier2)
		if (soldier1.getHealth() > 0 && soldier2.getHealth() > 0) {
			soldier2.attack(soldier1)
      }
	} else if (soldier2.getHealth() <= 0) {
      game = false
      soldier2.addLoss();
      soldier1.addWin();
      console.log(`${name2} lost`)
	} else if (soldier1.getHealth() <= 0) {
      game = false
      soldier1.addLoss();
      soldier2.addWin();
      console.log(`${name1} lost`)
    }
  }
}