import * as React from 'react';
import * as actions from '../actions/actions'
import FlightContainers from './FlightContainers.js';
import { connect } from 'react-redux';
import { Welcome } from '../components/Welcome';

const mapStateToProps = state => ({
    modal: state.flights.modal
})

const mapDispatchToProps = dispatch => ({
    changeModal: () => dispatch(actions.changeModal())
})

//smart component
const MainContainer = (props) => {

    const conditionalRender = () => {
        props.fields === false ? <Welcome /> : <FlightContainers />
    }
    
    return (
        <div >
            <FlightContainers modal={props.changeModal}/>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);