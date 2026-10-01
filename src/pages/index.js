import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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

const Experience = [
  {
    role: 'Data Analytics Bootcamp',
    company: 'WBS Coding School',
    dates: '2026',
    summary:
      'Intensive training in SQL, Python, Tableau, and BigQuery, building data skills to complement my technical-writing practice.',
  },
  {
    role: 'Technical Writer',
    company: 'Shoreline',
    dates: 'April 2023 – September 2025',
    summary:
      'Led the migration of 200+ pages of product documentation from Freshdesk to a docs-as-code stack (Docusaurus, Markdown, Git) within 12 months. Sole writer across two web apps, a mobile app, and two APIs.',
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
  },
  {
    role: 'Technical Writer',
    company: 'Adjust',
    dates: 'December 2016 – December 2018',
    summary:
      'Built a client-facing help center in Salesforce, set the style standards adopted across teams, and documented 10 major and 50+ minor feature releases.',
  },
  {
    role: 'Editor',
    company: 'AndroidPIT',
    dates: 'October 2015 – October 2016',
    summary:
      'Wrote and published articles for an English-language site with 20M monthly unique visitors.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroIntro}>
          10 years of experience turning complex products into documentation
          that speaks directly to its audience. I pair docs-as-code and the
          Diátaxis framework with hands-on data analytics to capture knowledge
          and answer real user questions.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/projects/dochealth">
            See my latest project
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturedProject() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Featured project</Heading>
        <div className="card">
          <div className="card__header">
            <Heading as="h3">dochealth</Heading>
          </div>
          <div className="card__body">
            <p>
              A Python tool and Streamlit dashboard that measures the health of
              a docs-as-code repository, one page at a time. It reads the Git
              history and the prose to show which pages look maintained and
              aren&apos;t.
            </p>
          </div>
          <div className="card__footer">
            <Link
              className="button button--primary margin-right--sm"
              to="/docs/projects/dochealth">
              Read the case study
            </Link>
            <Link
              className="button button--secondary"
              href="https://dochealth.streamlit.app/">
              Open the live dashboard
            </Link>
          </div>
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
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
        {Experience.map(({role, company, dates, summary}) => (
          <div key={company} className={clsx('row', styles.job)}>
            <div className="col col--4">
              <strong>{role}</strong>, {company}
              <div className={styles.dates}>{dates}</div>
            </div>
            <div className="col col--8">{summary}</div>
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
        <FeaturedProject />
        <SkillsSection />
        <ExperienceSection />
      </main>
    </Layout>
  );
}
