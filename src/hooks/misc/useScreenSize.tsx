const useScreenSize = () => {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  const size = {
    width: width,
    height: height,
  }
  return size
}

export default useScreenSize