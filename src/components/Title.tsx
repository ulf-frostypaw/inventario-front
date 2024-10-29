import React from 'react'
import {Helmet} from 'react-helmet-async'

interface TitleProps {
  title: string;
}

function Title({title}: TitleProps) {
  return (
    <Helmet>
        <title>
            {title} | Clima polar
        </title>
    </Helmet>
  )
}

export default Title