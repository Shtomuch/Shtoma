import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shtoma Denys",
  description: "Завдання Ім'я Студента",

  // replace knu-template with name of your repository
  base: "/Shtoma/",

  themeConfig: {
    nav: [{ text: "Лабораторні", link: "/labs/1" }],

    sidebar: [
      {
        text: "Лабораторні роботи",
        items: [
          { text: "Лабораторна робота №1", link: "/labs/1" },
          { text: "Лабораторна робота №2", link: "/labs/2" },
          { text: "Лабораторна робота №3", link: "/labs/3" },
          { text: "Лабораторна робота №4", link: "/labs/4" },
          { text: "Лабораторна робота №5", link: "/labs/5" },
          { text: "Лабораторна робота №6", link: "/labs/6" },
          { text: "Лабораторна робота №7", link: "/labs/7" },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
})
