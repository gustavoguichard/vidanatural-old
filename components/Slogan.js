import classnames from 'classnames'
import ImageReplace from 'components/ImageReplace'

export default ({ className, ...props }) => (
  <ImageReplace {...props} className={classnames('slogan', className)} src="slogan.png">
    <h2>Eu uso</h2>
    <h3>Cosmética Consciente</h3>
  </ImageReplace>
)
