import React from 'react'
import teamComps from '../assets/images/app/teamComps.png'
import teamComps1 from '../assets/images/app/teamComps1.png'
import builder from '../assets/images/app/builder.png'
import itemBuilder from '../assets/images/app/itemBuilder.png'
import champion from '../assets/images/app/champion.png'
import tier from '../assets/images/app/tier.png'
import fury from '../assets/images/lt/furyhorn.png'
import hushtail from '../assets/images/lt/hushtail.png'
import hauntling from '../assets/images/lt/hauntling.png'
import portal from '../assets/images/portal.png'
import pengu from '../assets/images/pengu.png'

const Section: React.FC = () => {
  return (
    <>
      <div className='max-w-[1280px] mx-auto flex flex-col items-center'>
        <span className='text-5xl text-[var(--text-highlight-clr)] font-bold mt-20'>Features</span>
        <div className='mt-32 grid grid-cols-2 mb-60'>
          <div className='h-full relative flex items-center justify-center'>
            <img
              src={teamComps}
              alt=''
              className='w-[520px]'
              style={{ boxShadow: '0 0 32px rgba(0,0,0,.4)', border: '1px solid var(--border-clr)' }}
            />
            <img
              src={teamComps1}
              alt=''
              className='w-[520px] absolute top-[50%] left-[40%]'
              style={{ boxShadow: '0 0 32px rgba(0,0,0,.4)', border: '1px solid var(--border-clr)' }}
            />
          </div>
          <div className='h-full w-[440px] relative ml-52 flex flex-col justify-center'>
            <img
              src={fury}
              alt=''
              className='w-[200px] mb-10'
            />
            <span className='text-3xl text-[var(--text-highlight-clr)] font-bold mb-8'>Team Comps</span>
            <span className='leading-6'>
              Build stronger teams by planning out your comp or choosing one of our hand-picked ones that excel in the
              current meta.
            </span>
          </div>
        </div>

        <div className='mt-20 grid grid-cols-2 mb-[300px]'>
          <div className='h-full w-[440px] flex flex-col items-end justify-center mr-48'>
            <img
              src={hushtail}
              alt=''
              className='w-[220px] mb-10'
            />
            <span className='text-3xl text-[var(--text-highlight-clr)] font-bold mb-8'>Builder</span>
            <span className='leading-6 text-right'>
              Get in-depth analysis after every match to see what you did right and which areas to improve on.
            </span>
          </div>
          <div className='h-full relative flex items-center justify-center'>
            <img
              src={builder}
              alt=''
              className='w-[580px]'
              style={{ boxShadow: '0 0 32px rgba(0,0,0,.4)', border: '1px solid var(--border-clr)' }}
            />
            <img
              src={itemBuilder}
              alt=''
              className='w-[480px] absolute top-[50%] right-[40%]'
              style={{ boxShadow: '0 0 32px rgba(0,0,0,.4)', border: '1px solid var(--border-clr)' }}
            />
          </div>
        </div>

        <div className='mt-20 grid grid-cols-2 mb-40'>
          <div className='h-full relative flex items-center justify-center'>
            <img
              src={tier}
              alt=''
              className='w-[620px]'
              style={{ boxShadow: '0 0 32px rgba(0,0,0,.4)', border: '1px solid var(--border-clr)' }}
            />
            <img
              src={champion}
              alt=''
              className='w-[580px] absolute top-[62%] left-[23%]'
              style={{ boxShadow: '0 0 32px rgba(0,0,0,.4)', border: '1px solid var(--border-clr)' }}
            />
          </div>
          <div className='h-full w-[440px] ml-40 flex flex-col justify-center'>
            <img
              src={hauntling}
              alt=''
              className='w-[180px] mb-10'
            />
            <span className='text-3xl text-[var(--text-highlight-clr)] font-bold mb-8'>Champions</span>
            <span className='leading-6'>Review Champions, standings and tendencies. Find out what works for you!</span>
          </div>
        </div>

        <div className='mt-20 grid grid-cols-3 relative'>
          <img
            src={portal}
            alt=''
            className='w-[360px]'
          />
          <div className='h-full w-[480px] flex flex-col items-start justify-center ml-4'>
            <span className='text-4xl text-[var(--text-highlight-clr)] font-bold mb-8'>Riot Games Compliant</span>
            <span className='leading-6 text-xl'>
              TFT TOP 8 is in sync with Riot’s terms of service and will not result in players getting banned or
              otherwise sanctioned.
            </span>
          </div>
          <img
            src={pengu}
            alt=''
            className='w-[248px] absolute top-[20%] right-[10%]'
          />
        </div>
      </div>
    </>
  )
}

export default Section
