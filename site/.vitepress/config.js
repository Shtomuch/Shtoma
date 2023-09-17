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
        items: [{ text: "Лабораторна робота №1", link: "/labs/1" }],
        items: [{ text: "Лабораторна робота №2", link: "/labs/2" }],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
})
