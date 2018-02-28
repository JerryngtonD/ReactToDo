import React from 'react';

export default function Button(props) {
  return <button style={{ color: props.color }}>{props.children}</button>;
}
