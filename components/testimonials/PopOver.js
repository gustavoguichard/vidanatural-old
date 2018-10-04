import Popover, { ArrowContainer } from 'react-tiny-popover'
import TestimonialContent from 'components/testimonials/TestimonialContent'

export default ({ isOpen, onClickOutside, children, ...props }) =>
  <Popover
    isOpen={isOpen}
    onClickOutside={onClickOutside}
    position="right"
    content={args =>
      <ArrowContainer
        {...args}
        disableReposition
        arrowColor="#629f81"
        arrowSize={20}
      >
        <TestimonialContent {...props} />
      </ArrowContainer>}
  >
    {children}
  </Popover>
