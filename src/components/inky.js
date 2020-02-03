import React from 'react'
import { useEffect } from 'react'
import useScript from '@utils'
import '@assets/css/style.css'

const inkjs = require('inkjs')
export default function Inky (props) {
    const { src } = props
    const storyContent = require(`@src/ink/${src}.json`)
    useEffect(
        () => {
            // If there's no window there's nothing to do for us
            if (! window) {
                return
            }
            window.inkjs = inkjs
            window.storyContent = storyContent
        }
    )
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
