import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemType } from '../constants/constants'

type droppedImg = string[]

const TileItem: React.FC = () => {
  const [droppedImg, setDroppedImg] = useState<droppedImg>([])

  const [{ isOver }, drop] = useDrop({
    accept: ItemType.ITEM,
    drop: (item: any) => {
      setDroppedImg([...droppedImg, item.src])
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const backgroundColor = isOver ? 'transparent' : 'transparent'
  const delItem = (img: any) => {
    const index = droppedImg.indexOf(img)
    setDroppedImg([...droppedImg.slice(0, index), ...droppedImg.slice(index + 1)])
  }
  return (
    <>
      {droppedImg ? (
        <div
          ref={drop}
          className='w-[72px] h-[32px] absolute bottom-0 flex justify-center items-end'
          style={{ backgroundColor }}
        >
          {droppedImg.length <= 3
            ? droppedImg.map((img) => (
                <img
                  src={img}
                  onDoubleClick={() => delItem(img)}
                  className='w-[22px] h-[22px] border-[1px] border-solid border-[var(--border-5c-clr)] cursor-pointer select-none'
                />
              ))
            : droppedImg.slice(0, 3).map((img) => {
                return (
                  <img
                    src={img}
                    onDoubleClick={() => delItem(img)}
                    className='w-[22px] h-[22px] border-[1px] border-solid border-[var(--border-5c-clr)] cursor-pointer select-none'
                  />
                )
              })}
        </div>
      ) : (
        <div
          ref={drop}
          className='w-[72px] h-[80px] bg-red-500 hexagon absolute bottom-0'
        ></div>
      )}
    </>
  )
}

export default TileItem
