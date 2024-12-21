const { StatusCodes } = require("http-status-codes");
const InternalDefaultCodes = require("./internal-codes/default.json");
const GatewayCodes = require("./gateway-codes/default.json");
const State = require("./states/default.json");

module.exports = {
  HTTP_STATUS_CODES: StatusCodes,
  INTERNAL_CODES: InternalDefaultCodes,
  GATE_CODES: GatewayCodes,
  STATE: State,
};
