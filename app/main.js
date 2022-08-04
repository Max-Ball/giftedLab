import { GiffysController } from "./Controllers/GiffysController.js";
import { GiftsController } from "./Controllers/GiftsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  giftsController = new GiftsController()
  giffysController = new GiffysController()
}

window["app"] = new App();
