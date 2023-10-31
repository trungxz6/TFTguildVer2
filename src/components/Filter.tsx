import React from 'react'
import { Menu, ConfigProvider, MenuProps } from 'antd'

const Filter: React.FC = () => {
  const PlayStyleItem: React.FC<{ style: string }> = (props) => {
    return (
      <div className='w-full flex items-center'>
        <img
          className='w-[15px] mr-3 opacity-[0.5]'
          src='https://rerollcdn.com/ui/icon-gold.svg'
        />
        <span>{props.style}</span>
      </div>
    )
  }

  const OriginItem: React.FC<{ name: string }> = (props) => {
    return (
      <div className='w-full flex items-center'>
        <img
          className='w-[20px] mr-3 opacity-[0.5]'
          src={`https://rerollcdn.com/icons/${props.name}.png`}
        />
        <span>
          {String(props.name)
            .toLowerCase()
            .replace(/(^|\s)\S/g, (l) => l.toUpperCase())}
        </span>
      </div>
    )
  }

  const ClassItem: React.FC<{ class: string }> = (props) => {
    return (
      <div className='w-full flex items-center'>
        <img
          className='w-[20px] mr-3 opacity-[0.5]'
          src={`https://rerollcdn.com/icons/${props.class}.png`}
        />
        <span>
          {String(props.class)
            .toLowerCase()
            .replace(/(^|\s)\S/g, (l) => l.toUpperCase())}
        </span>
      </div>
    )
  }

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

  const items: MenuProps['items'] = [
    getItem('Play Style', 'style', null, [
      getItem(null, 'std', <PlayStyleItem style='Standard' />),
      getItem(null, 'hyper', <PlayStyleItem style='Hyper Roll' />),
      getItem(null, 'slow6', <PlayStyleItem style='Slow Roll (6)' />),
      getItem(null, 'slow7', <PlayStyleItem style='Slow Roll (7)' />),
      getItem(null, 'fast8', <PlayStyleItem style='Fast 8' />),
    ]),
    getItem('Origin', 'origin', null, [
      getItem(null, 'bilgewater', <OriginItem name='bilgewater' />),
      getItem(null, 'darkin', <OriginItem name='darkin' />),
      getItem(null, 'demacia', <OriginItem name='demacia' />),
      getItem(null, 'empress', <OriginItem name='empress' />),
      getItem(null, 'freljord', <OriginItem name='freljord' />),
    ]),
    getItem('Class', 'class', null, [
      getItem(null, 'bastion', <ClassItem class='bastion' />),
      getItem(null, 'bruiser', <ClassItem class='bruiser' />),
      getItem(null, 'challenger', <ClassItem class='challenger' />),
      getItem(null, 'gunner', <ClassItem class='gunner' />),
      getItem(null, 'invoker', <ClassItem class='invoker' />),
    ]),
  ]

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
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
      <div className='w-full'>
        <span className='text-2xl text-[var(--text-highlight-clr)] mb-4 block'>Filters</span>
        <Menu
          onClick={onClick}
          defaultOpenKeys={['style']}
          mode='inline'
          items={items}
        />
      </div>
    </ConfigProvider>
  )
}

export default Filter
