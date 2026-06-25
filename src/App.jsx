import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-the-fold sections are code-split so the initial payload stays light.
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Metrics = lazy(() => import('./components/Metrics'));
const Certifications = lazy(() => import('./components/Certifications'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Metrics />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
