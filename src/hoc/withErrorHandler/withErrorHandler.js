import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxilary from '../aux/auxilary'

const withErrorHandler = (WrappedComponent) => {
    return  (props) => {
      return(
        <Auxilary>
          <Modal >
            Somthing didn't work
          </Modal>
          <WrappedComponent {...props} />
        </Auxilary>
      )
    }

}

export default withErrorHandler
