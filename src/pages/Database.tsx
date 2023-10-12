import React, { ReactNode } from 'react'
import partners from '../assets/images/partners-bg.png'
import { RiSearchLine } from 'react-icons/ri'
import { ConfigProvider, Select, Input } from 'antd'
import DataBaseFilter from '../components/DatabaseFilter'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { BaseItems, Champions, CombinedItems } from '../data/Data'
import { useNavigate } from 'react-router-dom'

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
  stat?: {
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

const Database = () => {
  const navigate = useNavigate()

  // SETUP TABLE
  const columns: ColumnsType<ChampList> = [
    {
      title: 'Champion',
      dataIndex: ['alt', 'src'],
      width: 200,
      render: (_: any, values: { alt: string; src: string }) => (
        <div
          className='flex items-center cursor-pointer'
          onClick={() => navigate(`/champion?champion=${values.alt}`)}
        >
          <img
            className='cursor-pointer h-[38px], w-[38px] mr-[10px] border border-solid border-[#17313a]'
            src={values.src}
          />
          <div className='text-semibold opacity-50 text-white'>{values.alt}</div>
        </div>
      ),
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      width: 200,
      render: (values: Origin[]): ReactNode => (
        <div className='flex flex-col justify-center'>
          {values.map((item, idx) => {
            return (
              <div
                key={idx}
                className='flex'
              >
                <img
                  className=' h-[22px] w-[22px] mr-[10px]'
                  src={item.src}
                  alt={item.name}
                />
                <div className='text-white font-semibold'>{item.name}</div>
              </div>
            )
          })}
        </div>
      ),
    },
    {
      title: 'Class',
      dataIndex: 'class',
      width: 200,
      render: (record: Class[]): ReactNode => {
        return (
          <div className='flex flex-col justify-center'>
            {record.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='flex'
                >
                  <img
                    className='my-[2px] h-[22px] w-[22px] mr-[10px]'
                    src={item.src}
                    alt={item.name}
                  />
                  <div className='text-white font-semibold'>{item.name}</div>
                </div>
              )
            })}
          </div>
        )
      },
    },
    {
      title: 'Cost',
      dataIndex: 'stats',
      width: 100,
      render: (stats: { Cost: string }) => {
        return (
          <div className='flex items-center'>
            <img
              className='w-[15px] opacity-[0.5]'
              src='https://rerollcdn.com/ui/icon-gold.svg'
            />
            <span className={`text-white opacity-[0.5] h-[25px] w-[25px] text-[15px] rounded-[2.5px] text-center`}>
              {stats.Cost}
            </span>
          </div>
        )
      },
    },
  ]

  const { Option } = Select

  const Options = [
    { value: '9.5', label: 'Set 9.5' },
    { value: '10', label: 'Set 10' },
    { value: '10.5', label: 'Set 10.5' },
  ]

  const renderOption = (option: { value: string; label: string }) => {
    const { label } = option
    return <div className=''>{label}</div>
  }

  const suffix = <RiSearchLine className='text-[#666]' />

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorText: 'var(--btn-clr)',
            colorBorder: 'var(--border-clr)',
            colorBgContainer: 'var(--bg-highlight-clr)',
            colorBgElevated: 'var(--bg-clr)',
            colorTextPlaceholder: '#666',
            optionSelectedBg: 'var(--bg-highlight-clr)',
          },
          Input: {
            colorBgContainer: 'var(--bg-highlight-clr)',
            colorText: 'var(--text-clr)',
            colorTextPlaceholder: '#666',
            activeBorderColor: '#777',
            hoverBorderColor: '#777',
            colorBorder: 'var(--border-clr)',
          },
          Table: {
            borderRadiusLG: 0,
            colorBgContainer: '#102531',
            headerSplitColor: 'transparent',
            headerColor: '#ffffff',
            rowHoverBg: 'var(--bg-clr)',
            colorBorderSecondary: '#7FFF7F',
            borderColor: 'var(--border-clr)',
          },
        },
      }}
    >
      <div className='mt-20'>
        <img
          className=' mb-[50px] w-3/5 mx-auto flex object-cover h-[100px]'
          src={partners}
        />
      </div>
      <div className='max-w-[1280px] mx-auto my-20 grid grid-cols-4 gap-6'>
        <DataBaseFilter />
        <div
          className='w-full h-full col-span-3 px-4'
          style={{ borderLeft: '1px solid var(--border-clr)' }}
        >
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <span className='text-2xl text-[var(--text-highlight-clr)] mr-6 block'>TFT Champions Synergy List</span>
              <Select
                defaultValue='9.5'
                className='w-[100px]'
              >
                {Options.map((option, index) => (
                  <Option
                    key={index}
                    value={option.value}
                  >
                    {renderOption(option)}
                  </Option>
                ))}
              </Select>
            </div>
            <Input
              placeholder='Search Team, Champion or Trait ...'
              allowClear
              className='w-[280px]'
              suffix={suffix}
            />
          </div>
          <div>
            Find a list of all the Champions in Teamfight Tactics with their corresponding Origins, Classes, and cost.
          </div>
          <Table
            className='mt-[20px] border border-solid border-[var(--border-clr)]'
            columns={columns}
            dataSource={Champions}
            pagination={false}
          />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Database
