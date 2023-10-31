import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, ConfigProvider, MenuProps } from 'antd'

const DataBaseFilter: React.FC = () => {
  const navigate = useNavigate()
  type MenuItem = Required<MenuProps>['items'][number]

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e)
    navigate(`/database/${e.key}`)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: 'trasnparent',
            fontFamily: 'Spiegel_TT_Regular',
            itemColor: 'var(--text-clr)',
            itemHoverBg: 'var(--btn-clr)',
            itemSelectedBg: 'var(--primary-clr)',
            itemSelectedColor: 'var(--text-clr)',
          },
        },
      }}
    >
      <div className=''>
        <span className='text-2xl text-[var(--text-highlight-clr)] mb-4 block'>Filters</span>
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['champions']}
          mode='inline'
          items={[
            getItem('Champions', 'champions'),
            getItem('Champion Stats', 'championStats'),
            getItem('Origins', 'origins'),
            getItem('Classes', 'classes'),
            getItem('Rolling', 'rolling'),
            getItem('Augments', 'augments'),
            getItem('Legends', 'legends'),
            getItem('Region Portals', 'regionPortals'),
          ]}
        />
      </div>
    </ConfigProvider>
  )
}

export default DataBaseFilter
