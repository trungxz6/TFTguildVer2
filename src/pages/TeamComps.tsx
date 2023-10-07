import React from 'react'
import type { MenuProps } from 'antd'
import { RiSearchLine } from 'react-icons/ri'
import { Menu, ConfigProvider, Select, Input } from 'antd'
import TeamCompsCard from '../components/TeamCompsCard'

const PlayStyleItem: React.FC<{ style: string }> = (props) => {
  return (
    <div className='w-full flex items-center'>
      <img
        className='w-[15px] mr-3 opacity-[0.5]'
        src='https://rerollcdn.com/ui/icon-gold.svg'
      />
      <span>{props.style}</span>
    </div>
  )
}

const OriginItem: React.FC<{ name: string }> = (props) => {
  return (
    <div className='w-full flex items-center'>
      <img
        className='w-[20px] mr-3 opacity-[0.5]'
        src={`https://rerollcdn.com/icons/${props.name}.png`}
      />
      <span>
        {String(props.name)
          .toLowerCase()
          .replace(/(^|\s)\S/g, (l) => l.toUpperCase())}
      </span>
    </div>
  )
}

const ClassItem: React.FC<{ class: string }> = (props) => {
  return (
    <div className='w-full flex items-center'>
      <img
        className='w-[20px] mr-3 opacity-[0.5]'
        src={`https://rerollcdn.com/icons/${props.class}.png`}
      />
      <span>
        {String(props.class)
          .toLowerCase()
          .replace(/(^|\s)\S/g, (l) => l.toUpperCase())}
      </span>
    </div>
  )
}

const SortBy = () => {
  return (
    <div className='flex items-center justify-between mb-4'>
      <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 flex items-center rounded'>
        Patch 13.9b
      </span>
      <div className='w-[32%] flex items-center justify-between'>
        <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
          <span className='text-[#bfff7f] text-[22px] mr-1'>▴</span>Tier Up
        </span>
        <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
          <span className='text-[#ff7f7f] text-[22px] mr-1'>▾</span>Tier Down
        </span>
        <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
          <span className='text-[#ffdf7f] text-[13px] font-bold mr-2'>N</span>New
        </span>
      </div>
    </div>
  )
}

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Play Style', 'style', null, [
    getItem(null, 'std', <PlayStyleItem style='Standard' />),
    getItem(null, 'hyper', <PlayStyleItem style='Hyper Roll' />),
    getItem(null, 'slow6', <PlayStyleItem style='Slow Roll (6)' />),
    getItem(null, 'slow7', <PlayStyleItem style='Slow Roll (7)' />),
    getItem(null, 'fast8', <PlayStyleItem style='Fast 8' />),
  ]),
  getItem('Origin', 'origin', null, [
    getItem(null, 'bilgewater', <OriginItem name='bilgewater' />),
    getItem(null, 'darkin', <OriginItem name='darkin' />),
    getItem(null, 'demacia', <OriginItem name='demacia' />),
    getItem(null, 'empress', <OriginItem name='empress' />),
    getItem(null, 'freljord', <OriginItem name='freljord' />),
  ]),
  getItem('Class', 'class', null, [
    getItem(null, 'bastion', <ClassItem class='bastion' />),
    getItem(null, 'bruiser', <ClassItem class='bruiser' />),
    getItem(null, 'challenger', <ClassItem class='challenger' />),
    getItem(null, 'gunner', <ClassItem class='gunner' />),
    getItem(null, 'invoker', <ClassItem class='invoker' />),
  ]),
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

const TeamComps: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: 'trasnparent',
            fontFamily: 'Spiegel_TT_Regular',
            itemColor: 'var(--text-clr)',
            itemHoverBg: 'var(--btn-clr)',
            itemSelectedBg: 'var(--primary-clr)',
            itemSelectedColor: 'var(--text-clr)',
          },
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
        },
      }}
    >
      <div className='max-w-[1280px] mx-auto my-20 grid grid-cols-4 gap-6'>
        <div className='w-full h-full'>
          <span className='text-2xl text-[var(--text-highlight-clr)] mb-4 block'>Filters</span>
          <Menu
            onClick={onClick}
            defaultOpenKeys={['style']}
            mode='inline'
            items={items}
          />
        </div>
        <div
          className='w-full h-full col-span-3 px-4'
          style={{ borderLeft: '1px solid var(--border-clr)' }}
        >
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <span className='text-2xl text-[var(--text-highlight-clr)] mr-6 block'>
                TFT Meta Team Comps Tier List
              </span>
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
          <SortBy />
          <div>
            <TeamCompsCard />
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default TeamComps
