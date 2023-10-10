import React from 'react'

const BlogParts = ({Heading , data}) => {
  return (
    <div className='flex flex-col'>
        <p>{Heading}</p>
        <p>{data}</p>
    </div>
  )
}

export default BlogParts