import Route from '@ember/routing/route';
import { SPEAKERS } from "../constants/speakers";
import { SCHEDULE_ITEMS } from "../constants/schedule";

export default Route.extend({
  model() {
    return {
      speakers: SPEAKERS,
      scheduleItems: SCHEDULE_ITEMS
    };
  }
});
