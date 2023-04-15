import './Contact.css'
import { BlueBtn } from '../../ui/BlueBtn/BlueBtn'

import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <main className='contact__container'>
      <p className='contact--text'>Thanks for viewing my project</p>
      <BlueBtn className='back__button' styleCheck onClick={() => navigate(-1)}>To mainstage</BlueBtn>
    </main>
  )
}

export default Contact