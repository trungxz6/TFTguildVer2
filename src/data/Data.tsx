import Damage from '../assets/icon/iconAd.svg'
import MR from '../assets/icon/iconMr.svg'

interface BaseItem {
  name: string
  desc: string
  src: string
  icon?: string
  into: BaseItem[]
}

interface Origin {
  name: string
  type: string
  src: string
  desc: string
  level: {
    point: number
    desc: string
  }[]
}

interface Class {
  name: string
  src: string
  desc: string
  level: {
    point: number
    desc: string
  }[]
}

interface CombinedItem {
  name: string
  desc: string
  tier: string
  stat: string[]
  src: string
  recipe: BaseItem[]
}

interface Champions {
  id: number
  origin: Origin[]
  class: Class[]
  src: string
  alt: string
  tier: string
  itemBuild: CombinedItem[]
  stats: {
    Cost: string
    Health: string
    Mana: string
    Armor: string
    MR: string
    AbilityPower: string
    DPS: string
    Damage: string
    AtkSpd: string
    CritRate: string
    Range: string
  }
  abilities: {
    img: string
    name: string
    type: string
    detail: string
    other: {
      name: string
      param: string
    }[]
  }
}

export const BaseItems = [
  {
    name: 'B.F. Sword',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/BFSword.png',
    icon: 'https://rerollcdn.com/ui/icon-ad.svg',
    into: [],
  },
  {
    name: 'Chain Vest',
    desc: '20 Armor.',
    src: 'https://rerollcdn.com/items/ChainVest.png',
    icon: 'https://rerollcdn.com/ui/icon-ar.svg',
    into: [],
  },
  {
    name: `Giant's Belt`,
    desc: '150 Health.',
    src: 'https://rerollcdn.com/items/GiantsBelt.png',
    icon: 'https://rerollcdn.com/ui/icon-hp.svg',
    into: [],
  },
  {
    name: 'Needlessly Large Rod',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png',
    icon: 'https://rerollcdn.com/ui/icon-ap.svg',
    into: [],
  },
  {
    name: 'Negatron Cloak',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/NegatronCloak.png',
    icon: 'https://rerollcdn.com/ui/icon-mr.svg',
    into: [],
  },
  {
    name: 'Recurve Bow',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/RecurveBow.png',
    icon: 'https://rerollcdn.com/ui/icon-as.svg',
    into: [],
  },
  {
    name: 'Sparring Gloves',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/SparringGloves.png',
    icon: 'https://rerollcdn.com/ui/icon-cr.svg',
    into: [],
  },
  {
    name: 'Spatula',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/Spatula.png',
    into: [],
  },
  {
    name: 'Tear of the Goddess',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/TearoftheGoddess.png',
    icon: 'https://rerollcdn.com/ui/icon-mana.svg',
    into: [],
  },
]

export const Origins = [
  {
    name: 'Darkin',
    type: 'Origin',
    src: 'https://rerollcdn.com/icons/darkin.png',
    desc: '',
    level: [
      {
        point: 1,
        desc: `Darkin are possessed by a weapon. When they die, the weapon possesses the nearest ally champion, granting them the weapon's power.`,
      },
      { point: 2, desc: `Weapon powers become 50% stronger` },
    ],
  },
]

export const Classes = [
  {
    name: 'Juggernaut',
    src: 'https://rerollcdn.com/icons/juggernaut.png',
    type: 'Class',
    desc: 'Juggernaut champions take less damage as their Health decreases.',
    level: [
      { point: 2, desc: '15% to 25% damage reduction' },
      { point: 4, desc: '20% to 35% damage reduction' },
      { point: 6, desc: '35% to 50% damage reduction' },
    ],
  },
  {
    name: 'Slayer',
    src: 'https://rerollcdn.com/icons/slayer.png',
    type: 'Class',
    desc: 'Slayers gain 12% Omnivamp. Slayers deal bonus damage, doubled against units below 66% Health.',
    level: [
      { point: 2, desc: '6% bonus damage' },
      { point: 4, desc: '20% bonus damage' },
      { point: 6, desc: '40% bonus damage' },
    ],
  },
]

export const CombinedItems = [
  {
    name: 'Bloodthirster',
    desc: `Gain 20% Omnivamp. Once per combat at 40% Health, gain a 25% maximum Health Shield that lasts up to 5 seconds. Omnivamp: heal for some of damage dealt`,
    tier: 'S',
    stat: [
      {
        icon: <img src={Damage} />,
        stat: '+20%',
      },
      {
        icon: <img src={MR} />,
        stat: '20%',
      },
    ],
    src: 'https://rerollcdn.com/items/Bloodthirster.png',
    recipe: [BaseItems[0], BaseItems[4]],
  },
  {
    name: `Sterak's Gage`,
    desc: 'Once per combat at 60% Health, gain 20% max Health and 35% Attack Damage.',
    tier: 'A',
    src: 'https://rerollcdn.com/items/SteraksGage.png',
    recipe: [BaseItems[0], BaseItems[2]],
  },
  {
    name: `Titan's Resolve`,
    desc: 'Gain 2% Attack Damage and 2 Ability Power when attacking or taking damage, stacking up to 25 times. At full stacks, gain 20 Armor and 20 Magic Resist.',
    tier: 'A',
    src: 'https://rerollcdn.com/items/TitansResolve.png',
    recipe: [BaseItems[1], BaseItems[5]],
  },
]

export const Champions = [
  {
    id: 1,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Aatrox.png`,
    alt: 'Aatrox',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '5',
      Health: '900 / 1620 / 2916',
      Mana: '0 / 60',
      Armor: '60',
      MR: '60',
      AbilityPower: '100',
      DPS: '64 / 115 / 207',
      Damage: '80 / 144 / 259',
      AtkSpd: '0.8',
      CritRate: '25%',
      Range: '1',
    },
    abilities: {
      img: 'https://rerollcdn.com/abilities/9.5/aatrox-world-ender.png',
      name: 'World Ender',
      type: 'Active',
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % ${(
        <span>
          <img src={Damage} />
        </span>
      )} Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 2,
    origin: ['Ionia'],
    class: ['Sorcerer'],
    src: `https://rerollcdn.com/characters/Skin/9.5/Ahri.png`,
    alt: 'Ahri',
    tier: 'A',
    itemBuild: [],
    stats: {
      Cost: '5',
      Health: '850 / 1530 / 2754',
      Mana: '0 / 50',
      Armor: '40',
      MR: '40',
      AbilityPower: '100',
      DPS: '43 / 77 / 138',
      Damage: '50 / 90 / 162',
      AtkSpd: '0.85',
      CritRate: '25%',
      Range: '4',
    },
    abilities: {
      img: 'https://rerollcdn.com/abilities/9.5/ahri-essence-theft.png',
      name: 'Essence Theft',
      type: 'Active',
      detail:
        'Steal essence from enemies around the current target, dealing magic damage and 20% Mana Reaving them. Every number of casts, unleash a wave that deals magic damage to all enemies hit. This deals 33% more damage to enemies whose essence has been stolen. Ionia Bonus: +3 Mana per second. Mana Reave: Increase max Mana until the next cast',
      other: [
        {
          name: 'Essence Steal',
          param: '90% / 135% / 1000%',
        },
        {
          name: 'Wave Damage',
          param: '230% / 350% / 1888%',
        },
        {
          name: 'Casts Before Wave',
          param: '2 / 2 / 0',
        },
      ],
    },
  },
  {
    id: 3,
    origin: ['Targon'],
    class: ['Gunner'],
    src: `https://rerollcdn.com/characters/Skin/9.5/Aphelios.png`,
    alt: 'Aphelios',
    tier: 'A',
    itemBuild: [],
    stats: {
      Cost: '4',
      Health: '750 / 1350 / 2430',
      Mana: '50 / 100',
      Armor: '25',
      MR: '25',
      AbilityPower: '100',
      DPS: '45 / 81 / 146',
      Damage: '60 / 108 / 194',
      AtkSpd: '0.75',
      CritRate: '25%',
      Range: '4',
    },
    abilities: {
      img: 'https://rerollcdn.com/abilities/9.5/aphelios-moonlight-vigil.png',
      name: 'Moonlight Vigil',
      type: 'Active',
      detail:
        'Fire a moon blast at the largest group of enemies that deals physical damage to enemies within 2 hexes. For 7 seconds, equip 3 Chakram, plus 1 more for each enemy hit by the blast. Attacks deal bonus physical damage for each Chakram equipped. Aphelios heals for 75%Ability Powerof damage dealt by Chakrams.',
      other: [
        {
          name: 'Moon Blast',
          param: '240% / 240% / 750%',
        },
        {
          name: 'Chakram Damage',
          param: '7% / 7% / 15%',
        },
        {
          name: 'Max Chakrams',
          param: '10 / 12 / 20',
        },
      ],
    },
  },
]
