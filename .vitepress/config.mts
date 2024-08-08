import { defineConfig } from 'vitepress' // 使用 defineConfig 辅助函数将为配置选项提供 TypeScript 支持的智能提示

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JFS's Blog",
  description: "This is JFS's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/markdown-examples' },
      { text: '项目', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '笔记',
        items: [
          {
            text:"linux",
            collapsed: true,
            items:[
                {text: '硬盘分区', link: '/note/linux/磁盘分区与挂载/磁盘分区与挂载.md'},
                {text: 'shell配置', link: '/note/linux/shell配置/shell配置.md'},
                {text: 'todo', link: '/note'}
            ]
          },
          {
            text:"git",
            collapsed: true,
            items:[

              {text: '仓库里包含仓库',link: '/note/git/仓库里包含仓库/仓库里包含仓库.md'},
            ]
          },
          {
            text:"deep learning",
            collapsed: true,
            items:[
              {
                text: '论文',
                items:[
                  {text: '基于生成式到判别式的蒙面人脸识别',link : '/note/深度学习/基于生成到判别表征的蒙面人脸识别/G2D.md'},
                  {text: "人脸生成ICT模型",link: '/note/深度学习/ICT模型/ICT.md'}
                ],
              },
              {
                text: '深度学习基础',
                items:[
                  {text: 'CNN',link: 'note/深度学习/深度学习基础/CNN.md'}
                ]
              },
              {
                text: 'opencv-py',
                items:[
                  {text : 'opencv-py',link:'opencv-py.md'}
                ]
              },
              {
                text:'pytorch',
                items:[
                  {text: '00_pytorch_foundmental',link:'note/深度学习/pytorch/00_torch.md'},
                  {text: '01_pytorch_workflow',link:'note/深度学习/pytorch/01_pytorch_workflow.md'},
                  {text: 'usage_of_helpfn.ipynb',link:'note/深度学习/pytorch/usage_of_helpfn.md'},
                ]
              }
            ]
          }

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
