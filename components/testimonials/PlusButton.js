import classnames from 'classnames'
import { FaPlus } from 'react-icons/fa'

export default ({ number = Infinity, isMobile, floating, onClick }) =>
  <a
    href="#"
    title="Mais depoimentos"
    className={classnames({ 'plus-bt': true, floating: floating })}
    onClick={onClick(number, isMobile)}
  >
    <FaPlus />
  </a>
