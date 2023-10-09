import React, { useState } from 'react'
import { Champions } from '../data/Data'
import { Popover, ConfigProvider, Button } from 'antd'
import PopupHover from './Popup'
import { CloseOutlined } from '@ant-design/icons'

const checkCost = (cost: string) => {
  let borderColor = ''
  if (cost === '1') {
    return (borderColor = 'border-[#213042]')
  } else if (cost === '2') {
    return (borderColor = 'border-[#156831]')
  } else if (cost === '3') {
    return (borderColor = 'border-[#12407c]')
  } else if (cost === '4') {
    return (borderColor = 'border-[#893088]')
  } else if (cost === '5') {
    return (borderColor = 'border-[#b89d27]')
  }
}

const ChampList = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            borderRadiusLG: 0,
            colorBgElevated: 'var(--bg-clr)',
            boxShadowSecondary: 'none',
          },
          Button: {
            // colorBgBase: 'var(--primary-clr)',
            // colorBgContainer: 'var(--primary-clr)',
            // colorBgContainerDisabled: 'var(--primary-clr)',
            // colorBgElevated: 'var(--primary-clr)',
            // colorBgLayout: 'var(--primary-clr)',
            // colorBgMask: 'var(--primary-clr)',
            // colorBgSpotlight: 'var(--primary-clr)',
            // colorBgTextActive: 'var(--primary-clr)',
            // colorBgTextHover: 'var(--primary-clr)',
            // ghostBg: 'var(--primary-clr)',
            // defaultBg: 'var(--primary-clr)',
            colorPrimaryBg: '#0BC4E2',
            // colorBorder: 'transparent',
            // colorText: 'white',
            // colorBgTextHover: 'transparent',
            // textHoverBg: 'transparent',
            // defaultBorderColor: 'transparent',
            // colorBorderBg: 'transparent',
            primaryColor: '#0BC4E2',
            colorPrimary: '#D47559',
          },
        },
      }}
    >
      <div className='flex flex-wrap'>
        <Button
          color='#0BC4E2'
          type='primary'
          className='w-[24%] mb-[10px] rounded-[3px] h-[35px] mx-[4.5px] flex justify-between items-center'
        >
          <span>3</span>
          <CloseOutlined />
        </Button>
        <Button className='w-[24%] mb-[10px] rounded-[3px] h-[35px] mx-[4.5px] flex justify-between items-center'>
          <span>3</span>
          <CloseOutlined />
        </Button>
        <Button className='w-[24%] mb-[10px] rounded-[3px] h-[35px] mx-[4.5px]'>1</Button>
        <Button className='w-[24%] mb-[10px] rounded-[3px] h-[35px] mx-[4.5px]'>2</Button>
        <Button className='w-[24%] mb-[10px] rounded-[3px] h-[35px] mx-[4.5px]'>Bilgewater</Button>
        <Button className='w-[24%] mb-[10px] rounded-[3px] h-[35px] mx-[4.5px]'>Challenger</Button>
      </div>
      <div className='flex flex-wrap'>
        {Champions.map((champCard, index) => {
          const borderColor = checkCost(champCard.stats.Cost)
          return (
            <div
              key={index}
              className='flex flex-col justify-start items-center py-[10px] px-[15px] h-[100px]'
            >
              <div className='w-[80px] m-auto text-center'>
                <Popover
                  placement='top'
                  content={() => {
                    return (
                      <PopupHover
                        origin={champCard.origin}
                        class={champCard.class}
                        src={champCard.src}
                        alt={champCard.alt}
                        tier={champCard.tier}
                        itemBuild={champCard.itemBuild}
                        stats={{
                          Cost: `${champCard.stats.Cost}`,
                          Health: `${champCard.stats.Health}`,
                          Mana: `${champCard.stats.Mana}`,
                          Armor: `${champCard.stats.Armor}`,
                          MR: `${champCard.stats.MR}`,
                          AbilityPower: `${champCard.stats.AbilityPower}`,
                          DPS: `${champCard.stats.DPS}`,
                          Damage: `${champCard.stats.Damage}`,
                          AtkSpd: `${champCard.stats.AtkSpd}`,
                          CritRate: `${champCard.stats.CritRate}`,
                          Range: `${champCard.stats.Range}`,
                        }}
                        abilities={{
                          img: `${champCard.abilities.img}`,
                          name: `${champCard.abilities.name}`,
                          type: `${champCard.abilities.type}`,
                          detail: `${champCard.abilities.detail}`,
                          other: champCard.abilities.other,
                        }}
                      ></PopupHover>
                    )
                  }}
                  arrow={false}
                  key={index}
                >
                  <img
                    className={` h-[53px] w-[53px] border border-solid ${borderColor} hover:border-orange-400`}
                    src={champCard.src}
                    alt={champCard.alt}
                  />
                </Popover>
              </div>
              <div className='w-[80px] justify-self-center self-center m-auto text-center'>{champCard.alt}</div>
            </div>
          )
        })}
      </div>
    </ConfigProvider>
  )
}

export default ChampList
