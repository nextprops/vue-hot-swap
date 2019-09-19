const app = {
  state: {
    menus: [],
    frames: []
  },
  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
    SET_FRAMES: (state, frames) => {
      state.frames = frames;
    },
  },
  getters: {
    menus: state => state.menus,
    frames: state => state.frames
  }
};
export default app;
