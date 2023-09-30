import { defineConfig } from 'vitepress'
import {
  discord,
  font,
  github,
  ogImage,
  ogUrl,
  radixVueDescription,
  radixVueName,
  releases,
} from './meta'
import { dependencies } from '../package.json'
import { teamMembers } from './contributors'

const version = dependencies['radix-vue']

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: radixVueName,
  description: radixVueDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#729b1a' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'meta',
      { name: 'author', content: `${teamMembers.map(c => c.name).join(', ')} and ${radixVueName} contributors` },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, node',
      },
    ],
    ['meta', { property: 'og:title', content: radixVueName }],
    ['meta', { property: 'og:description', content: radixVueDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: radixVueName }],
    ['meta', { name: 'twitter:description', content: radixVueDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'preload', as: 'style', onload: 'this.onload=null;this.rel=\'stylesheet\'', href: font }],
    ['noscript', {}, `<link rel="stylesheet" crossorigin="anonymous" href="${font}" />`],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases,
          },
        ],
      },
    ],
    logo: '/logo.svg',

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],

    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/radix-vue/radix-vue/edit/main/docs/content/:path',
    },
  },
  srcDir: 'content',
  appearance: 'dark',
})

function sidebar() {
  return [
    {
      text: 'Overview',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/overview/introduction' },
        { text: 'Getting Started', link: '/overview/getting-started' },
        { text: 'Installation', link: '/overview/installation' },
        { text: 'Accessibility', link: '/overview/accessibility' },
        { text: 'Releases', link: '/overview/releases' },
      ],
    },
    {
      text: 'Guides',
      collapsed: false,
      items: [
        { text: 'Styling', link: '/guides/styling' },
        { text: 'Animation', link: '/guides/animation' },
        { text: 'Composition', link: '/guides/composition' },
        { text: 'Server side rendering', link: '/guides/server-side-rendering' },
      ],
    },
    {
      text: 'Components',
      collapsed: false,
      items: [
        { text: 'Accordion', link: '/components/accordion' },
        { text: 'Alert Dialog', link: '/components/alert-dialog' },
        { text: 'Aspect Ratio', link: '/components/aspect-ratio' },
        { text: 'Avatar', link: '/components/avatar' },
        { text: 'Checkbox', link: '/components/checkbox' },
        { text: 'Collapsible', link: '/components/collapsible' },
        { text: 'Combobox', link: '/components/combobox' },
        { text: 'Context Menu', link: '/components/context-menu' },
        { text: 'Dialog', link: '/components/dialog' },
        { text: 'Dropdown Menu', link: '/components/dropdown-menu' },
        { text: 'Hover Card', link: '/components/hover-card' },
        { text: 'Label', link: '/components/label' },
        { text: 'Menubar', link: '/components/menubar' },
        { text: 'Navigation Menu', link: '/components/navigation-menu' },
        { text: 'Pagination', link: '/components/pagination' },
        { text: 'Popover', link: '/components/popover' },
        { text: 'Progress', link: '/components/progress' },
        { text: 'Radio Group', link: '/components/radio-group' },
        { text: 'Scroll Area', link: '/components/scroll-area' },
        { text: 'Select', link: '/components/select' },
        { text: 'Separator', link: '/components/separator' },
        { text: 'Slider', link: '/components/slider' },
        { text: 'Switch', link: '/components/switch' },
        { text: 'Tabs', link: '/components/tabs' },
        { text: 'Toast', link: '/components/toast' },
        { text: 'Toggle', link: '/components/toggle' },
        { text: 'Toggle Group', link: '/components/toggle-group' },
        { text: 'Toolbar', link: '/components/toolbar' },
        { text: 'Tooltip', link: '/components/tooltip' },
      ],
    },
    {
      text: 'Utilities',
      collapsed: false,
      items: [
        { text: 'Primitive', link: '/utilities/primitive' },
        { text: 'Slot', link: '/utilities/slot' },
        { text: 'useId', link: '/utilities/use-id' },
        { text: 'useEmitAsProps', link: '/utilities/use-emit-as-props' },
        { text: 'useForwardProps', link: '/utilities/use-forward-props' },
        { text: 'useForwardPropsEmits', link: '/utilities/use-forward-props-emits' },
      ],
    },
  ]
}
