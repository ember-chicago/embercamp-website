import Component from '@ember/component';
import {TIER_FOUR_SPONSORS, TIER_ONE_SPONSORS, TIER_THREE_SPONSORS, TIER_TWO_SPONSORS} from "../constants/sponsors";

export default Component.extend({
  platinum: TIER_ONE_SPONSORS,
  gold: TIER_TWO_SPONSORS,
  silver: TIER_THREE_SPONSORS,
  bronze: TIER_FOUR_SPONSORS,

  classNames: ['sponsors-list']
});
