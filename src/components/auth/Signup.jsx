import React from 'react'
import signupImg from "/assets/images/signup.png"
import Template from './Template'

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup