import React from 'react';

export default function Child(props: any) {
  return (
    <div>
      {props.children}
      {console.log(props)}
    </div>
  )
}