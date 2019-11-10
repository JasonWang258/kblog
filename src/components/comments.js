import React from "react"
import useScript from '@utils'

export default function Comments () {
    useScript('https://my.lestores.com:8888/js/commento.js', {
        defer: true
    })
    return (
        <React.Fragment>
            <div id="commento"/>
        </React.Fragment>
    )
}
