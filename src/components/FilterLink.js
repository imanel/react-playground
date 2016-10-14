import { connect } from 'react-redux'
import Link from './Link'
import { setVisibilityFilter } from '../actions'

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchLinkProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  },
})

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchLinkProps
)(Link)

export default FilterLink
