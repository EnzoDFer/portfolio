import { render, screen } from '@testing-library/react';
import { Slide } from '@/components/presentational/Slide/Slide';

describe(Slide, () => {
  it('renders section tag', () => {
    render(<Slide 
      id='test'
      hsl='hsl(0,0%,0%,.6)'
    />)

    expect(screen.getByTestId('test')).toBeInTheDocument();
  });

  it('colors element correctly', () => {
    render(<Slide 
      id='test'
      hsl='hsl(0,0%,0%,.6)'
    />)
    const slide = screen.getByTestId('test');
    const backgroundColor = window.getComputedStyle(slide).getPropertyValue('background-color');
    expect(backgroundColor).toBe('rgba(0, 0, 0, 0.6)');
  });
})