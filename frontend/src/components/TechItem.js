import React from 'react'
import { FiX } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button type='button' onClick={onDelete}>
        <FiX></FiX>
      </button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'oculto',
}

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}
