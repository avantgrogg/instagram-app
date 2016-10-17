import { connect } from 'react-redux';
import { ImageGrid } from '../components/ImageGrid';
import { selectedImageAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    images: state.grid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (event, id) => {
      event.preventDefault();
      const imageId = id;
      dispatch(selectedImageAction(imageId))
    }
  }
}

export const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid)
