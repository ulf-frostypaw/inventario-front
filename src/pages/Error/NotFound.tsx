import React from 'react'
import Layout from '../../components/Layout'

function NotFound() {
  return (
    <Layout title={"Error 404 - Pagina no encontrada."}>
        <h1>404 Not Found</h1>
        <p>La pagina que estabas buscando no esta disponible. Intentalo mas tarde.</p>
    </Layout>
  )
}

export default NotFound