import * as React from 'react';
import {render} from '@testing-library/react';
import {LocalizedComponent} from '../test/testHelpers';
import Index from './index';

describe('rendering of the DatasetContainer', () => {
  const {asFragment} = render(
      <LocalizedComponent>
        <Index location={window.location}/>
      </LocalizedComponent>,
  );

  it('checks if various text fields are visible', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
