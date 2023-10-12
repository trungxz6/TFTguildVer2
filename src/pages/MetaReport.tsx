import React from 'react'
import { Menu, ConfigProvider, Select } from 'antd'
import type { MenuProps } from 'antd'
import SortBy from '../components/SortBy'
import MetaReportCard from '../components/MetaReportCard'

const Filter: React.FC = () => {
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

  return (
    <div className=''>
      <span className='text-2xl text-[var(--text-highlight-clr)] mb-4 block'>Filters</span>
      <Menu
        defaultSelectedKeys={['teamComps']}
        mode='inline'
        items={[getItem('Team Comps', 'teamComps'), getItem('Items', 'items'), getItem('Traits', 'traits')]}
      />
    </div>
  )
}

const MetaReport: React.FC = () => {
  const { Option } = Select

  const OptionsSet = [
    { value: '9.5', label: 'Set 9.5' },
    { value: '10', label: 'Set 10' },
    { value: '10.5', label: 'Set 10.5' },
  ]

  const OptionsRank = [
    { value: 'rank', label: 'Ranked' },
    { value: 'hyper', label: 'Hyper Roll' },
  ]

  const renderOption = (option: { value: string; label: string }) => {
    const { label } = option
    return <>{label}</>
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
        },
      }}
    >
      <div className='my-20 max-w-[1280px] mx-auto grid grid-cols-4 gap-6'>
        <Filter />
        <div
          className='col-span-3 px-4'
          style={{ borderLeft: '1px solid var(--border-clr)' }}
        >
          <div className='flex items-center mb-4'>
            <span className='text-2xl text-[var(--text-highlight-clr)] mr-6 block'>TFT Meta Team Comps Tier List</span>
            <Select
              defaultValue='9.5'
              className='w-[100px] mr-4'
            >
              {OptionsSet.map((option, index) => (
                <Option
                  key={index}
                  value={option.value}
                >
                  {renderOption(option)}
                </Option>
              ))}
            </Select>
            <Select
              defaultValue='rank'
              className='w-[100px]'
            >
              {OptionsRank.map((option, index) => (
                <Option
                  key={index}
                  value={option.value}
                >
                  {renderOption(option)}
                </Option>
              ))}
            </Select>
          </div>
          <SortBy type='metaReport' />
          <MetaReportCard />
          <MetaReportCard />
          <MetaReportCard />
          <MetaReportCard />
          <MetaReportCard />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default MetaReport
