import { Helmet } from "react-helmet"
import React from "react"

export default function Comments () {
    return (
        <React.Fragment>
            <div id="commento"/>
            <Helmet>
                <script 
                    defer 
                    src="https://my.lestores.com:8888/js/commento.js"
                />
            </Helmet>
        </React.Fragment>
    )
}
