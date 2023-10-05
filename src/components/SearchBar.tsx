import React from 'react'
import { Input, Select, ConfigProvider } from 'antd'
import { RiSearchLine } from 'react-icons/ri'

const SearchBar: React.FC = () => {
  const { Option } = Select

  const selectBefore = (
    <Select
      defaultValue='vn'
      className='w-[80px]'
    >
      <Option value='vn'>VN</Option>
      <Option value='ru'>RU</Option>
      <Option value='jp'>JP</Option>
    </Select>
  )

  const suffix = <RiSearchLine className='text-[#666]' />

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBgContainer: 'var(--bg-highlight-clr)',
            optionSelectedColor: 'var(--btn-clr)',
            colorTextPlaceholder: '#666',
            colorText: 'var(--btn-clr)',
            colorBgElevated: 'var(--bg-clr)',
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
          Button: {
            colorBgContainer: 'var(--bg-highlight-clr)',
            colorBorder: 'var(--border-clr)',
            colorText: '#666',
            colorTextBase: 'var(--text-clr)',
            colorTextPlaceholder: '#666',
          },
        },
      }}
    >
      <Input
        addonBefore={selectBefore}
        placeholder='Search Summoner Name'
        allowClear
        className='w-[420px]'
        suffix={suffix}
      />
    </ConfigProvider>
  )
}

export default SearchBar
