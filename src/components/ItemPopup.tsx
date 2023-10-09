// import React from 'react'
// import { BaseItems, Origins, Classes, CombinedItems, Champions } from '../data/Data'

// interface BaseItem {
//   name: string
//   desc: string
//   src: string
//   icon?: string
// }

// interface CombinedItem {
//   name: string
//   desc: string
//   tier: string
//   stat: {
//     icon: JSX.Element
//     stat: string
//   }[]
//   src: string
//   recipe: BaseItem[]
// }

// const ItemPopup: React.FC<CombinedItem> = (CombinedItem) => {
//   return (
//     <div className='bg-[#0D202B] border border-solid border-[#1f485f] text-[#fef6f3] font-semibold max-w-[500px]'>
//       {/* IMAGE AND STAT */}
//       <div className='flex items-center p-[10px]'>
//         <img
//           className='w-[40px]'
//           src={CombinedItem.src}
//           alt={CombinedItem.name}
//         />
//         <div className='ml-[10px]'>
//           <div className=''>{CombinedItem.name}</div>
//           <div className='flex'>
//             {CombinedItem.stat.map((stats, idx) => {
//               return (
//                 <div
//                   key={idx}
//                   className='flex items-center'
//                 >
//                   <div className='w-[15px] h-[15px] mr-[5px] self-center'>{stats.icon}</div>
//                   <div className='text-sm mr-[5px]'>{stats.stat}</div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//       {/* DIVIDER */}
//       <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
//       {/* DESCRIPTION */}
//       <div className='font-medium p-[10px]'>{CombinedItem.desc}</div>
//       {/* DIVIDER */}
//       <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
//       {/* RECIPE */}
//       <div className='flex items-center p-[10px]'>
//         <div className='text-[#88A0A7]'>Recipe:</div>
//         {CombinedItem.recipe.map((baseItem, idx) => {
//           return (
//             <img
//               key={idx}
//               className='w-[23px] h-[23px] border border-[#1f485f] border-solid ml-[10px]'
//               src={baseItem.src}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ItemPopup
