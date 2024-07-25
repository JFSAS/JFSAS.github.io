import { defineConfig } from 'vitepress' // 使用 defineConfig 辅助函数将为配置选项提供 TypeScript 支持的智能提示

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JFS's Blog",
  description: "This is JFS's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '笔记',
        items: [
          {
            text:"linux",
            items:[
                {text: '硬盘分区', link: '/note/linux/磁盘分区.md'},
                {text: 'todo', link: '/note'}
            ]
          },

        ]
      },
      {
        text: '工具',
        items: [
          { text: '占位', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
