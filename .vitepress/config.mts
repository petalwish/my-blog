import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PetalWish-digital-garden",
  description: "AI Life Science & Agent Learning",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'AI Life Science',
        items: [
          { text: 'hello-world', link: '/posts/hello-world' }
        ]
      },
      {
        text: 'Agent',
        items: [
          
        ]
      },
      {
        text: 'Bussiness for AI',
        items: [
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
