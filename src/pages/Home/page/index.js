import React from 'react';
import {connect} from 'react-redux'
import {add} from '../redux/action'
import Button from '@material-ui/core/Button';
import Calendar from "../../../components/Calendar"
const Home = (props) => {
    const {counter, add} = props
    return (
        <div>
           <Calendar />
        </div>
        
    )
}

const mapStateToProps = (state) => {
    const { counter } = state
    return {counter}
  }

  
export default connect(mapStateToProps,{add})(Home)