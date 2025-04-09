import Character from "./Character.mjs";
import PreciousStone from "./PreciousStone.mjs";
import Weapon from "./Weapon.mjs";
import {preciousData} from "./Data/PreciousStoneData.mjs";
import { weaponData } from "./Data/WeaponData.mjs";
// import { characterData } from "./Data/characterData.mjs";

const stoneArray = []
const weaponsArray = []

preciousStoneCreate(stoneArray);

createWeapons(weaponsArray)
console.log(weaponsArray)



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
