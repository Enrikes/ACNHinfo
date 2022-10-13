import React from 'react';
export default function DropdownItem(props) {
  return (
    <div
      className='dropdown-item'
      onClick={() => {
        props.function({ species: props.type, endpoint: props.endpoint });
      }}
    >
      {props.type}
    </div>
  );
}
