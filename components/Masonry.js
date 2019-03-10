import React, { cloneElement, memo } from 'react'
import times from 'lodash/times'

const boxStyles = {
  alignItems: 'stretch',
  display: 'flex',
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 'min-content',
}

const Masonry = ({ columns, children, adjust = 1, ...props }) => (
  <div {...props} css={boxStyles}>
    {times(columns, index => (
      <div
        css={{ ...boxStyles, flexDirection: 'column' }}
        key={`tile-${index}`}
      >
        {React.Children.toArray(children)
          .filter(
            (child, filterIndex) =>
              (filterIndex + index + (columns - adjust)) % columns === 0,
          )
          .map((child, idx) =>
            cloneElement(child, { ...child.props, key: idx }),
          )}
      </div>
    ))}
  </div>
)

export default memo(Masonry)
