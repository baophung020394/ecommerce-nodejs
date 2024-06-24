"use strict";

const StatusCode = {
  FORBIDEN: 403,
  CONFLICT: 409,
};

const ReasonStatusCode = {
  FORBIDEN: "Forbidden Error",
  CONFLICT: "Conflict Error",
};

const { StatusCodes, ReasonPhrases } = require("../utils/httpStatusCodes");

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class ConflictResquestError extends ErrorResponse {
  constructor(
    message = ReasonStatusCode.CONFLICT,
    statusCode = StatusCode.FORBIDEN,
  ) {
    super(message, statusCode);
  }
}

class BadRequestError extends ErrorResponse {
  constructor(
    message = ReasonStatusCode.CONFLICT,
    statusCode = StatusCode.FORBIDEN,
  ) {
    super(message, statusCode);
  }
}

class AuthFailureError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNAUTHORIZED,
    statusCode = StatusCodes.UNAUTHORIZED,
  ) {
    super(message, statusCode);
  }
}

module.exports = { BadRequestError, ConflictResquestError, AuthFailureError };
