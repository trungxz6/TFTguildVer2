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
  // const renderOption = (option: any) => {
  //   const { value, label } = option
  //   return (
  //     <div className={`${value === '9.5' ? 'text-red-500' : 'text-blue-500'} py-2 px-4 cursor-pointer m-[0px] p-[0px]`}>
  //       {label}
  //     </div>
  //   )
  // }

  return (
    <ConfigProvider theme={{ components: { Select: { colorBgElevated: '#1F8FED', colorBgContainer: '#D67D68' } } }}>
      <div className='bg-red-500 flex justify-center items-center m-[0px] p-[0px]'>
        <img
          className='brand w-[100px] h-[22px]'
          src='https://rerollcdn.com/brand.svg'
          alt='TFTactics'
        ></img>
        <Select
          // className='bg-yellow-500 rounded-none m-[0px] p-[0px]'
          // popupClassName='w-96 bg-white rounded-none hover:rounded-none m-[0px] p-[0px]'
          defaultValue='Set 9.5'
          onChange={handleChange}
        >
          {Options.map((option, index) => (
            <Option
              key={index}
              value={option.value}
            >
              {/* {renderOption(option)} */}
            </Option>
          ))}
        </Select>
      </div>
    </ConfigProvider>
  )
}

export default Header
