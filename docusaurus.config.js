// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Applied INTelligence Lab (AINTLab)',
  tagline: '"AINTLab" is not only a laboratory but also a playground to learn and explore things related to applied intelligence.',
  url: 'https://aintlab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'justudin', // Usually your GitHub org/user name.
  //projectName: 'research-site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve('docusaurus-lunr-search')],
  // plugins: ['@orama/plugin-docusaurus'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/updates',
          blogTitle: 'Recent updates',
          blogSidebarCount: 0,
          postsPerPage: 7,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2019-${new Date().getFullYear()} Applied INTelligence Lab (AINTLab); Lead by Muhammad Syafrudin.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:{
    // Declare some <meta> tags
    metadata: [
      {name: 'keywords', content: 'Applied Intelligence Lab, AINTLab, AI research publications, artificial intelligence papers, machine learning publications, deep learning research, IoT research, RFID in supply chain, sustainable agriculture papers, self-supervised learning, self-organizing maps, vessel detection, human action recognition, transformer models, agricultural technology research, AgriTech publications, predictive analytics papers, AI for agriculture, AI-powered innovation, scientific articles, AI in agriculture, academic publications, AI research, machine learning, deep learning, artificial intelligence lab, IoT, RFID, sustainable agriculture, satellite imagery, AI-powered solutions, food security, agricultural data analysis, AgriTech solutions, AI innovation, Applied INTelligence Lab (AINTLab), Department of Artificial Intelligence and Data Science, Sejong University, Seoul 05006, Republic of Korea'},
      {name: 'twitter:card', content: 'Applied INTelligence Lab (AINTLab) - AINTLab.com is not only a laboratory but also a playground to learn and explore the frontier of artificial intelligence, data science, and intelligent systems. We design AI-driven solutions that connect systems, enhance communication, and promote sustainability. Through collaboration across academia and industry, we aim to build systems that shape a smarter, more connected world. AINTLab is a hub for learning and innovation in applied intelligence and IoT. Pioneering Artificial Intelligence research, AINTLab focuses on machine learning, deep learning, IoT, and self-supervised learning. Our expertise drives agricultural innovation, vessel detection, human action recognition, and predictive analytics, promoting sustainable agriculture and global food security. Explore our extensive collection of research publications on AI, machine learning, IoT, and sustainable agriculture, featuring groundbreaking work on transformer models, predictive analytics, and more.'},
      {name: 'description', content: 'Applied INTelligence Lab (AINTLab) - AINTLab.com is not only a laboratory but also a playground to learn and explore the frontier of artificial intelligence, data science, and intelligent systems. We design AI-driven solutions that connect systems, enhance communication, and promote sustainability. Through collaboration across academia and industry, we aim to build systems that shape a smarter, more connected world. AINTLab is a hub for learning and innovation in applied intelligence and IoT. Pioneering Artificial Intelligence research, AINTLab focuses on machine learning, deep learning, IoT, and self-supervised learning. Our expertise drives agricultural innovation, vessel detection, human action recognition, and predictive analytics, promoting sustainable agriculture and global food security. Explore our extensive collection of research publications on AI, machine learning, IoT, and sustainable agriculture, featuring groundbreaking work on transformer models, predictive analytics, and more.'},
      {name: 'og:image',content: 'https://aintlab.com/img/social-media.png'},
    
    ],
    headTags: [
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'Applied INTelligence Lab (AINTLab)',
          url: 'https://aintlab.com/',
          description: 'Applied INTelligence Lab (AINTLab) - AINTLab.com is not only a laboratory but also a playground to learn and explore the frontier of artificial intelligence, data science, and intelligent systems. We design AI-driven solutions that connect systems, enhance communication, and promote sustainability. Through collaboration across academia and industry, we aim to build systems that shape a smarter, more connected world. AINTLab is a hub for learning and innovation in applied intelligence and IoT. Pioneering Artificial Intelligence research, AINTLab focuses on machine learning, deep learning, IoT, and self-supervised learning. Our expertise drives agricultural innovation, vessel detection, human action recognition, and predictive analytics, promoting sustainable agriculture and global food security. Explore our extensive collection of research publications on AI, machine learning, IoT, and sustainable agriculture, featuring groundbreaking work on transformer models, predictive analytics, and more.',
          foundingDate: '2019',
          founder: {
            '@type': 'Person',
            name: 'Muhammad Syafrudin',
            identifier: [
              'https://www.wikidata.org/entity/Q61147698',
              'https://mathgenealogy.org/id.php?id=297235',
              'https://www.google.com/search?kgmid=/g/11fmgyc_gp',
              'https://dblp.org/pid/216/5849.html',
              'https://orcid.org/0000-0002-5640-4413',
              'https://www.webofscience.com/wos/author/record/1733012',
              'https://scholar.google.co.kr/citations?user=WLTzkOMAAAAJ&hl=en',
              'https://muhammadsyafrudin.com/',
              'https://www.scopus.com/authid/detail.uri?authorId=57197741727',
              'https://www.researchgate.net/profile/Muhammad-Syafrudin',
            ]
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Seoul',
            addressCountry: 'KR'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            'contactType': 'Contact Support',
            'email': 'udin@aintlab.com',
            'telephone': '+82-2-3408-1879'
          },
          sameAs: [
            'https://www.linkedin.com/company/aintlab',
          ],
          logo: 'https://aintlab.com/img/favicon.png',
        }),
      },
    ],
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      navbar: {
        title: '',
        logo: {
          alt: '"AINTLab"" is not only a laboratory but also a playground to learn and explore the frontier of artificial intelligence, data science, and intelligent systems. We design AI-driven solutions that connect systems, enhance communication, and promote sustainability. Through collaboration across academia and industry, we aim to build systems that shape a smarter, more connected world.',
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
            to: 'team',
            position: 'left',
            label: 'The Team',
          },
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
          /**{
            to: 'books',
            position: 'left',
            label: 'Books',
          },**/
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
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `(🇰🇷) Applied INTelligence Lab (AINTLab), Seoul 05006, Republic of Korea | (🇮🇩) Applied INTelligence Lab (AINTLab), Yogyakarta 55187, Indonesia.
        <br/>
        E-mail: hello [at] aintlab.com | Phone: 02-3408-1879<br/>
        <a href="/team" style="color:white">The Team</a> / <a href="/projects" style="color:white">Projects</a> / <a href="/publications" style="color:white">Publications</a> / <a href="/updates" style="color:white">Updates</a> / <a href="/contact" style="color:white">Contact</a> | Follow us on <a class="link" href="https://www.linkedin.com/company/aintlab" target="_blank" data-tippy-content="LinkedIn">
            <svg class="svgfooter" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>AINTLab (Applied INTelligence Lab) @ LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a><br/> 
        Copyright © 2019-${new Date().getFullYear()} <a href="https://aintlab.com/" style="color:white">Applied INTelligence Lab (AINTLab)</a>; Lead by <a href="https://muhammadsyafrudin.com/" style="color:white"target="_blank">Muhammad Syafrudin</a>. Built with Docusaurus.
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
  },
};

module.exports = config;
