import React from 'react'
import useScript from '@utils'
import '@assets/css/style.css'

export default function Inky (props) {
    const { src } = props
    window.inkjs = require('inkjs')
    window.storyContent = require(`@src/ink/${src}.json`)
    useScript('/ink/main.js', JSON.stringify({
        defer: true
    }))
    return (
        <React.Fragment>
            <div className="outerContainer">
                <div id="story" className="container">
                </div>
            </div>
        </React.Fragment>
    )
}
