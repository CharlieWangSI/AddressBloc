 const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  beforeEach(() => {
      this.menu = new MenuController();
    });

// #3
  describe("remindMe", () => {

    it("should return corrent reminder", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
    });

  });
});
