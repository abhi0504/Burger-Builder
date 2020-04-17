import React from 'react'
import Auxilary from '../../hoc/aux/auxilary'
import classes from './Layout.css'

const layout = (props) => {
  return(
    <Auxilary>
    <div>Sidebar , Navbar , Bottombar</div>
    <main class={classes.Content}>
    {props.children}
    </main>
    </Auxilary>
  )
}

export default layout
