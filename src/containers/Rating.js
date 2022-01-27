import { connect } from 'react-redux';
import Listing from '../components/Rating';

const mapStateToProps = (state) => {
    return {
        ratings: state.ratings
    }
}

export default connect(mapStateToProps)(Listing);