import Route from '@ember/routing/route';
import {SPEAKERS} from "../constants/speakers";

export default Route.extend({
  model() {
    return {
      speakers: SPEAKERS
    }
  }
});
