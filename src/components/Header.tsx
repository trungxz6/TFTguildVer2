import React from 'react'
import { Select, ConfigProvider } from 'antd'

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

const { Option } = Select

const Options = [
  { value: '9.5', label: 'Set 9.5' },
  { value: '10', label: 'Set 10' },
  { value: '10.5', label: 'Set 10.5' },
]

const Header = () => {
  return (
    <ConfigProvider
      theme={{
        components: { Select: { colorBgElevated: '#1F8FED', colorBgContainer: '#D67D68', colorBorder: 'none' } },
      }}
    >
      <div className='bg-red-500 flex justify-center items-center m-[0px] p-[0px]'>
        <img
          className='brand w-[100px] h-[22px]'
          src='https://rerollcdn.com/brand.svg'
          alt='TFTactics'
        ></img>
        <Select
          defaultValue='Set 9.5'
          onChange={handleChange}
        ></Select>
        <>Hehe</>
      </div>
    </ConfigProvider>
  )
}

export default Header
