import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ChampionType } from '../constants/constants'

const Tile: React.FC = () => {
  const [droppedImg, setDroppedImg] = useState(null)

  const [{ isOver }, drop] = useDrop({
    accept: ChampionType.CHAMPION,
    drop: (item: any) => {
      setDroppedImg(item.src)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const backgroundColor = isOver ? 'lightgreen' : 'var(--border-clr)'
  return (
    <>
      {droppedImg ? (
        <div
          ref={drop}
          className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'
          style={{ backgroundColor }}
        >
          <div className='bg-[#102531] w-[100px] h-[110px] hexagon flex items-center justify-center'>
            <img src={droppedImg} />
          </div>
        </div>
      ) : (
        <div
          ref={drop}
          className='bg-[var(--border-clr)] w-[106px] h-[118px] m-[5px] hexagon flex items-center justify-center'
        >
          <div className='bg-[#102531] w-[100px] h-[110px] hexagon flex'></div>
        </div>
      )}
    </>
  )
}

export default Tile
