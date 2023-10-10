import React, { useState, useEffect } from 'react'
import { Champions } from '../data/Data'
import { Popover, ConfigProvider, Button } from 'antd'
import PopupHover from './Popup'
import { CloseOutlined } from '@ant-design/icons'

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

interface ChampList {
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

const checkCost = (cost: string) => {
  let borderColor = ''
  if (cost === '1') {
    return (borderColor = 'border-[#213042]')
  } else if (cost === '2') {
    return (borderColor = 'border-[#156831]')
  } else if (cost === '3') {
    return (borderColor = 'border-[#12407c]')
  } else if (cost === '4') {
    return (borderColor = 'border-[#893088]')
  } else if (cost === '5') {
    return (borderColor = 'border-[#b89d27]')
  }
}

interface choosedFilter {
  Filter: string[]
  onFilterChange: (newFilter: string) => void
}

const CostArr = ['1', '2', '3', '4', '5']
const OriginArr = ['bilgewater', 'darkin', 'demacia', 'freljord', 'empress']
const ClassArr = ['bastion', 'bruiser', 'challenger', 'gunner', 'invoker']

const ChampList: React.FC<choosedFilter> = ({ Filter, onFilterChange }) => {
  const [ChampFilterList, setChampFilterList] = useState<ChampList[]>([])

  // useEffect(() => {
  //   Filter.map((item) => {
  //     if (item === '1' || item === '2' || item === '3' || item === '4' || item === '5') {
  //       if (ChampFilterList.length === 0) {
  //         setChampFilterList(Champions.filter((champ) => champ.stats.Cost === item))
  //       } else {
  //         Champions.filter((champ) => {
  //           champ.stats.Cost === item
  //           setChampFilterList((prev) => {
  //             if (prev.includes(champ)) {
  //               return []
  //             } else {
  //               return [...prev, champ]
  //             }
  //           })
  //         })
  //       }
  //     }
  //   })
  // }, [Filter])

  useEffect(() => {
    const FilterCostArr = Filter.filter((item) => CostArr.includes(item))
    // console.log(FilterCostArr)
    Champions.filter((champ) => {
      FilterCostArr.map((price: string) => {
        if (champ.stats.Cost === price) {
          if ((ChampFilterList.length = 0)) {
            setChampFilterList((prev) => [...prev, champ])
          } else {
            setChampFilterList((prev) => {
              if (prev.includes(champ)) {
                return []
              } else if (prev.some((item) => item === champ)) {
                return [...prev.filter((item) => item !== champ)]
              } else {
                return [...prev, champ]
              }
            })
          }
        }
      })
    })
  }, [Filter])

  useEffect(() => {
    const FilterOriginArr = Filter.filter((item) => OriginArr.includes(item))
    // console.log(FilterCostArr)
    Champions.filter((champ) => {
      FilterOriginArr.map((price: string) => {
        if ((champ.origin[0].name = price)) {
          if ((ChampFilterList.length = 0)) {
            setChampFilterList((prev) => [...prev, champ])
          } else {
            setChampFilterList((prev) => {
              if (prev.includes(champ)) {
                return []
              } else if (prev.some((item) => item === champ)) {
                return [...prev.filter((item) => item !== champ)]
              } else {
                return [...prev, champ]
              }
            })
          }
        }
      })
    })
  }, [Filter])

  // FilterCostArr.map((price: string) => {
  //   if (champ.stats.Cost === price) {
  //     if ((ChampFilterList.length = 0)) {
  //       setChampFilterList((prev) => [...prev, champ])
  //     } else {
  //       setChampFilterList((prev) => {
  //         if (prev.includes(champ)) {
  //           return []
  //         } else {
  //           return [...prev, champ]
  //         }
  //       })
  //     }
  //   }
  // })

  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            borderRadiusLG: 0,
            colorBgElevated: 'var(--bg-clr)',
            boxShadowSecondary: 'none',
          },
          Button: {
            colorPrimaryBg: '#0BC4E2',
            primaryColor: '#fef6f3',
            colorPrimary: 'var(--primary-clr)',
          },
        },
      }}
    >
      <div className='flex flex-wrap'>
        {Filter.map((item, idx) => {
          return (
            <Button
              onClick={() => onFilterChange(item)}
              key={idx}
              color='#0BC4E2'
              type='primary'
              className='w-[24%] mb-[10px] rounded-[3px] h-[35px] mx-[4.5px] flex justify-between items-center'
            >
              <span>{item}</span>
              <CloseOutlined />
            </Button>
          )
        })}
      </div>
      <div className='flex flex-wrap'>
        {Filter.length > 0
          ? ChampFilterList.map((champCard, index) => {
              const borderColor = checkCost(champCard.stats.Cost)
              return (
                <div
                  key={index}
                  className='flex flex-col justify-start items-center py-[10px] px-[15px] h-[100px]'
                >
                  <div className='w-[80px] m-auto text-center'>
                    <Popover
                      placement='top'
                      content={() => {
                        return (
                          <PopupHover
                            origin={champCard.origin}
                            class={champCard.class}
                            src={champCard.src}
                            alt={champCard.alt}
                            tier={champCard.tier}
                            itemBuild={champCard.itemBuild}
                            stats={{
                              Cost: `${champCard.stats.Cost}`,
                              Health: `${champCard.stats.Health}`,
                              Mana: `${champCard.stats.Mana}`,
                              Armor: `${champCard.stats.Armor}`,
                              MR: `${champCard.stats.MR}`,
                              AbilityPower: `${champCard.stats.AbilityPower}`,
                              DPS: `${champCard.stats.DPS}`,
                              Damage: `${champCard.stats.Damage}`,
                              AtkSpd: `${champCard.stats.AtkSpd}`,
                              CritRate: `${champCard.stats.CritRate}`,
                              Range: `${champCard.stats.Range}`,
                            }}
                            abilities={{
                              img: `${champCard.abilities.img}`,
                              name: `${champCard.abilities.name}`,
                              type: `${champCard.abilities.type}`,
                              detail: `${champCard.abilities.detail}`,
                              other: champCard.abilities.other,
                            }}
                          ></PopupHover>
                        )
                      }}
                      arrow={false}
                      key={index}
                    >
                      <img
                        className={` h-[53px] w-[53px] border border-solid ${borderColor} hover:border-orange-400`}
                        src={champCard.src}
                        alt={champCard.alt}
                      />
                    </Popover>
                  </div>
                  <div className='w-[80px] justify-self-center self-center m-auto text-center'>{champCard.alt}</div>
                </div>
              )
            })
          : Champions.map((champCard, index) => {
              const borderColor = checkCost(champCard.stats.Cost)
              return (
                <div
                  key={index}
                  className='flex flex-col justify-start items-center py-[10px] px-[15px] h-[100px]'
                >
                  <div className='w-[80px] m-auto text-center'>
                    <Popover
                      placement='top'
                      content={() => {
                        return (
                          <PopupHover
                            origin={champCard.origin}
                            class={champCard.class}
                            src={champCard.src}
                            alt={champCard.alt}
                            tier={champCard.tier}
                            itemBuild={champCard.itemBuild}
                            stats={{
                              Cost: `${champCard.stats.Cost}`,
                              Health: `${champCard.stats.Health}`,
                              Mana: `${champCard.stats.Mana}`,
                              Armor: `${champCard.stats.Armor}`,
                              MR: `${champCard.stats.MR}`,
                              AbilityPower: `${champCard.stats.AbilityPower}`,
                              DPS: `${champCard.stats.DPS}`,
                              Damage: `${champCard.stats.Damage}`,
                              AtkSpd: `${champCard.stats.AtkSpd}`,
                              CritRate: `${champCard.stats.CritRate}`,
                              Range: `${champCard.stats.Range}`,
                            }}
                            abilities={{
                              img: `${champCard.abilities.img}`,
                              name: `${champCard.abilities.name}`,
                              type: `${champCard.abilities.type}`,
                              detail: `${champCard.abilities.detail}`,
                              other: champCard.abilities.other,
                            }}
                          ></PopupHover>
                        )
                      }}
                      arrow={false}
                      key={index}
                    >
                      <img
                        className={` h-[53px] w-[53px] border border-solid ${borderColor} hover:border-orange-400`}
                        src={champCard.src}
                        alt={champCard.alt}
                      />
                    </Popover>
                  </div>
                  <div className='w-[80px] justify-self-center self-center m-auto text-center'>{champCard.alt}</div>
                </div>
              )
            })}
      </div>
    </ConfigProvider>
  )
}

export default ChampList
