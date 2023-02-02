import React from 'react';
import DropdownCSS from './dropdownitem.module.css';
export default function DropdownItem(props) {
  return (
    <div
      className={DropdownCSS['dropdown-item']}
      onClick={() => {
        props.function({ species: props.type, endpoint: props.endpoint });
      }}
    >
      {props.type}
    </div>
  );
}
