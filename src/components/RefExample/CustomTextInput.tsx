import React from 'react'

type CustomTextInputPropsType = {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function CustomTextInput({ inputRef }: CustomTextInputPropsType) {
  return (
    <div>
      <input ref={inputRef} placeholder="React ref example" />
    </div>
  )
}