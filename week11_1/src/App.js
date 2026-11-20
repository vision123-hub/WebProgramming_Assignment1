import { useState } from 'react';
import './App.css';
import FilterBar from './FilterBar';
import ProjectList from './ProjectList';

const courseUrl =
  'https://vision123-hub.github.io/WebProgramming_Assignment1/';
const repositoryUrl =
  'https://github.com/vision123-hub/WebProgramming_Assignment1';
const allProjectsFilter = 'All projects';

export const projects = [
  {
    number: '01',
    category: 'APIs · INTERACTIVE WEB',
    title: 'A collection of API applications',
    description:
      'Small browser experiences that helped me learn how to request, handle, and present data from web APIs.',
    image: 'api-applications.png',
    alt: 'Screenshot of the Week 6 API applications assignment.',
    demoUrl: `${courseUrl}week%206/api-tasks.html`,
    githubUrl: repositoryUrl,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
    className: 'project-card--wide',
  },
  {
    number: '02',
    category: 'SEARCH · OPEN LIBRARY',
    title: 'Progressive book search',
    description:
      'A book finder shaped through several iterations, with search behavior and results refined step by step.',
    image: 'book-search.png',
    alt: 'Screenshot of the Week 7 book search results.',
    demoUrl: `${courseUrl}week%207/search.html`,
    githubUrl: repositoryUrl,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Open Library API'],
    className: 'project-card--offset',
  },
  {
    number: '03',
    category: 'FORMS · VALIDATION',
    title: 'A clearer form experience',
    description:
      'A registration form exercise exploring useful labels, browser validation, and clear feedback.',
    image: 'form-validation.png',
    alt: 'Screenshot of the Week 8 form validation assignment and its feedback.',
    demoUrl: `${courseUrl}week%208%20friday/registration-homework.html`,
    githubUrl: repositoryUrl,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Form validation'],
    className: '',
  },
  {
    number: '04',
    category: 'ACCESSIBILITY · REVIEW',
    title: 'Accessibility in practice',
    description:
      'A course audit focused on making page structure, navigation, and feedback easier to use.',
    image: 'accessibility-audit.png',
    alt: 'Screenshot documenting accessibility improvements from Week 9.',
    demoUrl: `${courseUrl}week%209/accessibility-report.html`,
    githubUrl: repositoryUrl,
    technologies: ['HTML', 'Accessibility', 'Lighthouse'],
    className: 'project-card--offset',
  },
  {
    number: '05',
    category: 'PERFORMANCE · WEB QUALITY',
    title: 'A more considered website',
    description:
      'A performance and SEO review that helped me pay attention to the details behind a finished page.',
    image: 'performance-review.png',
    alt: 'Screenshot of the Week 9 performance review.',
    demoUrl: `${courseUrl}week%209/updated_performance.html`,
    githubUrl: repositoryUrl,
    technologies: ['HTML', 'CSS', 'Lighthouse', 'SEO'],
    className: '',
  },
  {
    number: '06',
    category: 'GIT · PUBLISHING',
    title: 'Publishing with GitHub Pages',
    description:
      'A practical introduction to tracking changes with Git and publishing a website with GitHub Pages.',
    image: 'github-pages.png',
    alt: 'Screenshot of the Week 10 GitHub Pages assignment.',
    demoUrl: `${courseUrl}week%2010_2/github-pages.html`,
    githubUrl: repositoryUrl,
    technologies: ['HTML', 'CSS', 'Git', 'GitHub Pages'],
    className: 'project-card--wide',
  },
];

const technologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
];

const milestones = [
  {
    number: '01',
    title: 'Building the foundations',
    detail:
      'Semantic HTML, page structure, and CSS layouts gave me a starting point for making the web.',
    topics: 'HTML · CSS · RESPONSIVE LAYOUT',
  },
  {
    number: '02',
    title: 'Making pages respond',
    detail:
      'JavaScript exercises and API projects helped me turn static pages into useful interactions.',
    topics: 'JAVASCRIPT · FORMS · WEB APIS',
  },
  {
    number: '03',
    title: 'Thinking about the whole experience',
    detail:
      'I have been learning to consider accessibility, performance, and the details that make a site feel complete.',
    topics: 'ACCESSIBILITY · PERFORMANCE · GIT',
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTechnology, setSelectedTechnology] =
    useState(allProjectsFilter);

  const closeMenu = () => setMenuOpen(false);
  const filteredProjects =
    selectedTechnology === allProjectsFilter
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTechnology),
        );

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand__mark" aria-hidden="true">
              VP
            </span>
            <span className="brand__name">Vision Parajuli</span>
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>

          <nav
            className={`site-nav${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#background" onClick={closeMenu}>
              Background
            </a>
            <a href="#features" onClick={closeMenu}>
              Selected work
            </a>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
            <a className="site-nav__contact" href="#contact" onClick={closeMenu}>
              Let&apos;s connect <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__line" />
              Computer Science · Gachon University
            </p>
            <h1 id="hero-title" aria-label="Hello, I am Vision!">
              Hello, I am
              <span className="hero__name">
                Vision<span className="hero__exclamation">!</span>
              </span>
            </h1>
            <p className="hero__role">
              Computer Science student
              <br />
              <em>&amp; aspiring software developer</em>
            </p>
            <p className="hero__intro">
              I enjoy exploring programming, developing websites, and turning
              ideas into practical digital experiences. I believe good
              technology should be useful, thoughtful, and enjoyable to use.
            </p>
            <div className="hero__actions">
              <a className="button button--dark" href="#contact">
                Get in touch <ArrowIcon />
              </a>
              <a className="text-link" href="#gallery">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-art__topline">
              <span>PERSONAL PORTFOLIO</span>
              <span>01 — 06</span>
            </div>
            <div className="hero-art__monogram">
              <span>V</span>
              <span>P</span>
              <span className="hero-art__orbit" />
            </div>
            <div className="hero-art__caption">
              <span className="hero-art__caption-mark">✳</span>
              <p>
                Learning by making
                <br />
                <em>one project at a time.</em>
              </p>
              <span className="hero-art__caption-index">G / 2026</span>
            </div>
            <span className="hero-art__side-note">CURIOUS BY DESIGN</span>
          </div>

          <div className="hero__foot">
            <span>Based in South Korea</span>
            <span className="hero__foot-rule" />
            <span>Always learning, always building</span>
          </div>
        </section>

        <section className="about section-shell section-pad" id="about">
          <div className="about__heading">
            <p className="eyebrow">A little about me</p>
            <h2>
              About
              <br />
              <em>Vision</em>
            </h2>
            <span className="handwritten-note">student first, maker always</span>
          </div>
          <div className="about__body">
            <p className="about__lead">
              I&apos;m a Computer Science student at Gachon University with a
              growing interest in the way thoughtful software can make everyday
              things a little easier.
            </p>
            <p>
              I like learning by doing: programming, exploring frontend
              development, and building practical websites. I also enjoy trying
              new technologies and using small projects to understand them. My
              coursework has taken me from the basics of HTML and CSS to
              JavaScript interactions, APIs, forms, and accessible design.
            </p>
            <p>
              I&apos;m still at the beginning of my journey, and that is part of
              what I enjoy. There is always a new idea to explore, a better way
              to solve a problem, or another technology to learn.
            </p>
            <div className="about__signature">
              <span className="about__signature-rule" />
              <span>Vision Parajuli</span>
              <span className="about__signature-caption">CS STUDENT · GACHON</span>
            </div>
          </div>
        </section>

        <section
          className="background section-pad"
          id="background"
          aria-labelledby="background-title"
        >
          <div className="background__inner">
            <div className="background__intro">
              <p className="eyebrow eyebrow--light">Background · the path so far</p>
              <h2 id="background-title">
                Learning through
                <br />
                <em>practice.</em>
              </h2>
              <p>
                My background is taking shape one lesson and one project at a
                time. Here are a few parts of the journey I&apos;m building on.
              </p>
              <div className="background__school">
                <span className="background__school-icon" aria-hidden="true">
                  G
                </span>
                <span>
                  <strong>Gachon University</strong>
                  <small>Computer Science</small>
                </span>
              </div>
            </div>
            <div className="timeline">
              {milestones.map((milestone) => (
                <article className="timeline__item" key={milestone.number}>
                  <span className="timeline__number">{milestone.number}</span>
                  <div className="timeline__content">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.detail}</p>
                    <span className="timeline__topics">{milestone.topics}</span>
                  </div>
                  <span className="timeline__plus" aria-hidden="true">
                    +
                  </span>
                </article>
              ))}
            </div>
          </div>
          <span className="background__ornament" aria-hidden="true">
            VP
          </span>
        </section>

        <section
          className="features section-shell section-pad"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things I&apos;ve been making</p>
              <h2 id="features-title">
                Features &amp;
                <br />
                <em>selected work</em>
              </h2>
            </div>
            <p className="section-heading__aside">
              A growing collection of coursework and experiments. Each project
              has taught me something new about making for the web.
            </p>
          </div>

          <article className="featured-project">
            <a
              className="featured-project__visual"
              href={`${courseUrl}week%207/search.html`}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Progressive Book Search assignment"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/book-search.png`}
                alt="Book search interface showing a set of search results."
                loading="lazy"
                decoding="async"
              />
              <span className="featured-project__stamp">
                <span>SELECTED</span>
                <strong>01</strong>
                <span>COURSE WORK</span>
              </span>
            </a>
            <div className="featured-project__details">
              <p className="eyebrow">01 / Search experience</p>
              <h3>
                Finding a
                <br />
                <em>good read.</em>
              </h3>
              <p>
                The book search project grew through a series of small
                improvements. I explored search behavior, Open Library data,
                and ways to make results easier to browse.
              </p>
              <div className="featured-project__tags">
                <span>JavaScript</span>
                <span>Open Library API</span>
                <span>Search UI</span>
              </div>
              <a
                className="text-link text-link--rust"
                href={`${courseUrl}week%207/search.html`}
                target="_blank"
                rel="noreferrer"
              >
                Visit the project <ArrowIcon />
              </a>
            </div>
          </article>

          <div className="feature-notes">
            <p>
              <span className="feature-notes__mark">“</span>
              Small projects. Real practice.
            </p>
            <span>WORKING THROUGH IDEAS, ONE STEP AT A TIME</span>
          </div>
        </section>

        <section
          className="gallery section-pad"
          id="gallery"
          aria-labelledby="gallery-title"
        >
          <div className="gallery__inner">
            <div className="section-heading section-heading--gallery">
              <div>
                <p className="eyebrow">A selection from my coursework</p>
                <h2 id="gallery-title">
                  Project
                  <br />
                  <em>gallery</em>
                </h2>
              </div>
              <p className="section-heading__aside">
                From first API requests to publishing a site, these are a few
                snapshots of what I&apos;ve been learning to build.
              </p>
            </div>
            <FilterBar
              technologies={technologies}
              selectedTechnology={selectedTechnology}
              allProjectsFilter={allProjectsFilter}
              onTechnologyChange={setSelectedTechnology}
            />
            <p className="gallery__result-count" aria-live="polite">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
            <ProjectList projects={filteredProjects} />
            <a
              className="gallery__archive"
              href={courseUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>THERE&apos;S MORE TO EXPLORE</small>
                <strong>Visit my coursework archive</strong>
              </span>
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section
          className="contact section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact__inner">
            <div className="contact__topline">
              <p className="eyebrow eyebrow--light">Open to learning together</p>
              <span>VISION PARAJULI · COMPUTER SCIENCE</span>
            </div>
            <h2 id="contact-title">
              Have an idea?
              <br />
              <em>Let&apos;s connect.</em>
            </h2>
            <p className="contact__copy">
              I&apos;m always glad to talk about programming, web development, or
              what we&apos;re both learning. Find me on GitHub or take a look at
              my personal portfolio.
            </p>
            <div className="contact__actions">
              <a
                className="button button--ivory"
                href="https://github.com/vision123-hub"
                target="_blank"
                rel="noreferrer"
              >
                Find me on GitHub <ArrowIcon />
              </a>
              <a
                className="contact__secondary"
                href="https://vision123-hub.github.io/portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Personal portfolio <ArrowIcon />
              </a>
            </div>
            <span className="contact__monogram" aria-hidden="true">
              VP
            </span>
            <span className="contact__bottomline">
              <span>GACHON UNIVERSITY</span>
              <span>BUILT WITH CURIOSITY</span>
              <a href="#home">BACK TO TOP ↑</a>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
