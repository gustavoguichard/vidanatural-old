import React, { cloneElement, memo } from 'react'
import times from 'lodash/times'

const Masonry = ({ columns, children, ...props }) => (
  <div {...props} className="masonry-tile">
    {times(columns, index => (
      <div className="vert-tile" key={`tile-${index}`}>
        {React.Children.toArray(children)
          .filter(
            (child, filterIndex) =>
              (filterIndex + index + (columns - 1)) % columns === 0,
          )
          .map((child, idx) =>
            cloneElement(child, { ...child.props, key: idx }),
          )}
      </div>
    ))}
    <style jsx>{`
      .masonry-tile {
        align-items: stretch;
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        min-height: min-content;
      }
      .vert-tile {
        align-items: stretch;
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        min-height: min-content;
        flex-direction: column;
      }
    `}</style>
  </div>
)

export default memo(Masonry)
