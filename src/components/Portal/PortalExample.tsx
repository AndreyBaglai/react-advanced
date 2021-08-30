import React from 'react';
import ReactDOM from 'react-dom';

const rootModal: HTMLElement = document.getElementById('modal-root') as HTMLElement;

export default function PortalExample() {
  return ReactDOM.createPortal(
    <h3 style={{ textAlign: 'center' }}>Hello from react portal!</h3>,
    rootModal,
  );
}
