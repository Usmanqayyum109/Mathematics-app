import React from 'react'


const Detail = () => {
  return (
    <div>
      
      <div className='det'>
      <h1 className='det1'>This is a Mathematics-style game designed for children of elementary grades.</h1>
      <div className='det2'>
      <h4>It has basic Arthimatics questions.</h4>
      <h5>The details of which are as follows:</h5>
      </div>
      <div>
      <h3><span className='word'>1)</span> If there is a plus question, then any two numbers will be generated from 0 to 100.</h3>
      <h3><span className='word'>2)</span> If there is a question of subtraction, then any two numbers will be generated from 0 to 100, but it has been taken care that the second number is smaller than the first number.</h3>
      <h3><span className='word'>3) </span>If there is a multiply question, then any two numbers will be generated from 0 to 10.</h3>
      <h3><span className='word'>4)</span> If there is a question of division, then the first number will be generated from 1 to 100 and the second number will be generated from 0 to 10, but it has also been ensured that the first number is generated in such a way that the second number is fully satisfied and not divided by more than 10, for example, 22 divided by 2. </h3>
      </div>
      <div>
      <h4 className='det2'>*Then the user is asked for a answer and below it is two buttons, one generates the next question and the second checks the answer to the user.</h4>
      </div>
      <div className='user'>
      <h2>It is a useful tool to assess children's Mathematics abilities.</h2>
      </div>
      </div>
      
    </div>
  )
}

export default Detail;
