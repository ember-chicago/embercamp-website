import Route from '@ember/routing/route';
import { ORGANIZERS } from '../constants/organizers';

export default Route.extend({
  model() {
    return {
      organizers: ORGANIZERS
    };
  }
});
