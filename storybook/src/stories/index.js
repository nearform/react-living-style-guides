import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Loader from '../components/Loader/Loader';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Header', module)
  .add('default', () => <Header>Sample Header</Header>)
  .add('custom background color', () => <Header backgroundColor="#1abc9c">Sample Header</Header>);

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('custom color', () => <Button onClick={action('clicked')} backgroundColor="#1abc9c">Hello Button</Button>)
  .add('disabled', () => <Button onClick={action('clicked')} disabled>Hello Button</Button>);

storiesOf('Input', module)
  .add('default', () => <Input onFocus={action('focused')} placeholder='Search...' />)
  .add('with error', () => <Input onFocus={action('focused')} placeholder='Search...' error />);

storiesOf('Loader', module)
  .add('default', () => <Loader />)
  .add('custom color', () => <Loader color="#1abc9c" />)
  .add('custom size', () => <Loader size={10} />)
  .add('custom speed', () => <Loader duration={0.5} />);
