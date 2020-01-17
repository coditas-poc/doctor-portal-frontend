import { OrderedMap } from "immutable";
import {
  SAVE_INSTANCE,
  REMOVE_INSTANCE,
  UPDATE_INSTANCE,
  DELETE_ALL_INSTANCES,
  SAVE_ALL_INSTANCES
} from "@constants/actions";

export function modelReducer(state = OrderedMap({}), action: any) {
  switch (action.type) {
    case SAVE_INSTANCE:
      return state.set(action.key, action.instance);
    case SAVE_ALL_INSTANCES:
      return state.merge(action.instanceMap);
    case REMOVE_INSTANCE:
      return state.delete(action.key);
    case UPDATE_INSTANCE:
      return state.update(action.key, () => action.instance);
    case DELETE_ALL_INSTANCES:
      return state.deleteAll(action.instances);
    default:
      return state;
  }
}
