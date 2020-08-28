import React from 'react'
import { FiX } from 'react-icons/fi'

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
