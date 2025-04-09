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

    attack(character)
    {
        let nd6 = 0;
        for (let i = 0; i < this.weapon.numDieDamage; i++)
        {
            let result = Math.floor(Math.random() * 6) + 1;

            nd6 += result;
      
        }
        let weaponDamage = nd6 + 2;
        character.life -= weaponDamage;
        this.weapon.quality -= 3;

        if(character.life <= 0)
        {
            character.life = 0;
        }
        
        return weaponDamage;
    }
}