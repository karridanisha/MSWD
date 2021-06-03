import React from 'react'
import { Part } from './Part'


const Content = (props) => {
  return (
    <div>
      { props.parts.map(element => (
        <Part part={element.name} exercises={element.exercises} />)
      )}
    </div>
  );
};

export { Content };
