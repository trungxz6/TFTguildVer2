import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, ConfigProvider, Tabs } from 'antd'
import { MdArrowForwardIos } from 'react-icons/md'

const Tab: React.FC = () => {
  const { TabPane } = Tabs

  return (
    <Tabs className=''>
      <TabPane
        tab={
          <span
            className='flex items-center justify-center py-2 bg-[var(--bg-clr)] hover:bg-[var(--btn-clr)] hover:cursor-pointer'
            style={{
              borderTop: '1px solid var(--border-clr)',
              borderBottom: '1px solid var(--border-clr)',
              borderRight: '1px solid var(--border-clr)',
            }}
          >
            Level 8
          </span>
        }
        key='1'
      >
        Content of Tab 1
      </TabPane>
      <TabPane
        tab={
          <span
            className='flex items-center justify-center py-2 bg-[var(--bg-clr)] hover:bg-[var(--btn-clr)] hover:cursor-pointer'
            style={{
              borderTop: '1px solid var(--border-clr)',
              borderBottom: '1px solid var(--border-clr)',
              borderRight: '1px solid var(--border-clr)',
            }}
          >
            Level 8
          </span>
        }
        key='1'
      >
        Content of Tab 1
      </TabPane>
      <TabPane
        tab={
          <span
            className='flex items-center justify-center py-2 bg-[var(--bg-clr)] hover:bg-[var(--btn-clr)] hover:cursor-pointer'
            style={{
              borderTop: '1px solid var(--border-clr)',
              borderBottom: '1px solid var(--border-clr)',
            }}
          >
            Level 8
          </span>
        }
        key='1'
      >
        Content of Tab 1
      </TabPane>
    </Tabs>
  )
}

const MetaReportCard: React.FC = () => {
  const label: ReactNode = (
    <div className='overflow-hidden h-32'>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center'>
          <span className='bg-red-400 text-black font-bold h-[24px] w-[24px] flex items-center justify-center rounded'>
            S
          </span>
          <div className='flex flex-col items-start ml-4'>
            <span className='text-[var(--text-clr)] text-lg'>Multicaster 4 + Demacia 3</span>
            <span className='bg-[#123040] h-[36px] text-[#88A0A7] px-2 mt-2 flex items-center rounded'>Fast 8</span>
          </div>
        </div>
        <div>
          <div>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Ashe.png'
                alt=''
              />
            </Link>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Nautilus.png'
                alt=''
              />
            </Link>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/JarvanIV.png'
                alt=''
              />
            </Link>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Nilah.png'
                alt=''
              />
            </Link>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Sejuani.png'
                alt=''
              />
            </Link>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Aatrox.png'
                alt=''
              />
            </Link>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Gangplank.png'
                alt=''
              />
            </Link>
            <Link to={'/champion'}>
              <img
                className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Sion.png'
                alt=''
              />
            </Link>
          </div>
          <div className='flex mt-2'>
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
          </div>
        </div>
      </div>
      <div
        className='flex items-center h-10 justify-around bg-[var(--bg-clr)] absolute bottom-0 w-full left-0 rounded-b-[8px]'
        style={{ borderTop: '1px solid var(--border-clr)' }}
      >
        <span className='text-[#88A0A7]'>
          Avg Place: <span className='text-[var(--text-clr)]'>3.7</span>
        </span>
        <span className='text-[#88A0A7]'>
          Winrate: <span className='text-[var(--text-clr)]'>16.3%</span>
        </span>
        <span className='text-[#88A0A7]'>
          Top 4: <span className='text-[var(--text-clr)]'>64.9%</span>
        </span>
        <span className='text-[#88A0A7]'>
          Contested: <span className='text-[var(--text-clr)]'>Medium</span> (4.4%)
        </span>
      </div>
    </div>
  )

  const children: ReactNode = (
    <div>
      <div className='grid grid-cols-3 p-4'>
        <div className='w-full h-full flex items-center justify-center'>
          <span className='bg-[--bg-clr] h-8 text-[--text-highlight-clr] flex items-center justify-center py-1 px-10 rounded-md'>
            Win Condition
          </span>
        </div>
        <div className='col-span-2 flex items-center justify-center'>
          <Link
            to={'/champion'}
            className='flex items-center'
          >
            <img
              className='w-[48px] mr-4 border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
              src='https://rerollcdn.com/characters/Base/Velkoz.png'
              alt=''
            />
          </Link>
          <MdArrowForwardIos className='text-[#88A0A7] mr-4' />
          <div className='flex flex-col items-center mr-4'>
            <Link
              to={'/champion'}
              className='flex items-center justify-center'
            >
              <img
                className='w-[32px] border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Velkoz.png'
                alt=''
              />
            </Link>
            <span className='bg-[--bg-clr] text-[--text-clr] text-xs flex items-center justify-center px-2 rounded-md mt-2'>
              3 Items
            </span>
          </div>
          <MdArrowForwardIos className='text-[#88A0A7] mr-4' />
          <div className='flex flex-col items-center mr-4'>
            <Link
              to={'/champion'}
              className='flex items-center justify-center'
            >
              <img
                className='w-[32px] border-[1px] border-solid border-[var(--border-5c-clr)] hover:border-orange-500'
                src='https://rerollcdn.com/characters/Base/Taliyah.png'
                alt=''
              />
            </Link>
            <span className='bg-[--bg-clr] text-[--text-clr] text-xs flex items-center justify-center px-2 rounded-md mt-2'>
              3 Items
            </span>
          </div>
          <MdArrowForwardIos className='text-[#88A0A7] mr-4' />
          <div className='flex items-center mr-4'>
            <div className='hexagon bg-[#BD9A38] w-[26px] h-[28px] flex items-center justify-center'>
              <img
                src='https://rerollcdn.com/icons/wanderer.png'
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
          <MdArrowForwardIos className='text-[#88A0A7] mr-4' />
          <div className='flex items-center mr-2'>
            <div className='hexagon bg-[#A0715E] w-[26px] h-[28px] flex items-center justify-center'>
              <img
                src='https://rerollcdn.com/icons/invoker.png'
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
      <Tab />
      {/* <div className='grid grid-cols-3'>
        <span
          className='flex items-center justify-center py-2 bg-[var(--bg-clr)] hover:bg-[var(--btn-clr)] hover:cursor-pointer'
          style={{
            borderTop: '1px solid var(--border-clr)',
            borderBottom: '1px solid var(--border-clr)',
            borderRight: '1px solid var(--border-clr)',
          }}
        >
          Level 8
        </span>
        <span
          className='flex items-center justify-center py-2 bg-[var(--bg-clr)] hover:bg-[var(--btn-clr)] hover:cursor-pointer'
          style={{
            borderTop: '1px solid var(--border-clr)',
            borderBottom: '1px solid var(--border-clr)',
            borderRight: '1px solid var(--border-clr)',
          }}
        >
          Level 9
        </span>
        <span
          className='flex items-center justify-center py-2 bg-[var(--bg-clr)] hover:bg-[var(--btn-clr)] hover:cursor-pointer'
          style={{
            borderTop: '1px solid var(--border-clr)',
            borderBottom: '1px solid var(--border-clr)',
          }}
        >
          Similar Comps
        </span>
      </div> */}
    </div>
  )

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
        style={{ marginTop: '20px' }}
        items={[
          {
            key: '1',
            label: label,
            children: children,
          },
        ]}
      />
    </ConfigProvider>
  )
}

export default MetaReportCard
