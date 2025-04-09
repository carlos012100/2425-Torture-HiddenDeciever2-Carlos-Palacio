import Character from "./Character.mjs";
import PreciousStone from "./PreciousStone.mjs";
import Weapon from "./Weapon.mjs";
import {preciousData} from "./Data/PreciousStoneData.mjs";
import { weaponData } from "./Data/WeaponData.mjs";
import { characterData } from "./Data/CharacterData.mjs";

const stoneArray = []
const weaponsArray = []
const charactersArray = []
preciousStoneCreate(stoneArray);

createWeapons(weaponsArray)

//Creation of Characters 
characterCreate(charactersArray)

//we equipp the characters

equippedWeapons (charactersArray, weaponsArray);


buyStones (stoneArray, charactersArray)

showGoldLeft (charactersArray)

showCharacters (charactersArray)


fightSim();



//CREATION of precious stone objects array
function preciousStoneCreate(array)
{
    const starfire = new PreciousStone(preciousData[0].name, preciousData[0].description, preciousData[0].value)
    const etheral = new PreciousStone(preciousData[1].name, preciousData[1].description, preciousData[1].value);
    const emerald = new PreciousStone(preciousData[2].name, preciousData[2].description, preciousData[2].value);
    const moonstone = new PreciousStone(preciousData[3].name, preciousData[3].description, preciousData[3].value);
    const shadow = new PreciousStone(preciousData[4].name, preciousData[4].name, preciousData[4].value);
    const topaz = new PreciousStone(preciousData[5].name, preciousData[4].description, preciousData[4].value)
    const opal = new PreciousStone(preciousData[6].name, preciousData[6].description, preciousData[6].value);
    const garnet = new PreciousStone(preciousData[7].name, preciousData[7].description, preciousData[7].value);
    const azure = new PreciousStone(preciousData[8].name, preciousData[8].description, preciousData[8].value)
    const amethyst = new PreciousStone(preciousData[9].name, preciousData[9].description, preciousData[9].value);

    array.push(starfire, etheral, emerald, moonstone, shadow, topaz,opal,garnet, azure, amethyst)



}  
//Creation of weapons 
function createWeapons(array) {

    let bow = weaponData[0]
    let blade = weaponData[1]
    let wand = weaponData[2]
    let longbow = weaponData[3]
    let sword = weaponData [4]
    let soulwand = weaponData[5]
    let phonixBow = weaponData[6]
    let crystalSword = weaponData[7]
    let frostwand = weaponData[8]
    let hunterBow = weaponData[9]



    bow = new Weapon(bow.name, bow.description, bow.num_die_damage, bow.type, bow.quality);
    blade = new Weapon(blade.name, blade.description, blade.num_die_damage,blade.type, blade.quality)
    wand = new Weapon(wand.name, wand.description, wand.num_die_damage, wand.type, wand.quality)
    longbow = new Weapon(longbow.name, longbow.description, longbow.num_die_damage, longbow.type, longbow.quality)
    sword = new Weapon(sword.name, sword.description, sword.num_die_damage, sword.type, sword.quality)
    soulwand = new Weapon(soulwand.name, soulwand.description, soulwand.num_die_damage, soulwand.type, soulwand.quality)
    phonixBow = new Weapon(phonixBow.name, phonixBow.description, phonixBow.num_die_damage, phonixBow.type, phonixBow.quality)
    crystalSword = new Weapon(crystalSword.name, crystalSword.description, crystalSword.num_die_damage, crystalSword.type, crystalSword.quality)
    frostwand = new Weapon(frostwand.name, frostwand.description, frostwand.num_die_damage, frostwand.type, frostwand.quality)
    hunterBow = new Weapon(hunterBow.name, hunterBow.description, hunterBow.num_die_damage, hunterBow.type, hunterBow.quality)


    array.push(bow, blade, wand, longbow, sword, soulwand, phonixBow, crystalSword, frostwand, hunterBow);


}

//Creation of characters 
function characterCreate(array)
{
    let kaelen =characterData[0]
    let braga = characterData[1]
    let willa = characterData[2]
    let orlin = characterData[3]
    let rurik = characterData[4]

    kaelen = new Character(kaelen.name, kaelen.occupation, kaelen.gold, kaelen.weapon, kaelen.pouch, kaelen.life)
    braga = new Character(braga.name, braga.occupation, braga.gold, braga.weapon, braga.pouch, braga.life)
    willa = new Character(willa.name, willa.occupation, willa.gold, willa.weapon, willa.pouch, willa.life)
    orlin = new Character(orlin.name, orlin.occupation, orlin.gold, orlin.weapon, orlin.pouch, orlin.life)
    rurik = new Character(rurik.name, rurik.occupation, rurik.gold, rurik.weapon, rurik.pouch, rurik.life)

    array.push(kaelen, braga, willa, orlin, rurik);
}
function equippedWeapons (charactersArray, weaponsArray)
{

let rangedWeapons = [ weaponsArray[0], weaponsArray[3], weaponsArray[6], weaponsArray[9] ]
let meleeWeapons = [ weaponsArray[1], weaponsArray[4], weaponsArray[7] ]
let magicWeapons = [ weaponsArray[2], weaponsArray[5], weaponsArray[8] ]

for (let i = 0; i < charactersArray.length; i++){

    if(charactersArray[i].occupation === "thug")
    {

        for (let j = 0; j < weaponsArray.length; j++)
        {
            let randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)]

            if (randomWeapon.name === rangedWeapons[0].name 
                || randomWeapon.name === rangedWeapons[1].name || randomWeapon.name === rangedWeapons[2].name 
                || randomWeapon.name === rangedWeapons[3].name)
                {
                    charactersArray[i].weapon = randomWeapon;
                    console.log(charactersArray[i].weapon)

                    weaponsArray.splice(j, 1)
                    --j;
                    break;
                }
  
        }
    }

    if (charactersArray[i].occupation === "priest") {

        for (let j = 0; j < weaponsArray.length; j++)
        {
            let randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)]

            if(randomWeapon.type === "arcane")
            {
                charactersArray[i].weapon = randomWeapon;
                console.log(charactersArray[i].weapon)

                weaponsArray.splice(j, 1)
                --j;
                break;
            }
        }
    }
        if (charactersArray[i].occupation === "peasant") {
            for (let j = 0; j < weaponsArray.length; j++)
            {
                let randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)]
                console.log(randomWeapon)
                console.log(weaponsArray[2].name)
                console.log("see: " + weaponsArray[2].name) 


                if((randomWeapon.type === "arcane") && (randomWeapon.name === magicWeapons[1].name || randomWeapon.name === magicWeapons[2].name || randomWeapon.name === magicWeapons[0].name)){
                    charactersArray[i].weapon = randomWeapon

                    console.log(charactersArray[i].weapon)
                    console.log(randomWeapon)
                    weaponsArray.splice(j, 1)
                    --j;
                    break;
            }
        }

    }
    
 }
}

        function buyStones(stoneArray, charactersArray)
        {
            for (let i = 0; i < charactersArray.length; i++)
                 {
                    console.log("thug")
                    for (let j = 0; j < stoneArray.length; j++)
                    {
                        let stone =Math.floor(Math.random()* weaponsArray.length)

                        if (charactersArray[i].gold >= stoneArray[stone].value)
                        {
                            charactersArray[i].pouch.push(stoneArray[stone])
                            console.log(charactersArray[i].pouch)

                            charactersArray[i].gold -= stoneArray[stone].value;
                        }
                    }
                 }
        }
        function showGoldLeft (characterArray)
        {
            for (let i = 0; i < characterArray.length; i++)
            {
                console.log("Character name: " + characterArray[i].name);
                console.log("Gold left: " + characterArray[i].gold)
                console.log(" ")
            }
        }

        function showCharacters (charactersArray)
        {
            console.log("Character List")
            console.log("-----------")
            console.log("")
            for (let i = 0; i < charactersArray.length; i++)
            {
                console.log("Name: " + charactersArray[i].name)
                console.log("-------------")
                console.log("Occupation: " + charactersArray[i].occupation)
                console.log("Gold: " + charactersArray[i].gold)
                console.log("-----------")
                console.log("WEAPON")
                console.log("-----------")
                console.log("Name: " + charactersArray[i].weapon.name)
                console.log("Description: " + charactersArray[i].weapon.description)
                console.log("Num dies of damage: " + charactersArray[i].weapon.numDieDamage)
                console.log("Type: " + charactersArray[i].weapon.type)
                console.log("Quality: " + charactersArray[i].weapon.quality)
                console.log("------------")
                console.log("Pouch")
                console.log("------------")
                for (let j = 0; j < charactersArray[i].pouch.length; j++)
                {
                    console.log(charactersArray[i].pouch[j].name + ":" + charactersArray[i].gold)
                }
            }
        }

        function fightSim()
        {
            let attacker = charactersArray[Math.floor(Math.random() * charactersArray.length)]

            let defender = charactersArray[Math.floor(Math.random() * charactersArray.length)]

            //before attack
            console.log("")
            console.log("Before attack")
            console.log("------------")
            console.log("Attacker")
            console.log("name: " + attacker.name)
            console.log("life: " + attacker.life)
            console.log("weapon: " + attacker.weapon.name)
            console.log("weapon quality: " + attacker.weapon.quality)
            console.log("------------")
            console.log("Defender")
            console.log("name: " + defender.name)
            console.log("life: " + defender.life)
            console.log("weapon: " + defender.weapon.name)
            console.log("quality: " + defender.weapon.quality)

            //while attacking 

            let damage = attacker.attack(defender)

            console.log(attacker.name + " attacks " + defender.name + " and inflicts " + damage + " of damage")

            //After attack

            console.log("")
            console.log("After attack")
            console.log("------------")
            console.log("Attacker")
            console.log("name: " + attacker.name)
            console.log("life: " + attacker.life)
            console.log("weapon: " + attacker.weapon.name)
            console.log("weapon quality: " + attacker.weapon.quality)
            console.log("------------")
            console.log("Defender")
            console.log("name: " + defender.name)
            console.log("life: " + defender.life)
            console.log("weapon: " + defender.weapon.name)
            console.log("quality: " + defender.weapon.quality)

        }