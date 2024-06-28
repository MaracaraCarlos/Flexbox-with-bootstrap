import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header'
import Title from './components/Title'
import InputBtn from './components/InputBtn'
import MainImage from './components/MainImage'
import Footer from './components/Footer'

function App () {
  return (
    <div className='container-lg d-flex flex-column justify-content-center align-items-center'>
      <Header />
      <Title />
      <InputBtn />
      <MainImage />
      <Footer />
    </div>
  )
}

export default App
