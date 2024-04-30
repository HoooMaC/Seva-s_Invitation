import Button from '../components/Button'

import logo from '../assets/images/S_A.png'

import './First.css'

const First = () => {
  return (
    <div className="container  welcome-content">
        <img src={logo} alt="seva dan alham" />
        <Button to='/letter'>Buka Undangan</Button>
    </div>
  )
}

export default First;