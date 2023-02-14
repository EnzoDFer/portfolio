import { render, screen } from '@testing-library/react';
import { Slide } from '@/components/presentational/Slide/Slide';

describe(Slide, () => {
  it('renders section tag', () => {

    render(<Slide 
      id='test'
      hsl='hsl(0,0,0,.6)'
    />)

    expect(screen.getByTestId('test')).toBeInTheDocument();
  })
})