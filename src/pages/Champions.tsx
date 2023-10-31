import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { RiSearchLine } from 'react-icons/ri'
import { Menu, ConfigProvider, Select, Input, Button } from 'antd'
import ChampList from '../components/ChampList'

const CostChamp: React.FC<{ style: string }> = (props) => {
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
  getItem('Cost', 'costChamp', null, [
    getItem(null, '1', <CostChamp style='1' />),
    getItem(null, '2', <CostChamp style='2' />),
    getItem(null, '3', <CostChamp style='3' />),
    getItem(null, '4', <CostChamp style='4' />),
    getItem(null, '5', <CostChamp style='5' />),
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

const Champions: React.FC = () => {
  const [choosedFilter, setChoosedFilter] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState('')

  const handleSearchValue = (searchTerm: string) => {
    setSearchValue(searchTerm)
  }

  // console.log('click ', choosedFilter)

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e)
    if (choosedFilter.includes(e.key)) {
      setChoosedFilter((prevfilter) => prevfilter.filter((item) => item !== e.key))
    } else {
      setChoosedFilter((prevFilter) => [...prevFilter, e.key])
    }
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
          <div className='flex justify-between'>
            <span className='text-2xl text-[var(--text-highlight-clr)] mb-4 block'>Filters</span>
            <Button
              onClick={() => setChoosedFilter([])}
              className='bg-transparent text-[var(--primary-clr)] border-[var(--primary-clr)]'
            >
              Reset
            </Button>
          </div>
          <Menu
            selectedKeys={choosedFilter}
            onClick={onClick}
            defaultOpenKeys={['style']}
            mode='inline'
            items={items}
            multiple={true}
          />
        </div>
        <div
          className='w-full h-full col-span-3 px-4'
          style={{ borderLeft: '1px solid var(--border-clr)' }}
        >
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <span className='text-2xl text-[var(--text-highlight-clr)] mr-6 block'>TFT Champions List</span>
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
              onChange={(e) => {
                handleSearchValue(e.target.value)
              }}
              placeholder='Search by name, origin or class...'
              allowClear
              className='w-[280px]'
              suffix={<RiSearchLine className='text-[#666]' />}
            />
          </div>
          <ChampList
            setFilter={setChoosedFilter}
            Filter={choosedFilter}
            isSearch={searchValue}
          ></ChampList>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Champions
