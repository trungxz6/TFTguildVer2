import React from 'react'
import { BaseItems, Origins, Classes, CombinedItems, Champions } from '../data/Data'

interface BaseItem {
  name: string
  desc: string
  src: string
  icon?: string
}

interface CombinedItem {
  name: string
  desc: string
  tier: string
  stat: {
    icon: JSX.Element
    stat: string
  }[]
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

interface SynergiesChamp {
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

const PopupHover: React.FC<SynergiesChamp | CombinedItem> = (Popup) => {
  if ('alt' in Popup) {
    return (
      <div className='border border-solid border-[#1f485f] text-[#fef6f3] font-semibold max-w-[255px]'>
        {/* TOP ITEM */}
        <div className='flex'>
          <div className='flex flex-col items-center justify-center'>
            <img
              onClick={() => console.log(Popup)}
              className='w-[50px] mt-[10px] mx-[10px] mb-[5px]'
              src={Popup.src}
              alt={Popup.alt}
            />
            <div className='mb-[10px] mx-[10px] mt-[5px]'>{Popup.alt}</div>
          </div>
          {/* DIVIDER */}
          <div className=' border-solid border border-l-[#1f485f] border-y-transparent border-r-transparent'></div>
          <div className='flex flex-col justify-center'>
            {Popup.origin.map((he, index) => {
              return (
                <div
                  key={index}
                  className='flex py-[5px] px-[15px]'
                >
                  <img
                    src={he.src}
                    className='w-[20px] h-[20px] mr-[5px]'
                    alt={he.name}
                  />
                  <div>{he.name}</div>
                </div>
              )
            })}
            {Popup.class.map((he, index) => {
              return (
                <div
                  key={index}
                  className='flex py-[5px] px-[15px]'
                >
                  <img
                    src={he.src}
                    className='w-[20px] h-[20px] mr-[5px]'
                    alt={he.name}
                  />
                  <div>{he.name}</div>
                </div>
              )
            })}
          </div>
          {/* DIVIDER */}
          <div className=' border-solid border border-l-[#1f485f] border-y-transparent border-r-transparent'></div>
          <div className='my-[5px] mx-[10px] flex justify-center items-center'>
            <img
              className='mr-[5px] w-[15px] opacity-[0.5]'
              src='https://rerollcdn.com/ui/icon-gold.svg'
              alt='coin'
            />
            <div>{Popup.stats.Cost}</div>
          </div>
        </div>
        {/* DIVIDER */}
        <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
        {/* BOT ITEM */}
        <div className='flex items-center m-[10px]'>
          <div>items:</div>
          {Popup.itemBuild.map((item, idx) => {
            return (
              <img
                className='h-[25px] w-[25px] ml-[10px]'
                key={idx}
                src={item.src}
                alt={item.name}
              />
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className='bg-[#0D202B] border border-solid border-[#1f485f] text-[#fef6f3] font-semibold max-w-[500px]'>
        {/* IMAGE AND STAT */}
        <div className='flex items-center p-[10px]'>
          <img
            className='w-[40px]'
            src={Popup.src}
            alt={Popup.name}
          />
          <div className='ml-[10px]'>
            <div className=''>{Popup.name}</div>
            <div className='flex'>
              {Popup.stat.map((stats, idx) => {
                return (
                  <div
                    key={idx}
                    className='flex items-center'
                  >
                    <div className='w-[15px] h-[15px] mr-[5px] self-center'>{stats.icon}</div>
                    <div className='text-sm mr-[5px]'>{stats.stat}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* DIVIDER */}
        <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
        {/* DESCRIPTION */}
        <div className='font-medium p-[10px]'>{Popup.desc}</div>
        {/* DIVIDER */}
        <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
        {/* RECIPE */}
        <div className='flex items-center p-[10px]'>
          <div className='text-[#88A0A7]'>Recipe:</div>
          {Popup.recipe.map((baseItem, idx) => {
            return (
              <img
                key={idx}
                className='w-[23px] h-[23px] border border-[#1f485f] border-solid ml-[10px]'
                src={baseItem.src}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default PopupHover

// const ChampPopup: React.FC<SynergiesChamp> = (SynergiesChamp) => {
//   return (
//     <div className='border border-solid border-[#1f485f] text-[#fef6f3] font-semibold max-w-[255px]'>
//       {/* TOP ITEM */}
//       <div className='flex'>
//         <div className='flex flex-col items-center justify-center'>
//           <img
//             onClick={() => console.log(SynergiesChamp)}
//             className='w-[50px] mt-[10px] mx-[10px] mb-[5px]'
//             src={SynergiesChamp.src}
//             alt={SynergiesChamp.alt}
//           />
//           <div className='mb-[10px] mx-[10px] mt-[5px]'>{SynergiesChamp.alt}</div>
//         </div>
//         {/* DIVIDER */}
//         <div className=' border-solid border border-l-[#1f485f] border-y-transparent border-r-transparent'></div>
//         <div className='flex flex-col justify-center'>
//           {SynergiesChamp.origin.map((he, index) => {
//             return (
//               <div
//                 key={index}
//                 className='flex py-[5px] px-[15px]'
//               >
//                 <img
//                   src={he.src}
//                   className='w-[20px] h-[20px] mr-[5px]'
//                   alt={he.name}
//                 />
//                 <div>{he.name}</div>
//               </div>
//             )
//           })}
//           {SynergiesChamp.class.map((he, index) => {
//             return (
//               <div
//                 key={index}
//                 className='flex py-[5px] px-[15px]'
//               >
//                 <img
//                   src={he.src}
//                   className='w-[20px] h-[20px] mr-[5px]'
//                   alt={he.name}
//                 />
//                 <div>{he.name}</div>
//               </div>
//             )
//           })}
//         </div>
//         {/* DIVIDER */}
//         <div className=' border-solid border border-l-[#1f485f] border-y-transparent border-r-transparent'></div>
//         <div className='my-[5px] mx-[10px] flex justify-center items-center'>
//           <img
//             className='mr-[5px] w-[15px] opacity-[0.5]'
//             src='https://rerollcdn.com/ui/icon-gold.svg'
//             alt='coin'
//           />
//           <div>{SynergiesChamp.stats.Cost}</div>
//         </div>
//       </div>
//       {/* DIVIDER */}
//       <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
//       {/* BOT ITEM */}
//       <div className='flex items-center m-[10px]'>
//         <div>items:</div>
//         {SynergiesChamp.itemBuild.map((item, idx) => {
//           return (
//             <img
//               className='h-[25px] w-[25px] ml-[10px]'
//               key={idx}
//               src={item.src}
//               alt={item.name}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ChampPopup
