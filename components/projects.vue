<template>
  <div id="projects">
    <div class="mainArticle">
      <h1 class="title">Some of my previous works:</h1>
      <a
        target="_blank"
        class="pItem"
        href="https://drive.google.com/drive/folders/1YxnYqCPUNngOJvELSOoJQK2760Orkcsb?usp=sharing"
        >For all available documentation, check this out...</a
      >
      <ul class="container">
        <li
          v-for="tab of projects"
          v-html="tab.title"
          :id="`tab_${tab.key}`"
          :key="tab.key"
          class="project"
          :class="{ active: tab.selected }"
          @click="selectTab(tab)"
        ></li>
      </ul>
      <Transition name="slidefade">
        <table v-if="show">
          <tr class="pLign">
            <td class="pItem">Name</td>
            <td class="pItem">{{ selectedTab.title }};</td>
          </tr>
          <tr class="pLign">
            <td class="pItem">Description</td>
            <td class="pItem">{{ selectedTab.description }};</td>
          </tr>
          <tr class="pLign">
            <td class="pItem">Tools used</td>
            <td class="pItem">{{ selectedTab.tools }};</td>
          </tr>
          <tr class="pLign">
            <td class="pItem">Source code</td>
            <td>
              <a :href="`${selectedTab.link}`" target="_blank" class="pItem"
                >{{ selectedTab.link }};</a
              >
            </td>
          </tr>
          <tr class="pLign">
            <td class="pItem">Year</td>
            <td class="pItem">{{ selectedTab.year }};</td>
          </tr>
        </table>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selectedTab: {},
      show: true,
      projects: [
        {
          key: 1,
          title: "This WEB portfolio",
          description:
            "Personnal project made from scratch, firstly in the purpose of publishing an accessible Curriculum Vitae, before the ambition of completing a rich portfolio took over",
          tools:
            "Nuxt.JS based, icons using Illustrator, background using Photoshop, SASS for animations, mainly structured by Vue.JS and JavaScript",
          link: "https://github.com/greyF0xx/portfolio",
          year: 2022,
          selected: true,
        },
        {
          key: 2,
          title: "Connected Hive",
          description:
            "Part of a bigger project, the main task was to create a bee farm data exploiting web platform.",
          tools:
            "Structured as such: API: Node.JS, APP: NuxtJS, Vue and Vuetify.",
          link: "https://github.com/greyF0xx/connectedHive",
          year: 2022,
          selected: false,
        },
        {
          key: 3,
          title: "Snek",
          description:
            "Based on the classic snake game concept, this is a home made version with variable levels and maps, hosted on an adapted Web platform",
          tools:
            "Nuxt.JS and Vue for the front, Node.JS for the API, connected to MongoDB and containing the Unity game launcher under WebGL",
          link: "https://github.com/greyF0xx/Snek",
          year: 2021,
          selected: false,
        },
        {
          key: 4,
          title: "Connect 4",
          description: "Console based player versus player game",
          tools: "Basic Java console application",
          link: "https://github.com/greyF0xx/Connect4",
          year: 2021,
          selected: false,
        },
        {
          key: 5,
          title: "Motus",
          description:
            "Based on the famous Lingo television game, this is a French version named Motus based console game",
          tools: "Fully developped by C language",
          link: "https://github.com/greyF0xx/motus",
          year: 2019,
          selected: false,
        },
        {
          key: 6,
          title: "Truck Platooning",
          description:
            "Supervised personal initiative work as a part of the preparatory classes for engineering schools contests",
          tools:
            "Research and study of functionnal & technical aspects of platooning technologies on heavy vehicles",
          link: "https://drive.google.com/drive/folders/1PnquLbU0D0tQFjlgf_Y_z-A0JCY9avii?usp=sharing",
          year: 2019,
          selected: false,
        },
        {
          key: 7,
          title: "Dodger Cab",
          description:
            "First ever self-made game and developped program from scratch, dodge police cars and beat your own highscore",
          tools: "Python 3 and Pygame library",
          link: "https://github.com/greyF0xx/dodgerCab",
          year: 2012,
          selected: false,
        },
      ],
    };
  },
  mounted: function () {
    this.selectedTab = this.projects[0];
  },
  methods: {
    selectTab(tab) {
      if (this.selectedTab.key != tab.key) {
        this.show = false;
        setTimeout(() => {
          this.show = true;
        }, 500);
        this.selectedTab = tab;
        for (const each of this.projects) {
          each.selected = false;
        }
        tab.selected = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
