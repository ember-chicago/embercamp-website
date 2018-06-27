import Route from '@ember/routing/route';
import { SPEAKERS } from "../constants/speakers";
import { SCHEDULE_ITEMS } from "../constants/schedule";
import { TIER_ONE_SPONSORS } from "../constants/sponsors";

export default Route.extend({
  model() {
    return {
      speakers: SPEAKERS,
      scheduleItems: SCHEDULE_ITEMS,
      premierSponsors: TIER_ONE_SPONSORS
    };
  }
});
