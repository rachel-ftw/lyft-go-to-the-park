import React, { Component } from 'react'
import RequestForm from './RequestForm'
import '../styles/RequestModal.css'

export default class RequestModal extends Component {
  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <span onClick={ () => this.props.toggleRequestModal(false) }>X</span>
          <RequestForm getACar={ this.props.getACar } />
        </div>
      </div>
    )
  }
}
