import Default from "./plugins/Default.js";
import Image from "./plugins/Image.js";
import Gangster from "./plugins/Gangster.js";
import TestCheating from "./plugins/TestCheating.js";

const config = {
  plugins: [
    // Stop telling me you can't browse the internet, etc
    TestCheating,
    // Add image generation ability
    //Image,
    // Talk like a 1940's gangster
    //Gangster,
  ],
};

export default config;
