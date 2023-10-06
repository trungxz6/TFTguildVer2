import React from 'react'
import partners from '../assets/images/partners-bg.png'
import { Input, ConfigProvider } from 'antd'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'

const ItemBuilder = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            // borderRadius: 0,
            colorIcon: '#ff4d4f',
            colorIconHover: '#ffd666',
            colorBgContainer: 'transparent',
            colorText: 'var(--text-clr)',
            colorTextPlaceholder: 'var(--text-blur-clr)',
            // addonBg: '#D47559',
            // colorBgBase: '#D47559',
            // colorBgContainerDisabled: '#D47559',
            // colorBgElevated: '#D47559',
            // colorBgLayout: '#D47559',
            // colorBgMask: '#D47559',
            // colorBgSpotlight: '#0bc4e2',
            // colorBgTextActive: '#0bc4e2',
            // colorBgTextHover: '#0bc4e2',
            colorBorder: 'var(--border-clr)',
          },
        },
      }}
    >
      <div className='mt-[100px]'>
        <img
          className=' mb-[50px] w-3/5 mx-auto flex'
          src={partners}
        />
        <div className='w-3/5 mx-auto flex mb-[50px] font-semibold'>
          {/* LEFT COLUMN */}
          <div className='w-1/4 flex flex-col items-center mr-[30px]'>
            <div className='w-full text-2xl'>Choose an Item</div>
            <Input
              className='my-[20px] h-[35px] rounded-none bg-transparent hover:bg-transparent'
              placeholder='Search for an item...'
              prefix={<SearchOutlined className='mr-[10px]' />}
              suffix={<CloseOutlined />}
              allowClear={true}
            />
            <div className='w-full flex flex-col'>
              <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
                Base Items
              </div>
              <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
            </div>
            <div className='w-full flex flex-col'>
              <div className=' border-[4px] border-b-[#D47559] border-solid border-t-transparent border-x-transparent w-fit pb-[15px] py-[10px]'>
                Combined Items
              </div>
              <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mb-[20px]'></div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default ItemBuilder
