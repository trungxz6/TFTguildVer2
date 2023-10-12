import React, { ReactNode } from 'react'
import Tile from './Tile'

const ChessBoard: React.FC<{
  size: string
  ref?: any
  tile1?: ReactNode
  tile2?: ReactNode
  tile3?: ReactNode
  tile4?: ReactNode
  tile5?: ReactNode
  tile6?: ReactNode
  tile7?: ReactNode
  tile8?: ReactNode
  tile9?: ReactNode
  tile10?: ReactNode
  tile11?: ReactNode
  tile12?: ReactNode
  tile13?: ReactNode
  tile14?: ReactNode
  tile15?: ReactNode
  tile16?: ReactNode
  tile17?: ReactNode
  tile18?: ReactNode
  tile19?: ReactNode
  tile20?: ReactNode
  tile21?: ReactNode
  tile22?: ReactNode
  tile23?: ReactNode
  tile24?: ReactNode
  tile25?: ReactNode
  tile26?: ReactNode
  tile27?: ReactNode
  tile28?: ReactNode
}> = (props) => {
  const {
    size,
    ref,
    tile1,
    tile2,
    tile3,
    tile4,
    tile5,
    tile6,
    tile7,
    tile8,
    tile9,
    tile10,
    tile11,
    tile12,
    tile13,
    tile14,
    tile15,
    tile16,
    tile17,
    tile18,
    tile19,
    tile20,
    tile21,
    tile22,
    tile23,
    tile24,
    tile25,
    tile26,
    tile27,
    tile28,
  } = props

  const row1 = [tile1, tile2, tile3, tile4, tile5, tile6, tile7]
  const row2 = [tile8, tile9, tile10, tile11, tile12, tile13, tile14]
  const row3 = [tile15, tile16, tile17, tile18, tile19, tile20, tile21]
  const row4 = [tile22, tile23, tile24, tile25, tile26, tile27, tile28]
  return (
    <>
      {(size === 'large' && (
        <div className='relative'>
          <div className='flex'>
            {row1.map((tile) => {
              return (
                <div
                  ref={ref}
                  className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'
                >
                  <div className='bg-[#102531] w-[100px] h-[110px] hexagon flex'>{tile}</div>
                </div>
              )
            })}
          </div>
          <div className='flex absolute top-[97px] left-[58px]'>
            {row2.map((tile) => {
              return (
                <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
                  <div className='bg-[#102531] w-[100px] h-[110px] hexagon flex'>{tile}</div>
                </div>
              )
            })}
          </div>
          <div className='flex absolute top-[194px]'>
            {row3.map((tile) => {
              return (
                <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
                  <div className='bg-[#102531] w-[100px] h-[110px] hexagon flex'>{tile}</div>
                </div>
              )
            })}
          </div>
          <div className='flex absolute top-[291px] left-[58px]'>
            {row4.map((tile) => {
              return (
                <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
                  <div className='bg-[#102531] w-[100px] h-[110px] hexagon flex'>{tile}</div>
                </div>
              )
            })}
          </div>
        </div>
      )) ||
        (size === 'small' && (
          <div className='relative'>
            <div className='flex'>
              {row1.map((tile) => {
                return (
                  <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                    <div className='bg-[#102531] w-[31px] h-[34px] hexagon flex'>{tile}</div>
                  </div>
                )
              })}
            </div>
            <div className='flex absolute top-[32px] left-[19px]'>
              {row2.map((tile) => {
                return (
                  <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                    <div className='bg-[#102531] w-[31px] h-[34px] hexagon flex'>{tile}</div>
                  </div>
                )
              })}
            </div>
            <div className='flex absolute top-[64px]'>
              {row3.map((tile) => {
                return (
                  <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                    <div className='bg-[#102531] w-[31px] h-[34px] hexagon flex'>{tile}</div>
                  </div>
                )
              })}
            </div>
            <div className='flex absolute top-[96px] left-[19px]'>
              {row4.map((tile) => {
                return (
                  <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                    <div className='bg-[#102531] w-[31px] h-[34px] hexagon flex'>{tile}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )) ||
        (size === 'drop' && (
          <div className='relative'>
            <div className='flex'>
              {row1.map(() => {
                return <Tile />
              })}
            </div>
            <div className='flex absolute top-[97px] left-[58px]'>
              {row2.map(() => {
                return <Tile />
              })}
            </div>
            <div className='flex absolute top-[194px]'>
              {row3.map(() => {
                return <Tile />
              })}
            </div>
            <div className='flex absolute top-[291px] left-[58px]'>
              {row4.map(() => {
                return <Tile />
              })}
            </div>
          </div>
        ))}
    </>
  )
}

export default ChessBoard
