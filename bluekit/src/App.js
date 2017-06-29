import React, { Component } from 'react';
import BlueKit from 'react-bluekit';
import componentsIndex from './components/componentsIndex';

export default () => {
  return (
    <BlueKit
      componentsIndex={componentsIndex}
      name="MyStyleGuide" // optional
    />
  );
}
