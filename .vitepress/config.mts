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
      { text: 'Blog', link: '/posts/hello-world' }
    ],

    sidebar: [
      {
        text: '🧪 AI Life Science',
        items: [
          { text: 'Hello World', link: '/posts/hello-world' }
        ]
      },
      {
        text: '🤖 Agent',
        items: [
          // 以后有了新文章，在这里添加一行，例如：
          // { text: 'OpenClaw 架构', link: '/posts/openclaw-arch' }
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
      // 换成你自己的 GitHub 链接，建立个人品牌
      { icon: 'github', link: 'https://github.com/petalwish' }
    ],

    // 建议加上页脚，增加专业感
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present PetalWish'
    }
  }
})