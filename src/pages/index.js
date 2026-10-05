import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const Skills = [
  {
    title: 'Documentation',
    items: [
      'Docs-as-code',
      'Diátaxis',
      'API reference',
      'Information architecture',
      'Style guides',
      'UX copy',
    ],
  },
  {
    title: 'Data & Analytics',
    items: [
      'SQL',
      'Python',
      'Tableau',
      'BigQuery',
      'Google Analytics',
      'Data-processing workflows',
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      'GitHub',
      'Docusaurus',
      'ReadMe',
      'Swagger',
      'Confluence',
      'Jira',
      'Figma',
      'Salesforce',
    ],
  },
];

const Projects = [
  {
    title: 'dochealth',
    description:
      'A Python tool and Streamlit dashboard to measure the health of any docs-as-code repository. The CLI reads the repo\'s Git history and parses each page to prose to show which pages look maintained but aren\'t.',
    to: '/docs/projects/dochealth',
    live: {label: 'Live dashboard', href: 'https://dochealth.streamlit.app/'},
  },
  {
    title: 'Shoreline docs-as-code migration',
    description:
      'A complete migration from Freshdesk to a Docusaurus site using Diátaxis principles.',
    to: '/docs/projects/shoreline',
    image: {src: '/img/shoreline/docusaurus-getting-started.png', alt: 'The Shoreline documentation getting-started page'},
    logo: {src: '/img/logos/shoreline-icon-white.png', alt: 'Shoreline Wind logo', color: '#2db9cf'},
  },
  {
    title: 'Super.AI: documentation and API reference',
    description:
      'Building documentation from the ground up using Diátaxis principles.',
    to: '/docs/projects/superai',
    image: {src: '/img/superai/landing-page.png', alt: 'The super.AI documentation landing page'},
    logo: {src: '/img/logos/superai-icon-white.png', alt: 'super.AI logo', color: '#8010f0'},
  },
  {
    title: 'Adjust: help center launch',
    description:
      'Complete redesign, rewrite, and migration effort from simple SSG to Salesforce.',
    to: '/docs/projects/adjust-help-center',
    image: {src: '/img/adjust-help-center/new.png', alt: 'The Adjust Help Center landing page'},
    logo: {src: '/img/logos/adjust-white.png', alt: 'Adjust logo', color: '#111111'},
  },
  {
    title: 'Adjust: new features and APIs',
    description:
      'A selection of features and APIs that I documented, named, or helped shape throughout development.',
    to: '/docs/projects/adjust-new-features',
    image: {src: '/img/adjust-new-features/audience-builder.png', alt: 'The Adjust Audience Builder documentation page'},
    logo: {src: '/img/logos/adjust-white.png', alt: 'Adjust logo', color: '#111111'},
  },
];

const Experience = [
  {
    role: 'Data Analytics Bootcamp',
    company: 'WBS Coding School',
    dates: 'May 2026 – August 2026',
    summary:
      'Intensive training in SQL, Python, Tableau, and BigQuery, building data skills to complement my technical-writing practice.',
  },
  {
    role: 'Technical Writer',
    company: 'Shoreline',
    dates: 'April 2023 – September 2025',
    summary:
      'Led the migration of 200+ pages of product documentation from Freshdesk to a docs-as-code stack (Docusaurus, Markdown, Git) within 12 months. Sole writer across two web apps, a mobile app, and two APIs.',
    caseStudies: [
      {label: 'Read the case study', to: '/docs/projects/shoreline'},
    ],
  },
  {
    role: 'Technical Writer',
    company: 'Infarm',
    dates: 'October 2021 – January 2023',
    summary:
      'Wrote installation, product, and user manuals for farming-hardware systems, with versioned documentation across 3 farm generations and 10+ subcomponents.',
  },
  {
    role: 'Technical Writer',
    company: 'super.AI',
    dates: 'April 2019 – September 2021',
    summary:
      'Owned all documentation for a machine-learning data platform: nearly 100 pages written from scratch, including an API reference covering around 30 endpoints.',
    caseStudies: [
      {label: 'Read the case study', to: '/docs/projects/superai'},
    ],
  },
  {
    role: 'Technical Writer',
    company: 'Adjust',
    dates: 'December 2016 – December 2018',
    summary:
      'Built a client-facing help center in Salesforce, set the style standards adopted across teams, and documented 10 major and 50+ minor feature releases.',
    caseStudies: [
      {label: 'Help center launch', to: '/docs/projects/adjust-help-center'},
      {label: 'New features and APIs', to: '/docs/projects/adjust-new-features'},
    ],
  },
  {
    role: 'Editor',
    company: 'AndroidPIT',
    dates: 'October 2015 – October 2016',
    summary:
      'Wrote and published articles for an English-language site with 20M monthly unique visitors.',
  },
];

const Socials = [
  {
    label: 'Email',
    href: 'mailto:christopher.marshall.works@gmail.com',
    path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christopher-marshall-957772a0/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/christopher-marshall',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          className={styles.monogram}
          src={useBaseUrl('/img/monogram-white.svg')}
          alt=""
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.socials}>
          {Socials.map(({label, href, path}) => (
            <a key={label} href={href} aria-label={label} title={label}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/#projects">
            See my projects
          </Link>
          <a
            className="button button--secondary button--lg"
            href={useBaseUrl('/christopher-marshall-cv.pdf')}
            download>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}

function ProjectImage({to, image, logo}) {
  return (
    <Link to={to} className={clsx('card__image', styles.projectBanner)}>
      <div className={styles.projectBrand} style={{backgroundColor: logo.color}}>
        <img src={useBaseUrl(logo.src)} alt={logo.alt} />
      </div>
      <img
        className={styles.projectImage}
        src={useBaseUrl(image.src)}
        alt={image.alt}
      />
    </Link>
  );
}

function ProjectButtons({to, live}) {
  return (
    <div className={clsx('card__footer', styles.buttons, styles.cardButtons)}>
      <Link className="button button--primary" to={to}>
        Read the case study
      </Link>
      {live && (
        <Link className="button button--secondary" href={live.href}>
          {live.label}
        </Link>
      )}
    </div>
  );
}

function FeaturedProject({title, description, to, live}) {
  return (
    <div className={clsx('card', styles.featuredCard)}>
      <div className="row">
        <div className="col col--5">
          <div className="card__header">
            <span className="badge badge--primary">Featured project</span>
            <Heading as="h3" className={styles.featuredTitle}>
              {title}
            </Heading>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <ProjectButtons to={to} live={live} />
        </div>
        <div className="col col--7">
          <Link to={to}>
            <img
              className={styles.featuredImage}
              src={require('@site/docs/projects/img/dochealth-dashboard.png').default}
              alt="The dochealth dashboard showing documentation health metrics for the Docusaurus docs"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [featured, ...others] = Projects;
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" id="projects">
          Projects
        </Heading>
        <FeaturedProject {...featured} />
        <div className="row">
          {others.map(({title, description, to, live, logo, image}) => (
            <div key={to} className={clsx('col col--6', styles.projectCol)}>
              <div className={clsx('card', styles.projectCard)}>
                {image && <ProjectImage to={to} image={image} logo={logo} />}
                <div className="card__header">
                  <Heading as="h3">{title}</Heading>
                </div>
                <div className="card__body">
                  <p>{description}</p>
                </div>
                <ProjectButtons to={to} live={live} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Skills</Heading>
        <div className="row">
          {Skills.map(({title, items}) => (
            <div key={title} className="col col--4">
              <Heading as="h3">{title}</Heading>
              <div className={styles.tags}>
                {items.map((item) => (
                  <span key={item} className="badge badge--secondary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" id="experience">
          Experience
        </Heading>
        {Experience.map(({role, company, dates, summary, caseStudies}) => (
          <div key={company} className={clsx('row', styles.job)}>
            <div className="col col--4">
              <strong>{role}</strong>, {company}
              <div className={styles.dates}>{dates}</div>
            </div>
            <div className="col col--8">
              {summary}
              {caseStudies && (
                <div className={styles.caseStudies}>
                  {caseStudies.map(({label, to}) => (
                    <Link key={to} to={to}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="Portfolio of Christopher Marshall, a senior technical writer in Berlin who pairs docs-as-code with data analytics.">
      <HomepageHeader />
      <main>
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
    </Layout>
  );
}
