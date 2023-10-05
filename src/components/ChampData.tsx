import React from 'react'
import { useEffect } from 'react'
import { Avatar, Popover, ConfigProvider } from 'antd'
import { BaseItems, Origins, Classes, CombinedItems, Champions } from '../data/Data'
import partners from '../assets/images/partners-bg.png'
import ItemPopup from './ItemPopup'

const content = <ItemPopup></ItemPopup>

const ChampData: React.FC = () => {
  const AatroxData = Champions[0]
  const AatroxOrigin = AatroxData.origin[0]

  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            zIndexPopup: 900,
          },
        },
      }}
    >
      <div>
        {/* ADs */}
        <img
          className='mt-[100px] mb-[50px] w-3/5 mx-auto flex'
          src={partners}
        />
        <div className='w-3/5 mx-auto flex mb-[50px] font-semibold'>
          {/* LEFT COLUMN */}
          <div className='w-1/4 flex flex-col items-center mr-[30px]'>
            <Avatar
              className='border-none'
              size={120}
              src={AatroxData.src}
            />
            <div className='my-[20px]'>TFT {AatroxData.alt}</div>
            <div className='w-full flex flex-col'>
              <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
                Item Build
              </div>
              <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
              <div className='flex justify-center items-center bg-[#102531] border border-[#1f485f] border-solid p-[10px] mb-[20px] rounded-[3px]'>
                <Popover
                  placement='top'
                  content={content}
                  arrow={false}
                >
                  <img
                    className='h-[40px] outline outline-transparent hover:outline-orange-500 hover:outline-[1px] m-[10px] rounded-none'
                    src={AatroxData.itemBuild[0].src}
                  />
                </Popover>
                <img
                  className='h-[40px] outline outline-transparent hover:outline-orange-500 hover:outline-[1px] m-[10px] rounded-none'
                  src={AatroxData.itemBuild[1].src}
                />
                <img
                  className='h-[40px] outline outline-transparent hover:outline-orange-500 hover:outline-[1px] m-[10px] rounded-none'
                  src={AatroxData.itemBuild[2].src}
                />
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
                Stat
              </div>
              <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Cost:
                <img
                  className='mx-[5px] w-[15px] opacity-[0.5]'
                  src='https://rerollcdn.com/ui/icon-gold.svg'
                />
                <span className='text-white'>{AatroxData.stats.Cost}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Health:
                <span className='ml-[5px] text-white'>{AatroxData.stats.Health}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Mana:
                <span className='ml-[5px] text-white'>{AatroxData.stats.Mana}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Armor:
                <span className='ml-[5px] text-white'>{AatroxData.stats.Armor}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                MR:
                <span className='ml-[5px] text-white'>{AatroxData.stats.MR}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                AbilityPower:
                <span className='ml-[5px] text-white'>{AatroxData.stats.AbilityPower}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                DPS:
                <span className='ml-[5px] text-white'>{AatroxData.stats.DPS}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Damage:
                <span className='ml-[5px] text-white'>{AatroxData.stats.Damage}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                AtkSpd:
                <span className='ml-[5px] text-white'>{AatroxData.stats.AtkSpd}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                CritRate:
                <span className='ml-[5px] text-white'>{AatroxData.stats.CritRate}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Range:
                <span className='ml-[5px] text-white'>{AatroxData.stats.Range}</span>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className='w-3/4 pl-[30px] border-l-[#1f485f] border-solid border border-transparent flex flex-col '>
            <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
              Abilities
            </div>
            <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
            {/* SKILL */}
            <div className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'>
              <div className=' bg-transparent'>
                <img
                  className='w-[60px] border-[#17313a] border-solid border p-[2px] bg-transparent'
                  src={AatroxData.abilities.img}
                />
              </div>
              <div className='ml-[30px] bg-transparent'>
                <div className='flex justify-between items-center bg-transparent'>
                  <div className='mb-[20px] bg-transparent'>
                    <div className='bg-transparent mb-[10px] '>{AatroxData.abilities.name}</div>
                    <div className='bg-transparent text-[#88A0A7] '>{AatroxData.abilities.type}</div>
                  </div>
                  <div className='flex items-center'>
                    <img
                      className='w-[16px] mr-[5px]'
                      src='https://rerollcdn.com/ui/icon-mana.svg'
                    />
                    <div>{AatroxData.stats.Mana}</div>
                  </div>
                </div>
                <div className='bg-transparent text-[#88A0A7] mb-[20px]'>{AatroxData.abilities.detail}</div>
                <div className='bg-transparent mb-[10px]'>
                  <span className='text-[#88A0A7]'>{AatroxData.abilities.other[0].name}:</span>
                  <span className='ml-[5px]'>{AatroxData.abilities.other[0].param}</span>
                </div>
              </div>
            </div>
            {/* ORIGIN AND CLASS */}
            {/* ORIGIN ITEM */}
            <div className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'>
              <div className=' bg-transparent'>
                <img
                  className='w-[32px] h-[32px] bg-transparent'
                  src={AatroxOrigin.src}
                />
              </div>
              <div className='ml-[30px] bg-transparent'>
                <div className='flex justify-between items-center bg-transparent'>
                  <div className='mb-[20px] bg-transparent'>
                    <div className='bg-transparent mb-[10px] '>{Origins[0].name}</div>
                    <div className='bg-transparent text-[#88A0A7] my-[5px]'>{Origins[0].type}</div>
                    <div className='bg-transparent text-[#88A0A7] my-[5px]'>{Origins[0].desc}</div>
                  </div>
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Origins[0].level[0].point}
                  </div>
                  {typeof AatroxData.origin[0] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.origin[0].level[0].desc}
                    </span>
                  )}
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Origins[0].level[1].point}
                  </div>
                  {typeof AatroxData.origin[0] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.origin[0].level[1].desc}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* CLASS ITEM */}
            <div className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'>
              <div className=' bg-transparent'>
                <img
                  className='w-[32px] h-[32px] bg-transparent'
                  src={AatroxData.class[0].src}
                />
              </div>
              <div className='ml-[30px] bg-transparent'>
                <div className='flex justify-between items-center bg-transparent'>
                  <div className='mb-[20px] bg-transparent'>
                    <div className='bg-transparent mb-[10px] '>{Classes[0].name}</div>
                    <div className='bg-transparent text-[#88A0A7] my-[5px]'>{Classes[0].type}</div>
                    <div className='bg-transparent text-[#88A0A7] my-[5px]'>{Classes[0].desc}</div>
                  </div>
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Classes[0].level[0].point}
                  </div>
                  {typeof AatroxData.class[0] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.class[0].level[0].desc}
                    </span>
                  )}
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Classes[0].level[1].point}
                  </div>
                  {typeof AatroxData.class[0] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.class[0].level[1].desc}
                    </span>
                  )}
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Classes[0].level[2].point}
                  </div>
                  {typeof AatroxData.class[0] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.class[0].level[2].desc}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'>
              <div className=' bg-transparent'>
                <img
                  className='w-[32px] h-[32px] bg-transparent'
                  src={AatroxData.class[1].src}
                />
              </div>
              <div className='ml-[30px] bg-transparent'>
                <div className='flex justify-between items-center bg-transparent'>
                  <div className='mb-[20px] bg-transparent'>
                    <div className='bg-transparent mb-[10px] '>{Classes[1].name}</div>
                    <div className='bg-transparent text-[#88A0A7] my-[5px]'>{Classes[1].type}</div>
                    <div className='bg-transparent text-[#88A0A7] my-[5px]'>{Classes[1].desc}</div>
                  </div>
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Classes[1].level[0].point}
                  </div>
                  {typeof AatroxData.class[1] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.class[1].level[0].desc}
                    </span>
                  )}
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Classes[1].level[1].point}
                  </div>
                  {typeof AatroxData.class[1] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.class[1].level[1].desc}
                    </span>
                  )}
                </div>
                <div className='flex items-center mb-[10px]'>
                  <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                    {Classes[1].level[2].point}
                  </div>
                  {typeof AatroxData.class[1] !== 'string' && (
                    <span className='bg-transparent text-white w-fit ml-[20px]'>
                      {AatroxData.class[1].level[2].desc}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Synergies */}
            <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
              Synergies
            </div>
            <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
            {/* Synergies Champ */}
            <div className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'>
              <div className='bg-transparent flex justify-start items-center'>
                <img
                  className='w-[32px] h-[32px] mr-[20px] bg-transparent'
                  src={AatroxData.origin[0].src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
              </div>
            </div>
            <div className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'>
              <div className='bg-transparent flex justify-start items-center'>
                <img
                  className='w-[32px] h-[32px] mr-[20px] bg-transparent'
                  src={AatroxData.class[0].src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
              </div>
            </div>
            <div className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'>
              <div className='bg-transparent flex justify-start items-center'>
                <img
                  className='w-[32px] h-[32px] mr-[20px] bg-transparent'
                  src={AatroxData.class[1].src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
                <img
                  className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                  src={AatroxData.src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default ChampData
