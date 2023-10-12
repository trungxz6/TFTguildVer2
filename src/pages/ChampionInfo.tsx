import React from 'react'
import { Avatar, Popover, ConfigProvider } from 'antd'
import { Champions, Synergies } from '../data/Data'
import partners from '../assets/images/partners-bg.png'
import PopupHover from '../components/Popup'
import { useQueryString } from '../utils/utils'

const infoMenu = ['Health', 'Mana', 'Armor', 'MR', 'AbilityPower', 'DPS', 'Damage', 'AtkSpd', 'CritRate', 'Range']

const ChampData: React.FC = () => {
  const queryString = useQueryString()
  const champion = queryString.champion
  // console.log(champion)

  const AatroxData = Champions.find((item) => {
    return item.alt === champion
  })

  const trait = AatroxData && [...AatroxData.origin, ...AatroxData.class]

  console.log(trait)
  // GET SYNERGIES
  const FilterSynergiesChamp = Synergies.map((syn) => {
    const filteredChamp = syn.champ.filter((champ) => champ !== AatroxData)
    return { name: syn.name, champ: filteredChamp }
  })

  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            borderRadiusLG: 0,
            colorBgElevated: 'var(--bg-clr)',
            boxShadowSecondary: 'none',
          },
        },
      }}
    >
      <div className='my-20 '>
        {/* ADs */}
        <img
          className=' mb-[50px] w-3/5 mx-auto flex object-cover h-[100px]'
          src={partners}
        />
        <div className='w-3/5 mx-auto flex mb-[50px] font-semibold'>
          {/* LEFT COLUMN */}
          <div className='w-1/4 flex flex-col items-center mr-[30px]'>
            <Avatar
              className='border-none'
              size={120}
              src={AatroxData?.src}
            />
            <div className='my-[20px]'>TFT {AatroxData?.alt}</div>
            <div className='w-full flex flex-col'>
              <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
                Item Build
              </div>
              <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
              <div className='flex justify-center items-center bg-[#102531] border border-[#1f485f] border-solid p-[10px] mb-[20px] rounded-[3px]'>
                {AatroxData?.itemBuild.map((item, index) => {
                  return (
                    <Popover
                      placement='top'
                      content={() => {
                        return (
                          <PopupHover
                            PopupType='CombinedItem'
                            CombinedItem={item}
                          ></PopupHover>
                        )
                      }}
                      arrow={false}
                      key={index}
                    >
                      <img
                        className='cursor-pointer h-[40px] outline outline-transparent hover:outline-orange-500 hover:outline-[1px] m-[10px] rounded-none'
                        src={item.src}
                      />
                    </Popover>
                  )
                })}
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
                <span className='text-white'>{AatroxData?.stats.Cost}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Health:
                <span className='text-white'>{AatroxData?.stats.Health}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Armor:
                <span className='text-white'>{AatroxData?.stats.Armor}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                MR:
                <span className='text-white'>{AatroxData?.stats.MR}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                AbilityPower:
                <span className='text-white'>{AatroxData?.stats.AbilityPower}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                DPS:
                <span className='text-white'>{AatroxData?.stats.DPS}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Damage:
                <span className='text-white'>{AatroxData?.stats.Damage}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                AtkSpd:
                <span className='text-white'>{AatroxData?.stats.AtkSpd}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                CritRate:
                <span className='text-white'>{AatroxData?.stats.CritRate}</span>
              </div>
              <div className='text-[#88A0A7]  mb-[10px] flex flex-row'>
                Range:
                <span className='text-white'>{AatroxData?.stats.Range}</span>
              </div>

              {/* STATS */}
              {/* LOOP MENU */}
              {/* {infoMenu.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='text-[#88A0A7] mb-[10px] flex flex-row'
                  >
                    {item}: */}
              {/* LOOP MENU TO GET MENU DETAIL */}
              {/* {Object.entries(AatroxData?.stats?).map(([key, value]) => {
                      if (item === key) {
                        return (
                          <div className='text-[#88A0A7] mb-[10px] flex flex-row'>
                            <span className='ml-[5px] text-white'>{value}</span>
                          </div>
                        )
                      }
                    })}
                  </div>
                )
              })} */}
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
                  src={AatroxData?.abilities.img}
                />
              </div>
              <div className='ml-[30px] bg-transparent'>
                <div className='flex justify-between items-center bg-transparent'>
                  <div className='mb-[20px] bg-transparent'>
                    <div className='bg-transparent mb-[10px] '>{AatroxData?.abilities.name}</div>
                    <div className='bg-transparent text-[#88A0A7] '>{AatroxData?.abilities.type}</div>
                  </div>
                  <div className='flex items-center'>
                    <img
                      className='w-[16px] mr-[5px]'
                      src='https://rerollcdn.com/ui/icon-mana.svg'
                    />
                    <div>{AatroxData?.stats.Mana}</div>
                  </div>
                </div>
                <div className='bg-transparent text-[#88A0A7] mb-[20px]'>{AatroxData?.abilities.detail}</div>
                <div className='bg-transparent mb-[10px]'>
                  <span className='text-[#88A0A7]'>{AatroxData?.abilities.other[0].name}:</span>
                  <span className='ml-[5px]'>{AatroxData?.abilities.other[0].param}</span>
                </div>
              </div>
            </div>
            {/* ORIGIN AND CLASS */}
            {/* LOOP TRAIT */}
            {trait?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'
                >
                  <div className=' bg-transparent'>
                    {typeof item !== 'string' && (
                      <img
                        className='w-[32px] h-[32px] bg-transparent'
                        src={item.src}
                      />
                    )}
                  </div>
                  <div className='ml-[30px] bg-transparent'>
                    <div className='flex justify-between items-center bg-transparent'>
                      {typeof item !== 'string' && (
                        <div className='mb-[20px] bg-transparent'>
                          <div className='bg-transparent mb-[10px] '>{item.name}</div>
                          <div className='bg-transparent text-[#88A0A7] my-[5px]'>{item.type}</div>
                          <div className='bg-transparent text-[#88A0A7] my-[5px]'>{item.desc}</div>
                        </div>
                      )}
                    </div>
                    {/* LOOP LEVEL  */}
                    {typeof item !== 'string' &&
                      item.level.map((num, idx) => {
                        return (
                          <div
                            key={idx}
                            className='flex items-center mb-[10px]'
                          >
                            <div className='border rounded-full border-[#1F485F] border-solid text-[#88a0a7] h-[30px] w-[30px] text-sm justify-center flex items-center'>
                              {num.point}
                            </div>
                            <span className='bg-transparent text-white w-fit ml-[20px]'>{num.desc}</span>
                          </div>
                        )
                      })}
                  </div>
                </div>
              )
            })}
            {/* Synergies */}
            <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
              Synergies
            </div>
            <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
            {/* Synergies Champ */}
            {/* LOOP ICON TRAIT */}
            {trait?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='p-[20px] border border-solid border-[#1f485f] rounded-[3px] bg-[#102531] flex mb-[20px]'
                >
                  <div className='bg-transparent flex justify-start items-center'>
                    {typeof item !== 'string' && (
                      <img
                        onClick={() => console.log(item)}
                        className='w-[32px] h-[32px] mr-[20px] bg-transparent'
                        src={item.src}
                      />
                    )}
                    {FilterSynergiesChamp.map((he, idx) => {
                      if (item === he.name) {
                        return he.champ.map((synChamp) => {
                          return (
                            <Popover
                              placement='top'
                              content={() => {
                                return (
                                  <PopupHover
                                    PopupType='champion'
                                    SynergiesChamp={synChamp}
                                  ></PopupHover>
                                )
                              }}
                              arrow={false}
                              key={index}
                            >
                              <img
                                onClick={() => console.log(synChamp.abilities.other)}
                                key={idx}
                                className='w-[50px] h-[50px] my-[5px] mx-[10px] border border-yellow-400 border-solid bg-transparent hover:border-orange-500 transition ease duration-300'
                                src={synChamp.src}
                              />
                            </Popover>
                          )
                        })
                      }
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default ChampData
