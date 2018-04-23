import Route from '@ember/routing/route';
import {SCHEDULE_ITEMS as SESSIONS } from "../constants/schedule";

export default Route.extend({
  model(){
    return {
      scheduleEvents: SESSIONS,
      sessions: SESSIONS
    }
  }
});
