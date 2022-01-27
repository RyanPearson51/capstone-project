import { connect } from 'react-redux';
import Ratings from '../components/Ratings';
import { removeBusiness } from '../redux/action';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        ratings: state.ratings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);