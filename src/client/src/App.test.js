import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { name: 'Veronika Lacusova' } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the App component', async () => {
    const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(getByText('Curriculum Vitae')).toBeInTheDocument();
    expect(getByText('Photographies')).toBeInTheDocument();
    expect(getByText('Connect at:')).toBeInTheDocument();
  });
  // it('should handle error when fetching data from the API', async () => {
  //   const error = new Error({ data: { message: 'Something went wrong' } });
  //   const rejectedFetch = axios.get.mockRejectedValue(error);

  //   const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
  //   await waitFor(() => expect(rejectedFetch).toHaveBeenCalledTimes(1));

  //   expect(getByText('Something went wrong')).toBeInTheDocument();
  // });
});
