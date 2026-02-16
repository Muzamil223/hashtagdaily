import React from 'react'

const Loader = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 rounded-full border-primary-200"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 rounded-full border-primary-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  )
}

export default Loader