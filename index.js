import SequentialEntrance from "./SequentialEntrance.js";

const VueSequentialEntrance = {
  install(Vue, options) {
    Vue.component("sequential-entrance", SequentialEntrance);
  }
};

export default VueSequentialEntrance;
