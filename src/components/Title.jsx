import React from 'react'
import {Helmet} from 'react-helmet-async'

function Title({title}) {
  return (
    <Helmet>
        <title>
            {title} | Clima polar
        </title>
    </Helmet>
  )
}

export default Title