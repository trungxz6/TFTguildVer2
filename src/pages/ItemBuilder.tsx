import React, { ReactNode, useState } from 'react'
import partners from '../assets/images/partners-bg.png'
import { Input, Popover, ConfigProvider } from 'antd'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { BaseItems, Origins, Classes, CombinedItems, Champions, Synergies } from '../data/Data'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import ItemPopup from '../components/ItemPopup'
import Base from 'antd/es/typography/Base'

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

const columns: ColumnsType<CombinedItem> = [
  {
    title: 'Recipe',
    dataIndex: 'recipe',
    width: 160,
    render: (recipe: BaseItem[]) => (
      <div className='flex items-center'>
        {recipe.map((item, index) => (
          <img
            className='h-[33px], w-[33px] mr-[10px] border border-solid border-[#17313a]'
            key={index}
            src={item.src}
          />
        ))}
      </div>
    ),
  },
  {
    title: 'Combines Into',
    dataIndex: ['src', 'name', 'desc'],
    render: (_: any, record: CombinedItem): ReactNode => (
      <div className='flex items-center'>
        <Popover
          placement='top'
          content={() => {
            return (
              <ItemPopup
                name={record.name}
                desc={record.desc}
                tier={record.tier}
                stat={record.stat || []}
                src={record.src}
                recipe={record.recipe}
              ></ItemPopup>
            )
          }}
          arrow={false}
          key={_}
        >
          <img
            className='cursor-pointer h-[33px], w-[33px] mr-[10px] border border-solid border-[#17313a]'
            src={record.src}
            alt={record.name}
          />
        </Popover>
        <div className='text-white'>{record.desc}</div>
      </div>
    ),
  },
  {
    title: 'Tier',
    dataIndex: 'tier',
    width: 100,
    render: (tier: string) => {
      let bgColor = ''
      if (tier === 'S') {
        bgColor = 'bg-[#FF7F7F]'
      } else if (tier === 'A') {
        bgColor = 'bg-[#FFBF7F]'
      } else if (tier === 'B') {
        bgColor = 'bg-[#FFDF7F]'
      } else if (tier === 'C') {
        bgColor = 'bg-[#FFFF7F]'
      } else if (tier === 'D') {
        bgColor = 'bg-[#BFFF7F]'
      } else if (tier === '?') {
        bgColor = 'bg-[#7FFF7F]'
      }
      return (
        <div className='flex justify-center items-center '>
          <span className={`${bgColor} h-[25px] w-[25px] text-[15px] rounded-[2.5px] text-center`}>{tier}</span>
        </div>
      )
    },
  },
]

const data: CombinedItem[] = CombinedItems

const ItemBuilder = () => {
  const [choosedBaseItem, setChoosedBaseItem] = useState<BaseItem | CombinedItem>(BaseItems[0])

  const handleChoosedItem = (newItem: BaseItem | CombinedItem) => {
    setChoosedBaseItem(newItem)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: 0,
            colorIcon: '#ff4d4f',
            colorIconHover: '#ffd666',
            colorBgContainer: 'transparent',
            colorText: 'var(--text-clr)',
            colorTextPlaceholder: 'var(--text-blur-clr)',
            colorBorder: 'var(--border-clr)',
            colorBorderBg: '#fe3939',
            colorBorderSecondary: '#fe3939',
            hoverBorderColor: 'none',
            boxShadow: 'none',
            activeBorderColor: 'var(--primary-clr)',
          },
          Table: {
            borderRadiusLG: 0,
            colorBgContainer: '#102531',
            headerSplitColor: 'transparent',
            headerColor: '#ffffff',
            // rowHoverBg: '#ffffff',
            // colorBorderSecondary: '#7FFF7F',
            // borderColor: '#7FFF7F',
          },
        },
      }}
    >
      <div className='mt-[100px]'>
        {/* ADS */}
        <img
          className=' mb-[50px] w-3/5 mx-auto flex'
          src={partners}
        />
        <div className='w-3/5 mx-auto flex mb-[50px] font-semibold'>
          {/* LEFT COLUMN */}
          <div className='w-1/4 flex flex-col items-center mr-[30px]'>
            <div className='w-full text-2xl'>Choose an Item</div>
            {/* SEARCH ITEM */}
            <Input
              className='my-[20px] h-[35px] border bg-transparent'
              placeholder='Search for an item...'
              prefix={<SearchOutlined className='mr-[10px]' />}
              suffix={<CloseOutlined />}
              allowClear={true}
            />
            {/* BASEITEM LIST */}
            <div className='w-full flex flex-col'>
              <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
                Base Items
              </div>
              <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
              <div className='w-full flex flex-wrap'>
                {BaseItems.map((baseItem, index) => {
                  return (
                    <img
                      onClick={() => handleChoosedItem(baseItem)}
                      className='w-[38px] h-[38px] m-[4px] border border-solid border-transparent hover:border-red-500'
                      key={index}
                      src={baseItem.src}
                      alt={baseItem.name}
                    />
                  )
                })}
              </div>
            </div>
            {/* COMBINED ITEM LIST */}
            <div className='w-full flex flex-col'>
              <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
                Combined Items
              </div>
              <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
              <div className='w-full flex flex-wrap'>
                {CombinedItems.map((combItem, index) => {
                  return (
                    <img
                      onClick={() => handleChoosedItem(combItem)}
                      className='w-[38px] h-[38px] m-[4px] border border-solid border-transparent hover:border-red-500'
                      key={index}
                      src={combItem.src}
                      alt={combItem.name}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className='w-3/4 pl-[30px] border-l-[#1f485f] border-solid border border-transparent flex flex-col '>
            <div className='w-full text-2xl'>TFT Items Cheat Sheet</div>
            {/* DIVIDER */}
            <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mt-[20px]'></div>
            <div className='flex items-center mt-[20px]'>
              <img
                className='w-[30px] h-[30px] mr-[15px]'
                src={choosedBaseItem.src}
                alt={choosedBaseItem.name}
              />
              <div>{choosedBaseItem.name}</div>
            </div>
            <Table
              className='mt-[20px]'
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default ItemBuilder