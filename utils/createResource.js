import { unstable_createResource } from 'react-cache'

let createResource

if (unstable_createResource) {
  createResource = unstable_createResource
}

export const ImgResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const image = process.browser && new Image()
    image.src = src
    image.onload = resolve
    image.onerror = reject
  })
})

export const Img = props => {
  ImgResource.read(props.src)
  return <img {...props} />
}

export default createResource
