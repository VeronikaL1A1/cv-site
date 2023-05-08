import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PhotoPage from './PhotoPage';

describe('PhotoPage Component', () => {
  const mockData = {
    name: 'Veronika',
  };
  it('should render about me details, pictures and buttons', () => {
    const { getByText, getAllByRole } = render(<PhotoPage data={mockData} />);
    expect(getByText('Veronika')).toBeInTheDocument();
    expect(getAllByRole('button')).toHaveLength(2);
  });
  it('should click on the next btn and display second picture', () => {
    const { getAllByRole, getByAltText } = render(<PhotoPage data={mockData} />);
    const btn = getAllByRole('button')[1];
    fireEvent.click(btn);
    expect(getByAltText('myPhoto-1')).toBeInTheDocument();
  });
  it('should  click on the previous btn and display first picture', () => {
    const { getAllByRole, getByAltText } = render(<PhotoPage data={mockData} />);
    const btn = getAllByRole('button')[0];
    fireEvent.click(btn);
    expect(getByAltText('myPhoto-0')).toBeInTheDocument();
  });
});
