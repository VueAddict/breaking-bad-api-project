import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    const handleChange = q => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form >
                <input onChange={e => handleChange(e.target.value)} type="text" value={text} className='form-control' placeholder='Search characters' autoFocus />
            </form>
        </section>
    )
}

export default Search