import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    //   Keys help React identify which items have changed, are added, or are removed.
    // Keys should be given to the elements inside the array to give the elements a stable identity:
    // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
    <li key={number.toString()}>{number + ' ok'}</li>
  ));
  return <ul>{listItems}</ul>;
}

export function ListRender() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <NumberList numbers={numbers} />
    </>
  );
}
