import React, { useEffect } from 'react';
import CustomTextInput from './CustomTextInput';

export default function ParentTextInput() {
  const inputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <>
      <CustomTextInput inputRef={inputRef} />
    </>
  );
}
