import React, { useContext } from 'react'

export default function Try({ themeContext }) {
    let theme = useContext(themeContext)
    console.log(theme)
    return (
        <div style={{ backgroundColor: theme[1], color: theme[0] }}
        >Try</div>
    )
}
