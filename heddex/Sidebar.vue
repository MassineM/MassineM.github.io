<template>
  <div class="stickyBanner" id="banner">
    <!-- <img
      v-for="I in tabs"
      :key="I.Id"
      :id="I.Id"
      :src="require(`/static/icons/${I.Sc}.png`)"
      class="icon"
    />-->
    <div id="shadow" class="shadow" style="top: 0px">
      <h1 id="selectedTab" class="selectedTab" style="opacity: 0">
        {{ selTab }}
      </h1>
    </div>
    <div id="shadowCurr" class="shadow" style="top: 0px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { Id: 1, Sc: "index" },
        { Id: 2, Sc: "profile" },
        { Id: 3, Sc: "skills" },
        { Id: 4, Sc: "projects" },
        { Id: 5, Sc: "contact" },
      ],
      selTab: "",
    };
  },

  mounted: function () {
    window.addEventListener("mousemove", this.mouseIsMoving);
    document
      .getElementById("banner")
      .addEventListener("mouseover", this.mouseOnBanner);
    document
      .getElementById("banner")
      .addEventListener("mouseout", this.mouseNotBanner);
    this.onBanner = false;
    this.onTab = false;
    for (let i = 1; i <= 5; i++) {
      document
        .getElementById(i)
        .addEventListener("mouseenter", this.mouseOnBanner);
      document
        .getElementById(i)
        .addEventListener("mouseleave", this.mouseNotTab);
      document.getElementById(i).addEventListener("click", this.mouseClick);
    }
  },

  methods: {
    mouseIsMoving(e) {
      this.vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      this.vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      // console.log(e.pageY);
      var xPercent = e.pageX / this.vw;
      var yPercent = e.pageY / this.vh;

      if (!this.onBanner && !this.onTab) {
        document.getElementById("shadow").style.opacity = 0.5 - xPercent;
        document.getElementById("shadow").style.top =
          Math.floor(e.pageY / 1) * 1 + "px";
      }
    },
    mouseOnSide(e) {
      document.getElementById("selectedTab").style.opacity = 1;

      this.onBanner = true;
      var c = 9999;
      this.closest = 1;
      for (let i = 1; i <= 5; i++) {
        if (
          Math.abs(
            document.getElementById(i).offsetTop +
              (2.5 * this.vh) / 100 -
              e.pageY
          ) < c
        ) {
          c = Math.abs(
            document.getElementById(i).offsetTop +
              (2.5 * this.vh) / 100 -
              e.pageY
          );
          this.closest = i;
        }
      }
      this.selected = this.nav[this.closest - 1];
      this.selTab = Object.values(this.selected)[1];

      document.getElementById("shadow").style.top =
        document.getElementById(this.closest).offsetTop +
        (7.5 * this.vh) / 100 +
        "px";
      document.getElementById("selectedTab").style.display = "flex";
      document.getElementById("shadow").style.width = "20vw";

      document.getElementById("shadow").style.opacity = 1;
    },
    mouseNotSide(e) {
      this.onBanner = false;
      document.getElementById("shadow").style.width = "7vw";
      document.getElementById("selectedTab").style.display = "none";
    },
    mouseClick(e) {
      if (this.selTab != "index") this.$router.push("/" + this.selTab);
      else this.$router.push("/");
      this.currTab = Object.values(this.selected)[0];

      document.getElementById("shadowCurr").style.top =
        document.getElementById(this.currTab).offsetTop +
        (7.5 * this.vh) / 100 +
        "px";
      // for (let i = 1; i <= 5; i++) {
      //   if (this.currTab == i)
      //     document.getElementById(i).style.filter = "saturate(600%)";
      //   else document.getElementById(i).style.filter = "saturate(100%)";
      // }
    },
  },
};
</script>

<style>
.shadow {
  transition: top 0.2s ease-out, opacity 0.2s ease-out, width 0.2s ease-out;
}
</style>
