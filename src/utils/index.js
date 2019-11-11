import { useState, useEffect } from 'react'

export default function useScript (src, args) {
    const [state, setState] = useState({
        loaded: false,
        error: false
    })
    
    useEffect(
        () => {
            // If there's no window there's nothing to do for us
            if (! window) {
                return
            }
            // create Script
            let script = document.createElement('script')
            script.src = src
            let attributes = JSON.parse(args)
            Object.keys(attributes).map(key => {
                script[key] = attributes[key]
            })
            const onScriptLoad = () => {
                setState({
                    loaded: true,
                    error: false
                })
            }
            const onScriptError = () => {
                script.remove()
                setState({
                    loaded: false,
                    error: true
                })
            }
            script.addEventListener('load', onScriptLoad)
            script.addEventListener('error', onScriptError)
            // Add script to document body
            document.body.appendChild(script)
            // cleanup
            return () => {
                script.removeEventListener('load', onScriptLoad)
                script.removeEventListener('error', onScriptError)
            }
        },
        [src, args]
    )
    return [state.loaded, state.error]
}
