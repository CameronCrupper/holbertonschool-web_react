import Immutable from 'immutable';

export default function getImmutableObject(object) {
  return Immutable.fromJS(object);
}
