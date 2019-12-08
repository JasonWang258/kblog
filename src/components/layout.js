import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import HeaderLinks from '@components/Header/HeaderLinks'
import Copyright from '@components/Copyright'

const Layout = (props) => {
  const { title, children } = props
  const { ...rest } = props

  // if (location.pathname === rootPath || location.pathname === blogPath) {
  return (
    <div style={{
      backgroundColor: "#f9f9f9"
    }}>
      <Header
        color="transparent"
        brand={title}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <main>{children}</main>
      <Footer
        rightChildren={<Copyright />}
      />
    </div>
  )
}

export default Layout
