import { Oval } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Oval
  visible={true}
  height="120"
  width="120"
  color="#F5D54A"
  strokeWidth={0.5}
  strokeWidthSecondary={0.5}
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  )
}

export default Spinner