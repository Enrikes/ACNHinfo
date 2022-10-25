import React, { useRef, useEffect, useState } from 'react';
function useOutsideAlerter(ref, state) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        state(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideAlerter(props) {
  const state = props.state;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, state);

  return <div ref={wrapperRef}>{props.children}</div>;
}
