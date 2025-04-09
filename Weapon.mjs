export default class Weapon {
    constructor(name, description, numDieDamage, type, quality)
    {
        this.name = name;
        this.description = description;
        this.numDieDamage = numDieDamage; //damage of weapon in numbers of dices
        this.type = type;
        this.quality = quality;
    }
}