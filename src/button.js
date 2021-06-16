import React from 'react';
import './style.css';

export default function Button(props) {
  const {clickAction} = props;
  return (
    <button className={'button'} onClick={clickAction}>
      Submit
    </button>
  );
}
