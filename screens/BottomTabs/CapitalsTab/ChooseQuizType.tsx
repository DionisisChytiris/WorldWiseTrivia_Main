import React from 'react'
import MainChooseQuizTypeTemplate from '../Templates/MainChooseQTypeTemplate'


const ChooseQuizType = () => {
  return (
      // <MainChooseQuizTypeTemplate screen='CapitalsHome'/>  
      <MainChooseQuizTypeTemplate screen='CapitalsHome' show='true' lottieAnm={require('../../../assets/LottieAnimation/Capitals.json')}
      lottieHeight='10%'/>
  )
}

export default ChooseQuizType