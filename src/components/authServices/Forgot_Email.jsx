import React, { useState } from 'react'
import ForgotPassword from './ForgotPassword';
import VerifyEmail from './VerifyEmail';

const Forgot_Email = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);


  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center py-32'>
        {

          !emailSent ? <ForgotPassword email={email} setEmail={setEmail} setEmailSent={setEmailSent} /> : <VerifyEmail email={email} />

        }
      </div>
    </div>
  )
}

export default Forgot_Email;