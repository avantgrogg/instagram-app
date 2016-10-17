import { connect } from 'react-redux';
import { SearchForm } from '../components/SearchForm';
import { performImgurSearch } from '../api';

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      const val = $('.js-search-input').val();
      performImgurSearch(val, dispatch);
    }
  }
}

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
