import { connect } from 'react-redux';
import { SelectedImage } from '../components/selectedImage';
import { deselectImageAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    selectedImage: state.selectedImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (event, id) => {
      event.preventDefault();
      dispatch(deselectImageAction())
    }
  }
}

export const SelectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedImage)
