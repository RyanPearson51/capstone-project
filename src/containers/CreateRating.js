import { connect } from 'react-redux';
import AddRating from '../components/AddRating';
import { addBusiness } from '../redux/action';

const mapStateToProps = (state) => {
    return {
        ratings: state.ratings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRating);