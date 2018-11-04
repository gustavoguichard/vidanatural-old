import { memo } from 'react'

const PageBreadCrumb = ({ title, ...props }) => (
  <div className="page-breadcrumb" {...props}>
    <img src="/static/page-feather.png" alt="icone" />
    <span>{title}</span>
  </div>
)

export default memo(PageBreadCrumb)
