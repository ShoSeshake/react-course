import {READ_EVENTS,CREATE_EVENT, DELETE_EVENT} from "../actions"

import _ from 'lodash'

export default (events = {}, action) => {
  switch(action.type) {
    case CREATE_EVENT:
    case DELETE_EVENT:
      delete events[action.id]
      console.log('hi')
      return {...events}
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')

    default:
      return events
  }
}