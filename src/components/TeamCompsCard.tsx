import React from 'react'
import { Link } from 'react-router-dom'
import { Collapse, ConfigProvider } from 'antd'
import { MdArrowForwardIos } from 'react-icons/md'
import ChessBoard from './ChessBoard'

const TeamCompsCard: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            colorBgContainer: 'var(--bg-highlight-clr)',
            colorText: 'var(--text-clr)',
            colorBorder: 'var(--border-clr)',
            colorTextHeading: 'var(--text-clr)',
            headerBg: 'var(--bg-highlight-clr)',
            contentPadding: '0',
          },
        },
      }}
    >
      <Collapse
        expandIconPosition='end'
        style={{ marginBottom: '20px' }}
        items={[
          {
            key: '1',
            label: (
              <div className='flex items-center justify-between pr-6'>
                <div className='flex items-center'>
                  <span className='bg-red-400 text-black font-bold h-[24px] w-[24px] flex items-center justify-center rounded'>
                    S
                  </span>
                  <div className='flex flex-col items-start ml-4'>
                    <span className='text-[var(--text-clr)] text-lg'>Bilgewater Vanquishers</span>
                    <span className='bg-[#123040] h-[36px] text-[#88A0A7] px-2 mt-2 flex items-center rounded'>
                      Fast 8
                    </span>
                  </div>
                </div>
                <div>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/Ashe.png'
                      alt=''
                    />
                  </Link>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/Nautilus.png'
                      alt=''
                    />
                  </Link>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/JarvanIV.png'
                      alt=''
                    />
                  </Link>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/Nilah.png'
                      alt=''
                    />
                  </Link>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/Sejuani.png'
                      alt=''
                    />
                  </Link>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/Aatrox.png'
                      alt=''
                    />
                  </Link>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/Gangplank.png'
                      alt=''
                    />
                  </Link>
                  <Link to={'/champion'}>
                    <img
                      className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                      src='https://rerollcdn.com/characters/Base/Sion.png'
                      alt=''
                    />
                  </Link>
                </div>
              </div>
            ),
            children: (
              <div>
                <div
                  className='grid grid-cols-3'
                  style={{ borderBottom: '1px solid var(--border-clr)' }}
                >
                  <div
                    className='flex flex-col items-center py-4'
                    style={{ borderRight: '1px solid var(--border-clr)' }}
                  >
                    <span className='text-[#88A0A7] mb-4'>Early Comp</span>
                    <div className='flex items-center justify-center'>
                      <Link to={'/champion'}>
                        <img
                          className='w-[36px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                          src='https://rerollcdn.com/characters/Base/Chogath.png'
                          alt=''
                        />
                      </Link>
                      <Link to={'/champion'}>
                        <img
                          className='w-[36px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                          src='https://rerollcdn.com/characters/Base/Malzahar.png'
                          alt=''
                        />
                      </Link>
                      <Link to={'/champion'}>
                        <img
                          className='w-[36px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                          src='https://rerollcdn.com/characters/Base/Renekton.png'
                          alt=''
                        />
                      </Link>
                      <Link to={'/champion'}>
                        <img
                          className='w-[36px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)]'
                          src='https://rerollcdn.com/characters/Base/Vi.png'
                          alt=''
                        />
                      </Link>
                      <Link to={'/champion'}>
                        <img
                          className='w-[36px] border-[1px] border-solid border-[var(--border-5c-clr)]'
                          src='https://rerollcdn.com/characters/Base/RekSai.png'
                          alt=''
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className='flex flex-col items-center justify-center py-4'
                    style={{ borderRight: '1px solid var(--border-clr)' }}
                  >
                    <span className='text-[#88A0A7] mb-4'>Traits</span>
                    <div className='grid grid-cols-5'>
                      <div className='flex items-center mr-2 mb-2'>
                        <div className='hexagon bg-[#BD9A38] w-[26px] h-[28px] flex items-center justify-center'>
                          <img
                            src='https://rerollcdn.com/icons/reaverking.png'
                            alt=''
                            className='w-[70%] h-[70%]'
                          />
                        </div>
                        <span
                          className='bg-[#BD9A38] flex items-center justify-center text-[10px] font-bold h-[14px] px-2'
                          style={{ borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}
                        >
                          1
                        </span>
                      </div>
                      <div className='flex items-center mr-2 mb-2'>
                        <div className='hexagon bg-[#A0715E] w-[26px] h-[28px] flex items-center justify-center'>
                          <img
                            src='https://rerollcdn.com/icons/bilgewater.png'
                            alt=''
                            className='w-[70%] h-[70%]'
                          />
                        </div>
                        <span
                          className='bg-[#A0715E] flex items-center justify-center text-[10px] font-bold h-[14px] px-2'
                          style={{ borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}
                        >
                          1
                        </span>
                      </div>
                      <div className='flex items-center mr-2 mb-2'>
                        <div className='hexagon bg-[#A0715E] w-[26px] h-[28px] flex items-center justify-center'>
                          <img
                            src='https://rerollcdn.com/icons/juggernaut.png'
                            alt=''
                            className='w-[70%] h-[70%]'
                          />
                        </div>
                        <span
                          className='bg-[#A0715E] flex items-center justify-center text-[10px] font-bold h-[14px] px-2'
                          style={{ borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}
                        >
                          1
                        </span>
                      </div>
                      <div className='flex items-center mr-2 mb-2'>
                        <div className='hexagon bg-[#A0715E] w-[26px] h-[28px] flex items-center justify-center'>
                          <img
                            src='https://rerollcdn.com/icons/vanquisher.png'
                            alt=''
                            className='w-[70%] h-[70%]'
                          />
                        </div>
                        <span
                          className='bg-[#A0715E] flex items-center justify-center text-[10px] font-bold h-[14px] px-2'
                          style={{ borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}
                        >
                          1
                        </span>
                      </div>
                      <div className='flex items-center mr-2 mb-2'>
                        <div className='hexagon bg-[#A0715E] w-[26px] h-[28px] flex items-center justify-center'>
                          <img
                            src='https://rerollcdn.com/icons/freljord.png'
                            alt=''
                            className='w-[70%] h-[70%]'
                          />
                        </div>
                        <span
                          className='bg-[#A0715E] flex items-center justify-center text-[10px] font-bold h-[14px] px-2'
                          style={{ borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}
                        >
                          1
                        </span>
                      </div>

                      <div className='flex items-center mr-2 mb-2'>
                        <div className='hexagon bg-[#A0715E] w-[26px] h-[28px] flex items-center justify-center'>
                          <img
                            src='https://rerollcdn.com/icons/vanquisher.png'
                            alt=''
                            className='w-[70%] h-[70%]'
                          />
                        </div>
                        <span
                          className='bg-[#A0715E] flex items-center justify-center text-[10px] font-bold h-[14px] px-2'
                          style={{ borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}
                        >
                          1
                        </span>
                      </div>
                      <div className='flex items-center mr-2 mb-2'>
                        <div className='hexagon bg-[#A0715E] w-[26px] h-[28px] flex items-center justify-center'>
                          <img
                            src='https://rerollcdn.com/icons/freljord.png'
                            alt=''
                            className='w-[70%] h-[70%]'
                          />
                        </div>
                        <span
                          className='bg-[#A0715E] flex items-center justify-center text-[10px] font-bold h-[14px] px-2'
                          style={{ borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}
                        >
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center py-4'>
                    <span className='text-[#88A0A7] mb-4'>Carosel</span>
                    <div className='flex items-center'>
                      <div className='relative mr-4'>
                        <img
                          src='https://rerollcdn.com/items/RecurveBow.png'
                          alt=''
                          className='w-[32px] border-[1px] border-solid border-[var(--border-clr)] hover:border-[#D47559] hover:cursor-pointer'
                        />
                        <img
                          src='https://rerollcdn.com/items/RapidFirecannon.png'
                          alt=''
                          className='absolute w-[16px] top-[58%] left-[70%] border-[1px] border-solid border-[var(--border-clr)] hover:border-[#D47559] hover:cursor-pointer'
                        />
                      </div>
                      <MdArrowForwardIos className='text-[#88A0A7] mr-4' />

                      <div className='relative mr-4'>
                        <img
                          src='https://rerollcdn.com/items/BFSword.png'
                          alt=''
                          className='w-[32px] border-[1px] border-solid border-[var(--border-clr)] hover:border-[#D47559] hover:cursor-pointer'
                        />
                        <img
                          src='https://rerollcdn.com/items/GiantSlayer.png'
                          alt=''
                          className='absolute w-[16px] top-[58%] left-[70%] border-[1px] border-solid border-[var(--border-clr)] hover:border-[#D47559] hover:cursor-pointer'
                        />
                      </div>
                      <MdArrowForwardIos className='text-[#88A0A7] mr-4' />

                      <div className='relative mr-4'>
                        <img
                          src='https://rerollcdn.com/items/GiantsBelt.png'
                          alt=''
                          className='w-[32px] border-[1px] border-solid border-[var(--border-clr)] hover:border-[#D47559] hover:cursor-pointer'
                        />
                        <img
                          src='https://rerollcdn.com/items/Redemption.png'
                          alt=''
                          className='absolute w-[16px] top-[58%] left-[70%] border-[1px] border-solid border-[var(--border-clr)] hover:border-[#D47559] hover:cursor-pointer'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div
                    className='flex flex-col items-center py-4'
                    style={{ borderRight: '1px solid var(--border-clr)' }}
                  >
                    <span className='text-[#88A0A7] mb-4'>Options</span>
                    <div className='flex'>
                      <div className='flex flex-col items-end mr-4'>
                        <span className='bg-[#123040] h-[36px] text-[var(--text-clr)] px-2 flex items-center rounded font-bold mb-4'>
                          LV UP
                        </span>
                        <Link
                          to={'/champion'}
                          className='flex items-center mb-4'
                        >
                          <img
                            className='w-[36px] border-[1px] border-solid border-[var(--border-5c-clr)]'
                            src='https://rerollcdn.com/characters/Base/Aatrox.png'
                            alt=''
                          />
                        </Link>
                        <Link
                          to={'/champion'}
                          className='flex items-center'
                        >
                          <img
                            className='w-[36px] border-[1px] border-solid border-[var(--border-5c-clr)]'
                            src='https://rerollcdn.com/characters/Base/Nautilus.png'
                            alt=''
                          />
                        </Link>
                      </div>

                      <div>
                        <div className='flex items-center mb-4'>
                          <MdArrowForwardIos className='text-[#88A0A7] mr-4' />
                          <Link
                            to={'/champion'}
                            className='flex items-center'
                          >
                            <img
                              className='w-[36px] border-[1px] border-solid border-[var(--border-5c-clr)] mr-4'
                              src='https://rerollcdn.com/characters/Base/Heimerdinger.png'
                              alt=''
                            />
                          </Link>
                          <Link
                            to={'/champion'}
                            className='flex items-center'
                          >
                            <img
                              className='w-[36px] border-[1px] border-solid border-[var(--border-5c-clr)]'
                              src='https://rerollcdn.com/characters/Base/KSante.png'
                              alt=''
                            />
                          </Link>
                        </div>
                        <div className='flex items-center mb-4'>
                          <MdArrowForwardIos className='text-[#88A0A7] mr-4' />
                          <Link
                            to={'/champion'}
                            className='flex items-center'
                          >
                            <img
                              className='w-[36px] border-[1px] border-solid border-[var(--border-5c-clr)]'
                              src='https://rerollcdn.com/characters/Base/Nasus.png'
                              alt=''
                            />
                          </Link>
                        </div>
                        <div className='flex items-center '>
                          <MdArrowForwardIos className='text-[#88A0A7] mr-4' />
                          <Link
                            to={'/champion'}
                            className='flex items-center'
                          >
                            <img
                              className='w-[36px] border-[1px] border-solid border-[var(--border-5c-clr)]'
                              src='https://rerollcdn.com/characters/Base/MissFortune.png'
                              alt=''
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center py-4'>
                    <span className='text-[#88A0A7] mb-4'>Options</span>
                    <ChessBoard
                      size='small'
                      tile3={
                        <img
                          src='https://rerollcdn.com/characters/Base/Sion.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                      tile4={
                        <img
                          src='https://rerollcdn.com/characters/Base/Nautilus.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                      tile5={
                        <img
                          src='https://rerollcdn.com/characters/Base/Aatrox.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                      tile6={
                        <img
                          src='https://rerollcdn.com/characters/Base/Sejuani.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                      tile7={
                        <img
                          src='https://rerollcdn.com/characters/Base/JarvanIV.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                      tile21={
                        <img
                          src='https://rerollcdn.com/characters/Base/Nilah.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                      tile22={
                        <img
                          src='https://rerollcdn.com/characters/Base/Ashe.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                      tile28={
                        <img
                          src='https://rerollcdn.com/characters/Base/Gangplank.png'
                          alt=''
                          className='object-cover w-full'
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </ConfigProvider>
  )
}

export default TeamCompsCard
