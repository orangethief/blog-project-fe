import { Oval } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Oval
  visible={true}
  height="80"
  width="80"
  color="#F5D54A"
  secondaryColor='#F5D54A'
  strokeWidth={1}
  strokeWidthSecondary={1}
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  )
}

export default Spinner