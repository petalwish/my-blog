import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-blog/', 

  title: "PetalWish-digital-garden",
  description: "AI Life Science & Agent Learning",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // 将 Blog 链接指向你的第一篇文章
      { text: 'Blog', link: '/posts/insight-garden/hello-world' }
    ],

    sidebar: [
      {
        text: '🧪 AI Life Science',
        items: [

        ]
      },
      {
        text: '🤖 Agent',
        items: [
          // 以后有了新文章，在这里添加一行，例如：
        ]
      },
      {
        text: '💼 Business for AI',
        items: [
          // 预留位置
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/petalwish' }
    ],

    // 建议加上页脚，增加专业感
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present PetalWish'
    }
  }
})