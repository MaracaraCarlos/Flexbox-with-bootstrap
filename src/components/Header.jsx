import logo from '../images/logo.svg'

const Header = () => {
  return (
    <header>
      <div className='logo_container'>
        <img src={logo} alt='logo' />
      </div>
    </header>
  )
}

export default Header
