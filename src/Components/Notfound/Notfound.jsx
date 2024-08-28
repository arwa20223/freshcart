import React, { useState } from 'react'
import style from './Notfound.module.css'

export default function Notfound() {



    
  return <>
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">File not found</p>
        <p className="text-gray-500 mt-2">
          The site configured at this address does not contain the requested file.
        </p>
        <p className="text-gray-500 mt-2">
          If this is your site, make sure that the filename case matches the URL as well as any file permissions.
        </p>
        <p className="text-gray-500 mt-2">
          Read the full documentation for more information about using GitHub Pages.
        </p>
        <p className="text-gray-500 mt-2">
          GitHub Status — <a href="https://githubstatus.com/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">githubstatus.com</a>
        </p>
      </div>
    </div>
  </>
}
