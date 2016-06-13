import Operator from '../Operator';
import {inherits, field} from '../util/Functions';

/**
 * Generates a field accessor function.
 * @constructor
 * @param {object} params - The parameters for this operator.
 * @param {string} params.name - The field name to access.
 * @param {string} params.as - The accessor function name.
 */
export default function Field(params) {
  Operator.call(this, null, update, params);
}

inherits(Field, Operator);

function update(_) {
  return (this.value && !_.modified())
    ? this.value
    : field(_.name, _.as);
}
