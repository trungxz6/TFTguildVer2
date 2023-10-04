import React from 'react'
import logo from '../assets/logo/logo.png'
import { Select, Button, ConfigProvider } from 'antd'
import SearchBar from './SearchBar'
import Navbar from './Navbar'

const Header: React.FC = () => {
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

  return (
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
      <div className='bg-[var(--bg-clr)] h-12'>
        <div className='max-w-[1280px] h-full mx-auto flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='w-[68px]'
              src={logo}
              alt='logo'
            />
            <span className='text-2xl font-bold text-[var(--text-highlight-clr)] mr-8'>TFT TOP 8</span>
            <Select defaultValue='9.5'>
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
          <SearchBar />
          <Button type='primary'>DOWNLOAD</Button>
        </div>
        <Navbar />
      </div>
    </ConfigProvider>
  )
}

export default Header
