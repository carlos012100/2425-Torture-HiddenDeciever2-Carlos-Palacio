import Character from "./Character.mjs";
import PreciousStone from "./PreciousStone.mjs";
import Weapon from "./Weapon.mjs";
import {preciousData} from "./Data/PreciousStoneData.mjs";
import { weaponData } from "./Data/WeaponData.mjs";
// import { characterData } from "./Data/characterData.mjs";

const stoneArray = []
preciousStoneCreate(stoneArray);


const bow = weaponData[0]
const blade = weaponData[1]
const wand = weaponData[2]
const longbow = weaponData[3]
const sword = weaponData [4]
const soulwand = weaponData[5]
const phonixBow = weaponData[6]
const crystalSword = weaponData[7]
const frostwand = weaponData[8]
const hunterBow = weaponData[9]


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
function createWeapons() {

    

    const bow = new Weapon(bow.name, bow.description, bow.numDieDamage, bow.type, bow.quality);
    const blade = new Weapon(blade.name, blade,description,blade.numDieDamage,blade.type, blade.quality)
    const wand = new Weapon(wand.name, wand.description, wand.numDieDamage, wand.type, wand.quality)
    const longbow = new Weapon(longbow.name, longbow.description, longbow.numDieDamage, longbow.type, longbow.quality)
    const sword = new Weapon(sword.name, sword.description, sword.numDieDamage, sword.type, sword.quality)
    const soulwand = new Weapon(soulwand.name, soulwand.description, soulwand.numDieDamage, soulwand.type. soulwand.quality)
    const phonixBow = new Weapon(phonixBow.name, phonixBow.description, phonixBow.numDieDamage, phonixBow.type, phonixBow.quality)
    const crystalSword = new Weapon(crystalSword.name, crystalSword.description, crystalSword.numDieDamage, crystalSword.type, crystalSword.quality)
    const frostwand = new Weapon(frostwand.name, frostwand.description, frostwand.numDieDamage, frostwand.type, frostwand.quality)
    const hunterBow = new Weapon(hunterBow.name, hunterBow.description, hunterBow.numDieDamage, hunterBow.type, hunterBow.quality)


}
