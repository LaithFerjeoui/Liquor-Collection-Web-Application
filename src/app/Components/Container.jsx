import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {children}
      </div>
    </div>
  )
}

export default Container