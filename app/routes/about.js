import Route from '@ember/routing/route';
import { ORGANIZERS } from '../constants/organizers';
import { TIER_ONE_SPONSORS } from "../constants/sponsors";

export default Route.extend({
  model() {
    return {
      organizers: ORGANIZERS,
      premierSponsors: TIER_ONE_SPONSORS
    };
  }
});
