import AD from '../assets/icon/iconAd.svg'
import MR from '../assets/icon/iconMr.svg'
import AP from '../assets/icon/iconAP.svg'
import AR from '../assets/icon/iconAr.svg'
import AS from '../assets/icon/iconAs.svg'
import CR from '../assets/icon/iconCr.svg'
import HP from '../assets/icon/iconHp.svg'
import Mana from '../assets/icon/iconMana.svg'

interface BaseItem {
  name: string
  desc: string
  src: string
  stat?: {
    icon: JSX.Element
    stat: string
  }[]
}

interface CombinedItem {
  name: string
  desc: string
  tier: string
  stat?: string[]
  src: string
  recipe: BaseItem[]
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
    stat: [
      {
        icon: <img src={AD} />,
        stat: '+10',
      },
    ],
  },
  {
    name: 'Chain Vest',
    desc: '20 Armor.',
    src: 'https://rerollcdn.com/items/ChainVest.png',
    icon: 'https://rerollcdn.com/ui/icon-ar.svg',
    stat: [
      {
        icon: <img src={AR} />,
        stat: '+20',
      },
    ],
  },
  {
    name: `Giant's Belt`,
    desc: '150 Health.',
    src: 'https://rerollcdn.com/items/GiantsBelt.png',
    icon: 'https://rerollcdn.com/ui/icon-hp.svg',
    stat: [
      {
        icon: <img src={HP} />,
        stat: '+10',
      },
    ],
  },
  {
    name: 'Needlessly Large Rod',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png',
    icon: 'https://rerollcdn.com/ui/icon-ap.svg',
    stat: [
      {
        icon: <img src={AP} />,
        stat: '+10',
      },
    ],
  },
  {
    name: 'Negatron Cloak',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/NegatronCloak.png',
    icon: 'https://rerollcdn.com/ui/icon-mr.svg',
    stat: [
      {
        icon: <img src={MR} />,
        stat: '+10',
      },
    ],
  },
  {
    name: 'Recurve Bow',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/RecurveBow.png',
    icon: 'https://rerollcdn.com/ui/icon-as.svg',
    stat: [
      {
        icon: <img src={AS} />,
        stat: '+10',
      },
    ],
  },
  {
    name: 'Sparring Gloves',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/SparringGloves.png',
    icon: 'https://rerollcdn.com/ui/icon-cr.svg',
    stat: [
      {
        icon: <img src={CR} />,
        stat: '+10',
      },
    ],
  },
  {
    name: 'Spatula',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/Spatula.png',
  },
  {
    name: 'Tear of the Goddess',
    desc: '10 Attack damage.',
    src: 'https://rerollcdn.com/items/TearoftheGoddess.png',
    icon: 'https://rerollcdn.com/ui/icon-mana.svg',
    stat: [
      {
        icon: <img src={Mana} />,
        stat: '+10',
      },
    ],
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
  {
    name: 'Ionia',
    type: 'Origin',
    src: 'https://rerollcdn.com/icons/ionia.png',
    desc: 'Each Ionian has a unique bonus within their Ability. Every 4 seconds, a number of Ionians are enlightened to their spirit form, gaining 20 Mana and doubling stat bonuses for 4 seconds.',
    level: [
      { point: 3, desc: `100% Ionian bonus, 1 enlightened` },
      { point: 6, desc: `200% Ionian bonus, 2 enlightened` },
      { point: 9, desc: `380% Ionian bonus, 4 enlightened` },
    ],
  },
  {
    name: 'Empress',
    type: 'Origin',
    src: 'https://rerollcdn.com/icons/empress.png',
    desc: '',
    level: [
      {
        point: 1,
        desc: `When Bel'Veth kills an enemy, they leave behind Void Coral that she will consume. The first Coral increases her max Health by 50%, while further Coral heals her 20% maximum Health. When a Void Coral is consumed, she deals 10% maximum Health as magic damage to enemies within 2 hexes.`,
      },
    ],
  },
  {
    name: 'Void',
    type: 'Origin',
    src: 'https://rerollcdn.com/icons/void.png',
    desc: `Get a placeable void egg. At the start of combat, it hatches into an unspeakable horror and knocks up adjacent enemies. Each Void star level increases the horror's Health and Ability Power by 25%.`,
    level: [
      { point: 3, desc: `Void Remora` },
      { point: 6, desc: `Rift Herald` },
      { point: 9, desc: `Baron Nashor` },
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
  {
    name: 'Sorcerer',
    src: 'https://rerollcdn.com/icons/sorcerer.png',
    type: 'Class',
    desc: `Sorcerers gain bonus Ability Power. When an enemy dies after being damaged by a Sorcerer, they deal a percentage of that enemy's maximum Health to another enemy.`,
    level: [
      { point: 2, desc: '25 Ability Power; 7% max' },
      { point: 4, desc: '50 Ability Power; 10% max' },
      { point: 6, desc: '80 Ability Power; 12% max to 2 enemies' },
      { point: 8, desc: '120 Ability Power; 15% max to 2 enemies' },
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
        icon: <img src={AD} />,
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
    stat: [
      {
        icon: <img src={AD} />,
        stat: '+15%',
      },
      {
        icon: <img src={HP} />,
        stat: '+100',
      },
    ],
    src: 'https://rerollcdn.com/items/SteraksGage.png',
    recipe: [BaseItems[0], BaseItems[2]],
  },
  {
    name: `Titan's Resolve`,
    desc: 'Gain 2% Attack Damage and 2 Ability Power when attacking or taking damage, stacking up to 25 times. At full stacks, gain 20 Armor and 20 Magic Resist.',
    tier: 'A',
    stat: [
      {
        icon: <img src={AS} />,
        stat: '+10%',
      },
      {
        icon: <img src={AR} />,
        stat: '+20',
      },
    ],
    src: 'https://rerollcdn.com/items/TitansResolve.png',
    recipe: [BaseItems[1], BaseItems[5]],
  },
  {
    name: `Giant Slayer`,
    desc: 'Deal 25% more damage to enemies with more than 1600 maximum Health.',
    tier: 'A',
    stat: [
      {
        icon: <img src={AD} />,
        stat: '+30%',
      },
      {
        icon: <img src={AS} />,
        stat: '+10%',
      },
      {
        icon: <img src={AP} />,
        stat: '+20',
      },
    ],
    src: 'https://rerollcdn.com/items/GiantSlayer.png',
    recipe: [BaseItems[0], BaseItems[5]],
  },
  {
    name: `Rapid Firecannon`,
    desc: 'Deal 8% bonus damage.  Grant 1 bonus Attack Range.',
    tier: 'A',
    stat: [
      {
        icon: <img src={AS} />,
        stat: '+35%',
      },
    ],
    src: 'https://rerollcdn.com/items/RapidFirecannon.png',
    recipe: [BaseItems[5], BaseItems[5]],
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
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
    origin: [Origins[1]],
    class: [Classes[2]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Ahri.png`,
    alt: 'Ahri',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
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
    origin: [Origins[0]],
    class: [Classes[0]],
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
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Naafiri.png`,
    alt: 'Naafiri',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '2',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/MissFortune.png`,
    alt: 'Miss Fortune',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '3',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Ashe.png`,
    alt: 'Ashe',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '2',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Nautilus.png`,
    alt: 'Nautilus',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '3',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/JarvanIV.png`,
    alt: 'Jarvan IV',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '4',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Nilah.png`,
    alt: 'Nilah',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '4',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Sejuani.png`,
    alt: 'Sejuani',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '4',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Gangplank.png`,
    alt: 'Gangplank',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Sion.png`,
    alt: 'Sion',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Azir.png`,
    alt: 'Azir',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '4',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[2], Origins[3]],
    class: [],
    src: `https://rerollcdn.com/characters/Skin/9.5/Belveth.png`,
    alt: 'Belveth',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Cassiopeia.png`,
    alt: 'Cassiopeia',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '1',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
  {
    id: 4,
    origin: [Origins[0]],
    class: [Classes[0], Classes[1]],
    src: `https://rerollcdn.com/characters/Skin/9.5/Chogath.png`,
    alt: 'Chogath',
    tier: 'A',
    itemBuild: [CombinedItems[0], CombinedItems[1], CombinedItems[2]],
    stats: {
      Cost: '1',
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
      detail: `Transform for 12 seconds, gaining 10% Omnivamp. While transformed, attacks deal 80% Speedbonus + % Physical damage.`,
      other: [
        {
          name: 'Damage',
          param: '250% / 250% / 2500%',
        },
      ],
    },
  },
]

export const Synergies = [
  {
    name: Origins[0],
    champ: [Champions[0], Champions[1]],
  },
  {
    name: Classes[0],
    champ: [
      Champions[0],
      Champions[1],
      Champions[1],
      // 'Kayle', 'Mordekaiser', 'Qiyana', 'Quinn', 'Reksai'
    ],
  },
  {
    name: Classes[1],
    champ: [
      Champions[0],
      Champions[1],
      Champions[1],
      Champions[1],
      //  'Darius', 'Nasus', 'Nautilus', 'Sett', 'Warwick'
    ],
  },
]

export const TeamComp = [
  {
    tier: 'S',
    name: 'Bilgewater Vanquishers',
    playStyle: 'Fast 8',
    team: [
      {
        champ: Champions[3],
        star: false,
      },
      {
        champ: Champions[4],
        star: false,
      },
      {
        champ: Champions[5],
        star: false,
      },
      {
        champ: Champions[6],
        showitem: true,
        star: true,
      },
      {
        champ: Champions[7],
        star: false,
      },
      {
        champ: Champions[0],
        star: false,
      },
      {
        champ: Champions[8],
        star: false,
      },
      {
        champ: Champions[9],
        star: false,
      },
    ],
    early: [Champions[0], Champions[1], Champions[2], Champions[3], Champions[4]],
  },
]
