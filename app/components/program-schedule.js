import Component from '@ember/component';
import {SCHEDULE_ITEMS} from "../constants/schedule";
import {SPEAKERS} from "../constants/speakers";
import { computed } from '@ember/object';
import {set} from '@ember/object';

export default Component.extend({
  classNames: ['program-schedule'],
  scheduleItems: SCHEDULE_ITEMS,
  speakers: SPEAKERS,

  showBreaks: false,

  scheduleItemsWithSpeakers: computed('scheduleItems', function () {
    let events = this.get('scheduleItems');
    return events.map(this._normalizeEvents.bind(this)).filter(Boolean);
  }),

  _normalizeEvents(event) {
    if (event.speaker) {
      let speaker = this.get('speakers').findBy('id', event.speaker);

      set(event, 'title', speaker.talkTitle);
      set(event, 'name', speaker.name);
      return event;
    }

    if (event.title === 'Break') {
      if (this.get('showBreaks')) {
        return event;
      }
      return null;
    }

    return event;
  }
});
