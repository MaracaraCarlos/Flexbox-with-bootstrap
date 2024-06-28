import mainImg from '../images/illustration-dashboard.png'

const MainImage = () => {
  return (
    <div className='container d-flex justify-content-center pt-4'>
      <img id='main_img' src={mainImg} alt='main image' />
    </div>
  )
}

export default MainImage
