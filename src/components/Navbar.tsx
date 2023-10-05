import React from 'react'
import { Tabs, ConfigProvider } from 'antd'
import type { TabsProps } from 'antd'

const items: TabsProps['items'] = [
  {
    key: 'team comps',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Team Comps</span>,
  },
  {
    key: 'meta report',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Meta Report</span>,
  },
  {
    key: 'champions',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Champions</span>,
  },
  {
    key: 'tier lists',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Tier Lists</span>,
  },
  {
    key: 'itam builder',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Item Builder</span>,
  },
  {
    key: 'team builder',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Team Builder</span>,
  },
  {
    key: 'database',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Database</span>,
  },
  {
    key: 'patch notes',
    label: <span className='text-[var(--text-highlight-clr)] uppercase'>Patch Notes</span>,
  },
]

const Navbar: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: 'var(--primary-clr)',
            cardHeight: 48,
            horizontalMargin: '0',
          },
        },
      }}
    >
      <div className='bg-[var(--bg-highlight-clr)] border-[1px] border-solid border-[var(--border-clr)] border-l-0 border-r-0'>
        <div className='max-w-[1280px] h-full mx-auto'>
          <Tabs
            defaultActiveKey='team comps'
            items={items}
            centered
          />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Navbar
