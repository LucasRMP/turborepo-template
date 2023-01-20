import React from 'react'

export const Button: React.FC = ({ children }) => {
  return (
    <button
      type="button"
      role="button"
      className="bg-green-500 hover:bg-green-700 h-12 text-white font-bold py-2 px-4 rounded transition-all"
    >
      {children}
    </button>
  )
}
