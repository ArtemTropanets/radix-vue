import { getParameters } from 'codesandbox/lib/api/define'

export function makeCodeSandboxParams(componentName: string, sources: Record<string, string>) {
  let files = {}
  files = makeTailwindConfig(componentName, sources)
  return getParameters({ files, template: 'node' })
}

const viteConfig = {
  'vite.config.js': {
    content: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})`,
    isBinary: false,
  },
  'index.html': {
    content: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + Vue + TS</title>
      </head>
      <body>
        <div id="app"></div>
        <script type="module" src="/src/main.ts"></script>
      </body>
    </html>
    `,
    isBinary: false,
  },
}

function makeTailwindConfig(componentName: string, sources: Record<string, string>) {
  const dependencies = {
    'vue': 'latest',
    'radix-vue': 'latest',
    '@radix-ui/colors': 'latest',
    '@iconify/vue': 'latest',
  }

  const devDependencies = {
    'vite': 'latest',
    '@vitejs/plugin-vue': 'latest',
    'vue-tsc': 'latest',
    'tailwindcss': 'latest',
    'postcss': 'latest',
    'autoprefixer': 'latest',
    '@codesandbox/vue-preview': '^0.1.1-alpha.16',
  }

  const componentFiles = Object.keys(sources).filter(key => key.endsWith('.vue') && key !== 'index.vue')
  const components: Record<string, any> = {}
  componentFiles.forEach((i) => {
    components[`src/${i}`] = {
      isBinary: false,
      content: sources[i],
    }
  })

  const files = {
    'package.json': {
      content: {
        name: `radix-vue-${componentName.toLowerCase().replace(/ /g, '-')}`,
        scripts: { start: 'vite' },
        dependencies,
        devDependencies,
      },
      isBinary: false,
    },
    ...viteConfig,
    'tailwind.config.js': {
      content: sources['tailwind.config.js'],
      isBinary: false,
    },
    'postcss.config.js': {
      content: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}`,
      isBinary: false,
    },
    'src/main.ts': {
      content: `import { createApp } from 'vue';
import App from './App.vue';
import './global.css';

createApp(App).mount('#app')`,
      isBinary: false,
    },
    'src/App.vue': {
      isBinary: false,
      content: sources['index.vue'],
    },
    ...components,
    'src/global.css': {
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, hsl(173, 80.0%, 36.0%) 0%, hsl(151, 55.0%, 41.5%) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 120px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`,
      isBinary: false,
    },
  }

  return files
}
