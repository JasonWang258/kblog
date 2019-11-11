import React from 'react'
import { useEffect } from 'react'
import useScript from '@utils'

export default function Comments () {
    let [loaded, error] = useScript('https://my.lestores.com:8888/js/commento.js', {
        "defer": "true",
        "data-auto-init": "false"
    })
    useEffect(() => {
        console.log('commento, useEffect')
        if (loaded) {
            console.log('commento loaded')
            window.commento.main()
        }
    })
    return (
        <React.Fragment>
            <div id="commento"/>
        </React.Fragment>
    )
}
