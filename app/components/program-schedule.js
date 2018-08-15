import Component from '@ember/component';
import {SCHEDULE_ITEMS} from "../constants/schedule";
import {SPEAKERS} from "../constants/speakers";
import {map} from '@ember/object/computed';

export default Component.extend({
  classNames: ['program-schedule'],
  scheduleItems: SCHEDULE_ITEMS,
  speakers: SPEAKERS,

  scheduleItemsWithSpeakers: map('scheduleItems', function (item) {
    if (item.speaker) {
      item.speakerInfo = this.get('speakers').findBy('id', item.speaker);
    }
    return item;
  })
});
