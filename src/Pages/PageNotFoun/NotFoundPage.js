import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-6xl font-extrabold text-gray-900 mb-4">404</div>
      <div className="text-2xl font-semibold text-gray-700 mb-8">Page Not Found</div>
      <p className="text-gray-600 text-center mb-8">
        The page you are looking for doesn't exist. <br />
        Please check the URL or go back to the{' '}
        <Link to="/" className="text-blue-500 hover:underline">
          homepage
        </Link>
        .
      </p>
    </div>
  )
}

export default NotFoundPage