import _ from "lodash";
import {
  READ_EVENTS,
  CREATE_EVENT,
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
} from "../actions";


export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};
