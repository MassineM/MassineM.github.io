<template>
  <div class="sidemenuContainer">
    <nav>
      <ul>
        <svg
          v-html="pointerIcon"
          class="shadow"
          :style="{ top: shadow_top, opacity: shadow_opacity }"
        />
        <span
          class="text"
          v-if="get_hovered_text() != null"
          :style="{ top: hovered_top }"
        >
          {{ get_hovered_text() }}</span
        >
        <div
          id="shadowCurr"
          :style="{ top: selected_top }"
          class="currshadow"
        ></div>
        <li
          v-for="item of nav"
          v-html="item.svg"
          :id="`item_${item.key}`"
          :key="item.key"
          @click="selectCurrent(item)"
          class="icon"
          :class="{ active: item.selected }"
          @mouseenter="hoverMyItem(item)"
          @mouseleave="leaveMyItem()"
        ></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: [],
  mounted: function () {
    window.addEventListener("mousemove", this.mouseIsMoving);
    document.addEventListener("mousewheel", this.onScroll.bind(this), {
      passive: false,
    });
    document.addEventListener("keydown", this.keyScroll);
    this.onBanner = false;
    this.onTab = false;
  },
  data: function () {
    return {
      iconsPath: "~/assets/icons/",
      pointer: 0,
      isScrolling: 0,
      pointerIcon:
        '<svg style="enable-background:new 0 0 100 100" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M41.762 27.26v8.294c0 .571.305 1.1.8 1.385l20.212 11.669c1.066.616 1.066 2.155 0 2.771L42.562 63.048c-.495.286-.8.814-.8 1.385v8.294c0 1.231 1.333 2.001 2.399 1.385l39.375-22.733c1.066-.616 1.066-2.155 0-2.771L44.161 25.875c-1.066-.616-2.399.154-2.399 1.385z"/><path d="M83.537 48.608 44.161 25.875c-.193-.112-.395-.164-.597-.19l37.972 21.923c1.066.616 1.066 2.155 0 2.771L42.161 73.112c-.1.058-.205.092-.308.126.308.914 1.401 1.398 2.308.874l39.375-22.733c1.067-.616 1.067-2.155.001-2.771z"/><path d="M41.762 27.26v8.294c0 .571.305 1.1.8 1.385l20.212 11.669c1.066.616 1.066 2.155 0 2.771L42.562 63.048c-.495.286-.8.814-.8 1.385v8.294c0 1.231 1.333 2.001 2.399 1.385l39.375-22.733c1.066-.616 1.066-2.155 0-2.771L44.161 25.875c-1.066-.616-2.399.154-2.399 1.385z" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="M14.664 27.273v8.294c0 .571.305 1.1.8 1.385l20.212 11.669c1.066.616 1.066 2.155 0 2.771L15.464 63.061c-.495.286-.8.814-.8 1.385v8.294c0 1.231 1.333 2.001 2.399 1.385l39.375-22.733c1.066-.616 1.066-2.155 0-2.771L17.063 25.888c-1.066-.616-2.399.154-2.399 1.385z"/><path d="M56.438 48.621 17.063 25.888c-.193-.112-.395-.164-.597-.19l37.972 21.923c1.066.616 1.066 2.155 0 2.771L15.063 73.125c-.1.058-.205.092-.308.126.308.914 1.401 1.398 2.308.874l39.375-22.733c1.067-.616 1.067-2.155 0-2.771z"/><path d="M14.664 27.273v8.294c0 .571.305 1.1.8 1.385l20.212 11.669c1.066.616 1.066 2.155 0 2.771L15.464 63.061c-.495.286-.8.814-.8 1.385v8.294c0 1.231 1.333 2.001 2.399 1.385l39.375-22.733c1.066-.616 1.066-2.155 0-2.771L17.063 25.888c-1.066-.616-2.399.154-2.399 1.385z" style="fill:none;stroke:#000;stroke-miterlimit:10"/></svg>',
      nav: [
        {
          key: 1,
          title: "Welcome to my personnal WEB portfolio!",
          text: "about",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.14 49.23"><defs/><g id="Calque_2" data-name="Calque 2"><g id="Calque_6" data-name="Calque 6"><path class="cls-1" d="M24.59 3.94h.16a20.57 20.57 0 0 1 14.54 35 20.45 20.45 0 0 1-14.42 6.21h-.28a20.6 20.6 0 0 1-10.67-3 4 4 0 0 0-2.05-.58 3.81 3.81 0 0 0-1.25.21l-5 1.68 1.62-5.26a3.92 3.92 0 0 0-.38-3.17A20.62 20.62 0 0 1 24.59 3.94m0-3.94A24.63 24.63 0 0 0 .05 24.08a24.37 24.37 0 0 0 3.43 13L0 48.21a.78.78 0 0 0 .74 1 .8.8 0 0 0 .26 0l10.83-3.63a24.44 24.44 0 0 0 12.72 3.54h.34A24.55 24.55 0 0 0 24.78 0Z"/><path class="cls-1" d="M28.36 32.1V20.66a.93.93 0 0 0-.93-.93h-7.65a.93.93 0 0 0-.93.93v3.85a.94.94 0 0 0 .93.94.92.92 0 0 1 .93.93v5.72a.93.93 0 0 1-.93.93.93.93 0 0 0-.93.93v4.09a.93.93 0 0 0 .93.93h9.58a.93.93 0 0 0 .93-.93V34a.93.93 0 0 0-.93-.93h-.07a.93.93 0 0 1-.93-.97Z"/><circle class="cls-1" cx="23.83" cy="13.85" r="3.76"/></g></g></svg>',
          selected: true,
          hovered: false,
        },
        {
          key: 2,
          title: "Who am I?",
          text: "profile",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.74 49.74"><defs/><g id="Calque_2" data-name="Calque 2"><g id="Calque_6" data-name="Calque 6"><circle class="cls-1" cx="24.87" cy="18.98" r="8.76"/><path class="cls-1" d="m42.93 42 .21-.23c.29-.31.58-.63.85-1 .29-.35.57-.71.84-1.07l.11-.15c.22-.31.44-.61.65-.93l.2-.32c.17-.26.34-.53.5-.8s.14-.26.22-.38l.43-.8c.06-.13.13-.26.2-.39s.27-.57.4-.86c0-.12.11-.23.16-.35.17-.38.32-.77.46-1.16a.3.3 0 0 0 0-.08c.15-.42.29-.85.43-1.28 0-.12.06-.24.1-.36.09-.31.18-.62.25-.94 0-.16.08-.32.11-.47s.13-.57.18-.86.07-.34.1-.51.09-.58.12-.86.05-.35.07-.52.06-.62.08-.94v-3.12c-.05-.85-.13-1.69-.26-2.51a24.87 24.87 0 0 0-49.16 0c-.02.79-.1 1.63-.18 2.48v3.1c0 .31 0 .62.08.92s.05.35.07.52l.19.87c0 .18.06.35.1.53s.1.54.16.81l.12.5c.07.28.14.56.22.83s.08.31.13.46c.09.31.2.62.3.92 0 .11.07.22.11.33.15.42.31.83.49 1.24v.06c.16.38.33.76.51 1.13.06.11.12.22.17.33.14.28.29.56.44.83l.22.38c.15.25.29.5.45.75l.24.38.5.73.25.35c.18.25.37.49.56.74l.23.28c.24.3.49.6.75.89l.09.1c.3.33.61.65.92 1 .3.29.6.58.92.86l.24.21.75.63.11.1.38.29.1.07.18.14.09.07h.05l.39.27.09.06c.49.34 1 .67 1.51 1h.13l.38.21.1.06h.1l.18.1h.08l.11.06.37.19h.19c.31.16.63.31 1 .45l.19.09h.1l.15.06.16.06.17.08.33.12.2.08h.31l.22.07.31.11.22.07h.14l.27.09h.14l.27.08.27.08.28.07H18.71l.29.07.27.06.3.07H20l.33.06h.24l.41.07h.12l.56.08H28.07l.57-.08h.12l.41-.07h.24l.33-.06h.22l.3-.07.27-.06.28-.07.19.6h.12l.27-.07.28-.08.26-.07.14-.05.28-.09h.14l.22-.07.31-.11.21-.07h.32l.2-.08.33-.12.17-.07.16-.07.15-.06h.09l.19-.09c.33-.14.64-.29 1-.45h.18l.38-.19.1-.06h.08l.19-.1h.1l.1-.06.37-.21h.13q1-.59 1.92-1.26l.08-.05.09-.07.18-.13.09-.08.17-.14c.27-.21.54-.42.79-.64l.29-.25.71-.65.28-.26ZM24.87 29.86a15.55 15.55 0 0 0-14.65 10.52 21.37 21.37 0 1 1 29.3 0 15.56 15.56 0 0 0-14.65-10.52Z"/></g></g></svg>',
          selected: false,
          hovered: false,
        },
        {
          key: 3,
          title: "Mastered skills:",
          text: "skills",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.74 49.74"><g data-name="Calque 2"><g data-name="Calque 6"><path class="cls-1" d="M24.87 0a24.87 24.87 0 1 0 24.87 24.87A24.86 24.86 0 0 0 24.87 0Zm0 46.24a21.37 21.37 0 1 1 21.37-21.37 21.4 21.4 0 0 1-21.37 21.37Z"/><path class="cls-1" d="M37.54 12.55H21.22a.81.81 0 0 0 0 1.62h16.32a.81.81 0 0 0 0-1.62ZM21.22 17.5h8.16a.81.81 0 1 0 0-1.61h-8.16a.81.81 0 0 0 0 1.61Zm16.32 4.89H21.22a.81.81 0 0 0 0 1.62h16.32a.81.81 0 0 0 0-1.62Zm-16.32 4.95h8.16a.81.81 0 1 0 0-1.61h-8.16a.81.81 0 0 0 0 1.61Zm16.32 4.89H21.22a.81.81 0 0 0 0 1.62h16.32a.81.81 0 0 0 0-1.62Zm-8.16 3.34h-8.16a.81.81 0 0 0 0 1.61h8.16a.81.81 0 1 0 0-1.61ZM17.83 17.39a1.38 1.38 0 0 0 .76-1.24v-2.24a1.38 1.38 0 0 0-.76-1.24l-2.47-1.23a1.4 1.4 0 0 0-1.23 0l-2.47 1.23a1.37 1.37 0 0 0-.77 1.24v2.24a1.37 1.37 0 0 0 .77 1.24l1.82.9v3.31l-1.82.91a1.37 1.37 0 0 0-.77 1.24V26a1.37 1.37 0 0 0 .77 1.24l1.82.9v3.31l-1.82.91a1.37 1.37 0 0 0-.77 1.24v2.24a1.37 1.37 0 0 0 .77 1.24l2.47 1.23a1.43 1.43 0 0 0 .61.14 1.51 1.51 0 0 0 .62-.14l2.47-1.23a1.38 1.38 0 0 0 .76-1.24v-2.25a1.38 1.38 0 0 0-.76-1.24l-1.74-.86v-3.4l1.74-.86a1.38 1.38 0 0 0 .76-1.23v-2.25a1.38 1.38 0 0 0-.76-1.24l-1.74-.86v-3.4ZM14.74 35.5a.79.79 0 0 1 0-1.58.79.79 0 0 1 0 1.58Zm0-9.84a.79.79 0 0 1 0-1.58.79.79 0 1 1 0 1.58Zm0-9.84a.79.79 0 0 1 0-1.58.79.79 0 0 1 0 1.58Z"/></g></g></svg>',
          selected: false,
          hovered: false,
        },
        {
          key: 4,
          title: "Some of my previous works:",
          text: "projects",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.74 49.74"><defs/><g id="Calque_2" data-name="Calque 2"><g id="Calque_6" data-name="Calque 6"><path class="cls-1" d="M31.93 18.05 20.7 17a.73.73 0 0 0-.13 1.46l11.23 1h.07a.72.72 0 0 0 .72-.66.74.74 0 0 0-.66-.75ZM31.67 21.24l-11.24-1a.73.73 0 1 0-.13 1.45l11.23 1h.07a.73.73 0 0 0 .07-1.45Z"/><path class="cls-1" d="M24.87 0a24.87 24.87 0 1 0 24.87 24.87A24.86 24.86 0 0 0 24.87 0Zm9 16.3 2.29.2-.65 8.21h-6.84a1.23 1.23 0 0 0-1.07.62l-1.9 3.33h-9.46l-.14-.28 1.45-16.14 16 1.48-.17 2a.55.55 0 0 0 .53.58ZM14.61 28.66h-.35A1.31 1.31 0 0 0 13 30v10.9a1 1 0 0 1-1-1V25.83h3l-.26 2.83ZM39.29 40.6V25.93a1.22 1.22 0 0 0-1.22-1.22H37l.65-8.24.09-1.15v-.27l-.19-.19-2.27-2.32-.15-.15h-.22l-1.26-.12-16-1.49h-.14a1.48 1.48 0 0 0-1.47 1.35L15 24.38h-3.29a1.28 1.28 0 0 0-1.28 1.28v14.23a2.48 2.48 0 0 0 .15.82 21.37 21.37 0 1 1 28.71-.11Z"/></g></g></svg>',
          selected: false,
          hovered: false,
        },
        {
          key: 5,
          title: "Contact me by...",
          text: "contact",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.74 49.74"><g data-name="Calque 2"><g data-name="Calque 6"><path class="cls-1" d="M24.87 0a24.87 24.87 0 1 0 24.87 24.87A24.86 24.86 0 0 0 24.87 0Zm0 46.24a21.37 21.37 0 1 1 21.37-21.37 21.4 21.4 0 0 1-21.37 21.37Z"/><path class="cls-1" d="M35.31 12.21h-8.54a2.58 2.58 0 0 0-2.58 2.58v4.84a2.57 2.57 0 0 0 2.58 2.58h4.47v1.63a.51.51 0 0 0 .51.51.46.46 0 0 0 .37-.17l1.75-2h1.48a2.57 2.57 0 0 0 2.58-2.58v-4.81a2.58 2.58 0 0 0-2.62-2.58ZM37 19.63a1.66 1.66 0 0 1-1.66 1.66h-1.92l-.28.31-1 1.12v-1.43h-5.37a1.66 1.66 0 0 1-1.66-1.66v-4.84a1.66 1.66 0 0 1 1.66-1.66h8.54A1.66 1.66 0 0 1 37 14.79Z"/><path class="cls-1" d="M31 16.49a.81.81 0 0 0-.81.81.82.82 0 0 0 .81.82.82.82 0 0 0 .82-.82.82.82 0 0 0-.82-.81Zm3.5 0a.81.81 0 0 0-.81.81.82.82 0 0 0 .81.82.82.82 0 0 0 .82-.82.82.82 0 0 0-.82-.81Zm-6.92 0a.81.81 0 0 0-.81.81.81.81 0 1 0 1.62 0 .81.81 0 0 0-.81-.81ZM33.51 30c-2.5-2.19-3.28-1.9-5.11-1.27-.93.33-2.25 2.92-3.65 2.25A13.73 13.73 0 0 1 21 27.89a14.28 14.28 0 0 1-3-3.71c-.66-1.4 1.93-2.72 2.26-3.65.63-1.83.92-2.61-1.27-5.11-1.94-2.23-4.24-3.07-6.08-1.79s-3 4.51-3.21 5.47c-1 3.63 2.43 9.06 6.78 13.4s9.77 7.79 13.4 6.78c1-.19 4.19-1.37 5.47-3.21s.39-4.14-1.84-6.07Z"/></g></g></svg>',
          selected: false,
          hovered: false,
        },
      ],
      selected_top: 0,
      hovered_top: 0,
      currTab: "1",
      shadow_top: 0,
      shadow_opacity: 0,
    };
  },
  methods: {
    mouseIsMoving(e) {
      let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      let vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      this.vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      this.vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      let xPercent = e.pageX / vw;
      // this.xPercent = xPercent;

      this.shadow_top = e.pageY - (vh * 5) / 100 + "px";
      if (this.get_hovered_text() == null)
        this.shadow_opacity = (0.25 - xPercent) * 3;
      else this.shadow_opacity = 1;
    },
    selectCurrent(item) {
      let i = 0;
      for (const li of this.nav)
        if (li.key == item.key) {
          li.selected = true;
          this.selected_top =
            document.getElementById("item_" + li.key).offsetTop + "px";
          this.pointer = i;
          document.getElementById(this.nav[i].text).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          i++;
        } else {
          li.selected = false;
          i++;
        }
    },

    get_hovered_text() {
      for (const item of this.nav) if (item.hovered) return item.text; //  Fills span with the matching tab title
    },

    hoverMyItem(item) {
      for (const li of this.nav) {
        if (li.key == item.key) {
          li.hovered = true;
          this.hovered_top =
            document.getElementById("item_" + li.key).offsetTop +
            (1.3 * this.vh) / 100 +
            "px";
        } else li.hovered = false;
      }
    },

    leaveMyItem() {
      for (const item of this.nav) item.hovered = false;
    },

    onScroll(e) {
      e.preventDefault();
      if (this.isScrolling) return;
      this.isScrolling = 1;
      setTimeout(() => {
        this.isScrolling = 0;
      }, 500);
      console.log(e);
      if (e.deltaY > 0) this.pointer = (this.pointer + 1) % this.nav.length;
      else {
        this.pointer = (this.pointer - 1) % this.nav.length;
        if (this.pointer < 0) this.pointer += this.nav.length;
      }
      console.log(this.pointer);
      this.selectCurrent(this.nav[this.pointer]);
    },

    keyScroll(e) {
      e.preventDefault();
      if (e.keyCode == 38) {
        this.pointer -= 1;
        if (this.pointer < 0) this.pointer += this.nav.length;
        this.selectCurrent(this.nav[this.pointer]);
      } else if (e.keyCode == 40) {
        this.pointer = (this.pointer + 1) % this.nav.length;
        this.selectCurrent(this.nav[this.pointer]);
      }
    },
  },
};
</script>
