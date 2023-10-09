import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { ConfigProvider, Select, Input } from 'antd'
import Filter from '../components/Filter'
import SortBy from '../components/SortBy'
import TeamCompsCard from '../components/TeamCompsCard'

const TeamComps: React.FC = () => {
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
        },
      }}
    >
      <div className='max-w-[1280px] mx-auto my-20 grid grid-cols-4 gap-6'>
        <Filter />
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
          <SortBy type='teamComps' />
          <>
            <TeamCompsCard />
            <TeamCompsCard />
            <TeamCompsCard />
            <TeamCompsCard />
            <TeamCompsCard />
          </>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default TeamComps
