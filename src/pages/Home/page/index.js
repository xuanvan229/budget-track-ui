import React from 'react';
import {connect} from 'react-redux'
import {add} from '../redux/action'
import Button from '@material-ui/core/Button';

const Home = (props) => {
    const {counter, add} = props
    return (
        <div>
            <Button variant="contained" color="primary" onClick={add}>
                Add
            </Button>
            <h1>
                {counter}
            </h1>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    const { counter } = state
    return {counter}
  }

  
export default connect(mapStateToProps,{add})(Home)