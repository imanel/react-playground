import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='all'>All</FilterLink>
    {' '}
    <FilterLink filter='actuve'>Active</FilterLink>
    {' '}
    <FilterLink filter='cinoketed'>Completed</FilterLink>
  </p>
)

export default Footer
