import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { Champions, CombinedItems } from '../data/Data'
import { Button, ConfigProvider, Input, Select } from 'antd'
import ChessBoard from '../components/ChessBoard'
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ChampionType, ItemType } from '../constants/constants'

const Champion: React.FC<{ src: string }> = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ChampionType.CHAMPION,
    item: {
      src: props.src,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <img
      ref={drag}
      className='w-[48px] border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500 mr-6'
      src={props.src}
      alt=''
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    />
  )
}

const Item: React.FC<{ src: string }> = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.ITEM,
    item: {
      src: props.src,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <img
      ref={drag}
      className='w-[48px] border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500 mr-6'
      src={props.src}
      alt='img'
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    />
  )
}

const TeamBuilder: React.FC = () => {
  const { Option } = Select

  const Options = [
    { value: '9.5', label: 'Set 9.5' },
    { value: '10', label: 'Set 10' },
    { value: '10.5', label: 'Set 10.5' },
  ]
  const renderOption = (option: { value: string; label: string }) => {
    const { label } = option
    return <div className='mr-2'>{label}</div>
  }
  const prefix = <RiSearchLine className='text-[#666] mr-2' />
  const suffix = (
    <div className='flex items-center '>
      <span className='mx-2 mr-3 text-[#868F95] font-bold hover:text-[var(--text-clr)] hover:cursor-pointer'>
        A - Z
      </span>
      <div
        className='h-[22px] px-2 pl-4 flex items-center hover:cursor-pointer'
        style={{ borderLeft: '1px solid var(--border-clr)' }}
      >
        <img
          className='w-[15px] opacity-[0.5] hover:opacity-[1]'
          src='https://rerollcdn.com/ui/icon-gold.svg'
        />
      </div>
    </div>
  )

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
            borderRadius: 0,
          },
        },
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <div className='max-w-[1280px] mx-auto my-20 '>
          <div className='flex items-center justify-between mb-10'>
            <div className='flex items-center'>
              <span className='text-2xl text-[var(--text-highlight-clr)] mr-6 block'>TFT Team Builder</span>
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
            <Button
              type='primary'
              className='bg-[#0BC4E2] text-[var(--text-clr)]'
            >
              Share
            </Button>
          </div>
          <div className='h-[400px] flex justify-center'>
            <ChessBoard size='drop' />
          </div>
          <div className='grid grid-cols-2 gap-6 mt-20'>
            <div>
              <Input
                placeholder='Search Name, Trait ...'
                allowClear
                className='w-full'
                prefix={prefix}
                addonAfter={suffix}
              />
              <div
                className='bg-[var(--bg-highlight-clr)] p-4'
                style={{ border: '1px solid var(--border-clr)', borderTop: 0 }}
              >
                {Champions.map((champ) => (
                  <Champion src={champ.src} />
                ))}
              </div>
            </div>
            <div>
              <Input
                placeholder='Search Name ...'
                allowClear
                className='w-full'
                prefix={prefix}
              />
              <div
                className='bg-[var(--bg-highlight-clr)] p-4'
                style={{ border: '1px solid var(--border-clr)' }}
              >
                {CombinedItems.map((item) => (
                  <Item src={item.src} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DndProvider>
    </ConfigProvider>
  )
}

export default TeamBuilder
