import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ChampionType } from '../constants/constants'
import TileItem from './TileItem'

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
  const backgroundColor = isOver ? 'lightgreen' : 'var(--primary-clr)'
  const delChamp = () => {
    setDroppedImg(null)
  }

  return (
    <>
      {droppedImg ? (
        <div
          onDoubleClick={() => delChamp()}
          className='cursor-pointer select-none'
        >
          <div
            ref={drop}
            className='w-[72px] h-[80px] mr-4 hexagon flex items-center justify-center'
            style={{ backgroundColor }}
          >
            <div className='bg-[#102531] w-[67px] h-[74px] hexagon flex items-center justify-center'>
              <img
                src={droppedImg}
                className='w-[118%]'
              />
            </div>
          </div>
          <TileItem />
        </div>
      ) : (
        <div
          ref={drop}
          className='bg-[var(--border-clr)] w-[72px] h-[80px] mr-4 hexagon flex items-center justify-center'
        >
          <div className='bg-[#102531] w-[67px] h-[74px] hexagon flex'></div>
        </div>
      )}
    </>
  )
}

export default Tile
