export default class Character {

    constructor(name, occupation, gold, weapon, pouch =[], life)
    {

        this.name = name; 
        this.occupation = occupation; //job name, ex; assasin, rogue;
        this.gold = gold;
        this.life = life;
        this.weapon = weapon;
        this.pouch = pouch; // array of object of precious stones
    }
}