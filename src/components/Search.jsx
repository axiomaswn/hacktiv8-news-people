import React from 'react'

export const Search = (props) => {
  return (
    <form>
      <input onChange={props.handles} type='text'></input>
    </form>
  )
}
