'use client'

import { ChangeEvent, useState } from 'react'

export default function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onMediaSelect(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (files) {
      const previewURL = URL.createObjectURL(files[0])
      setPreview(previewURL)
    }
  }

  return (
    <>
      <input
        type="file"
        id="media"
        name="media"
        className="invisible h-0 w-0"
        accept="image/*"
        onChange={onMediaSelect}
      />
      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
