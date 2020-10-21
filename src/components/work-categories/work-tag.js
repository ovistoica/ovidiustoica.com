import {themeGet} from '@styled-system/theme-get';
import React from 'react';
import Button from '../button';

export const WorkTag = ({tagName, onClick, selected, className}) => {
  const addAllClasses = ['hashtag'];
  if (className) {
    addAllClasses.push(className);
  }
  return (
    <Button
      title={`#${tagName}`}
      icon={null}
      mx="10px"
      my="5px"
      isTag={true}
      className={addAllClasses.join(' ')}
      bg={selected ? 'secondaryText' : null}
      hoverColor={selected ? themeGet('colors.mainText') : null}
      onClick={onClick}
    />
  );
};
