import React from 'react'

const TopNav = (props:any) => {
  return (
    <div className='border-b py-2 px-4 text-sm'>{props.pageTitle}</div>
  )
}

export default TopNav