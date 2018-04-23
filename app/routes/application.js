import Route from '@ember/routing/route';
import { TIER_ONE_SPONSORS, TIER_TWO_SPONSORS } from "../constansts/sponsors";

export default Route.extend({
  model() {
    return {
      premierSponsors: TIER_ONE_SPONSORS,
      supportingSponsors: TIER_TWO_SPONSORS
    }
  }
});
