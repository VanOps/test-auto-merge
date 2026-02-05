import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

describe('Dashboard Component', () => {
  const mockUser = { name: 'John Doe' };

  test('renders user name', () => {
    render(<Dashboard user={mockUser} />);
    expect(screen.getByText(/Welcome, John Doe/i)).toBeInTheDocument();
  });

  test('displays all metrics', () => {
    render(<Dashboard user={mockUser} />);
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('Conversion')).toBeInTheDocument();
  });
});
