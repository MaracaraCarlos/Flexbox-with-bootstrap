const Footer = () => {
  return (
    <footer>
      <div className='d-flex justify-content-center gap-3 pt-4'>
        <div>
          <i id='icon_fb' className='bi bi-facebook' />
        </div>
        <div>
          <i id='icon_x' className='bi bi-twitter' />
        </div>
        <div className='icon-link-hover'>
          <i id='icon_ig' className='bi bi-instagram' />
        </div>
      </div>
      <p id='copyright'>&copy; Copyright Ping. All rights reserved.</p>
      <p className='attribution'>
        Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='https://link-profile-maracara.netlify.app/'>Carlos Maracara</a>.
      </p>
    </footer>
  )
}

export default Footer
