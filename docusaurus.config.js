// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Applied Intelligence of Things Lab',
  tagline: '"AINTLab" is not only a laboratory but also a playground to learn and explore things related to applied intelligence and the internet of things.',
  url: 'https://research.muhammadsyafrudin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'justudin', // Usually your GitHub org/user name.
  projectName: 'research-site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/updates',
          editUrl: 'https://github.com/diiflab/research-site/blob/main/',
          blogTitle: 'Recent updates',
          blogSidebarTitle: 'All updates',
          blogSidebarCount: 'ALL',
          postsPerPage: 3,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Muhammad Syafrudin.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: '"AINTLab" is not only a laboratory but also a playground to learn and explore things related to applied intelligence and the internet of things.',
          src: '/img/research.svg',
          srcDark: '/img/research-dark.svg',
        },
        items: [
        /**
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'All Research',
          },
          **/
          {
            to: 'projects',
            position: 'left',
            label: 'Projects',
          },
          {
            to: 'publications',
            position: 'left',
            label: 'Publications',
          },
          {
            to: 'updates',
            position: 'left',
            label: 'Updates',
          },
          
          {
            to: 'contact',
            position: 'left',
            label: 'Contact',
          },
          {
            href: 'https://courses.muhammadsyafrudin.com',
            position: 'right',
            label: 'Courses',
          },
          {
            href: 'https://github.com/diiflab/research-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Applied Intelligence of Things Lab by <a href="https://muhammadsyafrudin.com/" style="color:white"target="_blank">Muhammad Syafrudin</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
