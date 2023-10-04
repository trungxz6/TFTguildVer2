import React from 'react'
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Header = () => {
  return (
    <div>
        <Space wrap className='bg-blue-500'>
            <Select
            className=''
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
                { value: 'jack', label: 'Set 9.5' },
                { value: 'lucy', label: 'Set 10' },
                { value: 'Yiminghe', label: 'Set 10.5' },
            ]}
            />
        </Space>
    </div>
  )
}

export default Header