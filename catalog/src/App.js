import React, { Component } from 'react';
import { Catalog } from 'catalog';

import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Loader from './components/Loader/Loader';

class App extends Component {
  render() {
    return (
      <Catalog
        title='My Styleguide'
        basePath='/'
        pages={[
          {
            path: '/',
            title: 'Introduction',
            src: require('./docs/Intro.md')
          },
          {
            title: 'Components',
            pages: [
              {
                imports: { Header },
                path: '/headers',
                title: 'Headers',
                src: require('./components/Header/Header.md')
              },
              {
                imports: { Button },
                path: '/buttons',
                title: 'Buttons',
                src: require('./components/Button/Button.md')
              },
              {
                imports: { Input },
                path: '/inputs',
                title: 'Inputs',
                src: require('./components/Input/Input.md')
              },
              {
                imports: { Loader },
                path: '/loaders',
                title: 'Loaders',
                src: require('./components/Loader/Loader.md')
              }
            ]
          },
          {
            path: '/colors',
            title: 'Colors',
            src: require('./docs/Colors.md')
          },
        ]}
      />
    );
  }
}

export default App;
