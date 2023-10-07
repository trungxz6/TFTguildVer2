import React, { ReactNode } from 'react'

const ChessBoard: React.FC<{
  size: string
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
  return (
    <>
      {(size === 'large' && (
        <div className='relative'>
          <div className='flex'>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile1}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile2}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile3}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile4}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile5}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile6}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile7}</div>
            </div>
          </div>
          <div className='flex absolute top-[97px] left-[58px]'>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile8}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile9}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile10}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile11}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile12}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile13}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile14}</div>
            </div>
          </div>
          <div className='flex absolute top-[194px]'>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile15}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile16}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile17}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile18}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile19}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile20}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile21}</div>
            </div>
          </div>
          <div className='flex absolute top-[291px] left-[58px]'>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile22}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile23}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile24}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile25}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile26}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile27}</div>
            </div>
            <div className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'>
              <div className='bg-[var(--bg-highlight-clr)] w-[100px] h-[110px] hexagon'>{tile28}</div>
            </div>
          </div>
        </div>
      )) ||
        (size === 'small' && (
          <div className='relative'>
            <div className='flex'>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile1}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile2}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile3}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile4}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile5}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile6}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile7}</div>
              </div>
            </div>
            <div className='flex absolute top-[32px] left-[19px]'>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile8}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile9}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile10}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile11}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile12}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile13}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile14}</div>
              </div>
            </div>
            <div className='flex absolute top-[64px]'>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile15}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile16}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile17}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile18}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile19}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile20}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile21}</div>
              </div>
            </div>
            <div className='flex absolute top-[96px] left-[19px]'>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile22}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile23}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile24}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile25}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile26}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile27}</div>
              </div>
              <div className='bg-[var(--border-clr)] w-[34px] h-[38px] m-[2px] hexagon flex items-center justify-center'>
                <div className='bg-[var(--bg-highlight-clr)] w-[31px] h-[34px] hexagon'>{tile28}</div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default ChessBoard
