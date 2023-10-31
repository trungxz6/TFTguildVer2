import React from 'react'
import { Champions } from '../data/Data'
import { Popover, ConfigProvider, Button } from 'antd'
import PopupHover from './Popup'
import { CloseOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

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
  let borderColor: string = ''
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
  setFilter: any
  isSearch: string
}

const CostArr = ['1', '2', '3', '4', '5']
const OriginArr = ['bilgewater', 'darkin', 'demacia', 'freljord', 'empress']
const ClassArr = ['bastion', 'bruiser', 'challenger', 'gunner', 'invoker']

const ChampList: React.FC<choosedFilter> = ({ Filter, setFilter, isSearch }) => {
  const navigate = useNavigate()

  const filteredChampions = Champions.filter((champion) => {
    if (Filter.length === 0) {
      return champion.alt.toLowerCase().includes(isSearch.toLowerCase())
    } else {
      const FilterCostArr = Filter.filter((item) => CostArr.includes(item))
      const FilterOriginArr = Filter.filter((item) => OriginArr.includes(item))
      const FilterClassArr = Filter.filter((item) => ClassArr.includes(item))

      const isCostMatched = FilterCostArr.length === 0 || FilterCostArr.includes(champion.stats.Cost)

      const isOriginMatched =
        FilterOriginArr.length === 0 ||
        FilterOriginArr.some((origins) =>
          champion.origin.some((championOrigin) => championOrigin.name.toLocaleLowerCase() === origins),
        )

      const isClassMatched =
        FilterClassArr.length === 0 ||
        FilterClassArr.some((classes) =>
          champion.class.some((championOrigin) => championOrigin.name.toLocaleLowerCase() === classes),
        )

      const isNameMatched = champion.alt.toLowerCase().includes(isSearch.toLowerCase())

      return isCostMatched && isOriginMatched && isClassMatched && isNameMatched
    }
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
              onClick={() => setFilter(Filter.filter((f) => f !== item))}
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
        {filteredChampions.map((champCard, index) => {
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
                        PopupType='champion'
                        SynergiesChamp={champCard}
                      />
                    )
                  }}
                  arrow={false}
                  key={index}
                >
                  <img
                    // onClick={() => navigate(`/champion?champion=${champCard.alt}`)}
                    onClick={() => navigate(`/champions/${champCard.alt}`)}
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
