import { memo } from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = ({ size = 30, absolute = true }) => {
  const positioning = absolute
    ? {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
      }
    : {}
  const style = {
    ...positioning,
    width: `${size}px`,
    height: `${size}px`,
  }
  return (
    <span style={style} className="spinning">
      <FaSpinner />
    </span>
  )
}

export default memo(Loading)
