import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'
import api from '~/services/api'

function AvatarInput({ ...rest }) {
  const { defaultValue, registerField } = useField('avatar')

  const [preview, setPreview] = useState(defaultValue && defaultValue.url)
  const [file, setFile] = useState(defaultValue && defaultValue.id)

  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file'
      })
    }
  }, [ref, registerField])

  async function handleChange(e) {
    const data = new FormData()

    data.append('file', e.target.files[0])

    const response = await api.post('files', data)

    const { url, id } = response.data
    setFile(id)
    setPreview(url)
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            'data:image/jpeg;base64,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'
          }
          alt=""
        />
        <input
          type="file"
          name=""
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  )
}

export default AvatarInput
