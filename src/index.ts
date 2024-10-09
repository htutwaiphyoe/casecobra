import { Base } from "./base";
import { Posts } from "./posts";
import { applyMixins } from "./utils";

class SocialPlus extends Base {}

interface SocialPlus extends Posts {}

applyMixins(SocialPlus, [Posts]);

export default SocialPlus;
