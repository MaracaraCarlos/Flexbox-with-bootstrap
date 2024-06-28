import React, { useState } from 'react'

const InputBtn = () => {
  const [email, setEmail] = useState('')
  const [errorMsgEmail, setErrorMsgEmail] = useState(false)
  const [successMsg, setSuccessMsg] = useState(false)

  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  const messageError = () => {
    if (validateEmail(email)) {
      setErrorMsgEmail(false)
    } else if (!validateEmail(email)) {
      setErrorMsgEmail(true)
    }
  }

  const login = (email) => {
    if (validateEmail(email)) {
      setSuccessMsg(true)
      console.log('Login correcto')
    } else {
      console.log('Login incorrecto')
    }
  }

  return (
    <div>
      <div className={successMsg ? 'success_msg' : 'hide'}>
        <h5>Confirmed subscription!</h5>
      </div>
      <form
        onSubmit={
          (e) => {
            e.preventDefault()
            messageError()
            login(email)
          }
        }
        className='d-flex flex-wrap gap-3'
      >
        <div id='container_input'>
          <input
            className='form-control rounded-pill ps-2 w-100'
            type='email'
            autoComplete='off'
            placeholder='Your email address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={errorMsgEmail ? 'fn_required' : 'hide'}>
            Please provide a valid email address
          </p>
        </div>
        <div id='container_btn'>
          <button
            id='btn'
            type='submit'
            className='btn btn-primary rounded-pill ps-4 pe-4 text-white w-100'
          >
            Notify Me
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputBtn
