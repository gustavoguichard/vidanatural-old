const TRANSITION_SPEED = '.3s'

export const absoluteCover = (gap = 0) => ({
  position: 'absolute',
  top: gap,
  bottom: gap,
  left: gap,
  right: gap,
})

export const bgCover = path => ({
  backgroundImage: `url(${path})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const appearOnHover = (time = TRANSITION_SPEED) => ({
  opacity: 0,
  transition: `${time} opacity`,
  '&:hover': {
    opacity: 1,
  },
})

export const centralize = () => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
})

export const saturateOnHover = (time = TRANSITION_SPEED) => ({
  filter: 'saturate(0)',
  transition: `${time} filter`,
  '&:hover': {
    filter: 'saturate(1)',
  },
})
