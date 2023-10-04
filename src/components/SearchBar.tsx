import React from 'react'
import { Input, Select, Space, ConfigProvider } from 'antd'

const { Search } = Input

const SearchBar: React.FC = () => {
  const { Option } = Select

  const selectBefore = (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBorder: 'none',
            colorBgContainer: 'var(--btn-clr)',
          },
        },
      }}
    >
      <Select defaultValue='vn'>
        <Option value='vn'>VN</Option>
        <Option value='ru'>RU</Option>
        <Option value='jp'>JP</Option>
      </Select>
    </ConfigProvider>
  )

  return (
    <Space direction='vertical'>
      <Search
        addonBefore={selectBefore}
        placeholder='Search Summoner Name'
        allowClear
        className='w-[420px]'
      />
    </Space>
  )
}

export default SearchBar
