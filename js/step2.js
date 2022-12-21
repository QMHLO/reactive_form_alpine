function step_2() {
  Alpine.data("step2", () => ({
    spouse: false, // boolean
    relative: "", // ["child", "siblings", "parents", "no_relative"]
    inherit_rate: 0,
    heirs_count: null,

    log() {
      console.log("spouse", this.spouse);
      console.log("relative", this.relative);
      console.log("inherit_rate", this.inherit_rate);
      console.log("least_heirs", this.least_heirs);
      console.log("heirs_count", this.heirs_count);
    },
  }));
}
