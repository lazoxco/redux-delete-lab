import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from './Band'

 class Bands extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
  }

  render() {    
    return (
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: band => dispatch({type: 'DELETE_BAND', payload: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bands)