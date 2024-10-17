import React from 'react'
import LogoutButton from './LogoutButton'
import Conversation from './conversation'
import SearchInput from './searchinput'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <LogoutButton />
    </div>
  )
}

export default Sidebar