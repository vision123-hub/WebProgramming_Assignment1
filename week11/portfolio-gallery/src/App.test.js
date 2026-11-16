import { fireEvent, render, screen, within } from '@testing-library/react';
import App, { projects } from './App';

test('renders all portfolio sections and all six project cards', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /hello, i am vision!/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /about vision/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /learning through practice/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /features & selected work/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /project gallery/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /have an idea/i })).toBeInTheDocument();

  const gallery = screen.getByRole('region', { name: /project gallery/i });
  expect(within(gallery).getAllByRole('article')).toHaveLength(projects.length);
  expect(
    within(gallery).getByRole('button', { name: 'All projects' }),
  ).toHaveAttribute('aria-pressed', 'true');
});

test('each project displays its description, technology stack, and verified links', () => {
  render(<App />);

  const gallery = screen.getByRole('region', { name: /project gallery/i });
  const cards = within(gallery).getAllByRole('article');

  cards.forEach((card, index) => {
    const project = projects[index];
    expect(within(card).getByRole('heading', { name: project.title })).toBeInTheDocument();
    expect(within(card).getByText(project.description)).toBeInTheDocument();

    project.technologies.forEach((technology) => {
      expect(within(card).getByText(technology)).toBeInTheDocument();
    });

    expect(
      within(card).getByRole('link', { name: /^live demo$/i }),
    ).toHaveAttribute('href', project.demoUrl);
    expect(
      within(card).getByRole('link', { name: /github repository/i }),
    ).toHaveAttribute('href', project.githubUrl);
  });
});

test('filters projects by technology and restores all projects', () => {
  render(<App />);

  const gallery = screen.getByRole('region', { name: /project gallery/i });
  fireEvent.click(within(gallery).getByRole('button', { name: 'Fetch API' }));

  const filteredCards = within(gallery).getAllByRole('article');
  expect(filteredCards).toHaveLength(1);
  expect(
    within(filteredCards[0]).getByRole('heading', {
      name: 'A collection of API applications',
    }),
  ).toBeInTheDocument();
  expect(within(gallery).getByText('Showing 1 of 6 projects')).toBeInTheDocument();

  fireEvent.click(within(gallery).getByRole('button', { name: 'All projects' }));
  expect(within(gallery).getAllByRole('article')).toHaveLength(6);
  expect(within(gallery).getByText('Showing 6 of 6 projects')).toBeInTheDocument();
});

test('mobile navigation opens and closes after choosing a section', () => {
  render(<App />);

  const toggle = screen.getByRole('button', { name: /open navigation menu/i });
  fireEvent.click(toggle);

  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Background' }));

  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
