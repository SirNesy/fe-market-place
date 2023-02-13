import React from 'react'

function ErrorPage({message}) {
    // console.log(message);
  return (
    <div>
        <h2>
            {message.message}
            {/* {message.response} */}
        </h2>
        <h2>Kindly Login as a user</h2>
    </div>
  )
}

export default ErrorPage