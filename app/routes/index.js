import Route from '@ember/routing/route';
import { SPEAKERS } from "../constansts/speakers";
import { SCHEDULE_ITEMS } from "../constansts/schedule";

export default Route.extend({
  model() {
    return {
      speakers: SPEAKERS,
      scheduleItems: SCHEDULE_ITEMS
    };
  }
});
