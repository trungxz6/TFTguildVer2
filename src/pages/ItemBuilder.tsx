import React from 'react'
import partners from '../assets/images/partners-bg.png'
import { Input, ConfigProvider } from 'antd'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { BaseItems, Origins, Classes, CombinedItems, Champions, Synergies } from '../data/Data'
import { Table, Divider } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
]

const ItemBuilder = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: 0,
            colorIcon: '#ff4d4f',
            colorIconHover: '#ffd666',
            colorBgContainer: 'transparent',
            colorText: 'var(--text-clr)',
            colorTextPlaceholder: 'var(--text-blur-clr)',
            colorBorder: 'var(--border-clr)',
            colorBorderBg: '#fe3939',
            colorBorderSecondary: '#fe3939',
            hoverBorderColor: 'none',
            boxShadow: 'none',
            activeBorderColor: 'var(--primary-clr)',
          },
          Table: {
            borderRadiusLG: 0,
            colorBgBase: 'transparent',
            colorBgContainer: 'transparent',
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
              className='my-[20px] h-[35px] border bg-transparent'
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
          {/* RIGHT COLUMN */}
          <div className='w-3/4 pl-[30px] border-l-[#1f485f] border-solid border border-transparent flex flex-col '>
            <div className='w-full text-2xl'>TFT Items Cheat Sheet</div>
            {/* DIVIDER */}
            <div className='border-[1px] border-x-transparent border-b-transparent border-solid border-t-[#1f485f] mt-[20px]'></div>
            <div className='flex items-center mt-[20px]'>
              <img
                className='w-[30px] h-[30px] mr-[15px]'
                src={BaseItems[0].src}
                alt={BaseItems[0].name}
              />
              <div>{BaseItems[0].name}</div>
            </div>
            <Table
              className='mt-[20px]'
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default ItemBuilder
