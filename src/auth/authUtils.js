"use strict";
const JWT = require("jsonwebtoken");
const { asyncHandler } = require("../helpers/asyncHandler");

const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
};

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    //accessToken
    const accessToken = JWT.sign(payload, publicKey, {
      // algorithm: "RS256",
      expiresIn: "2 days",
    });

    const refreshToken = JWT.sign(payload, privateKey, {
      // algorithm: "RS256",
      expiresIn: "7 days",
    });

    //

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.error(`error verify::`, err);
      } else {
        console.log(`decode verify::`, decode);
      }
    });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {}
};

const authentication = asyncHandler(async (req, res, next) => {
  /**
   * 1 - Check userId missing???
   * 2 - get accessToken
   * 3 - veirfyToken
   * 4 - check user in bds?
   * 5 - check keyStore with this userId
   * 6 - OK all => return next()
   */

  const userId = req.headers["x-user-id"];
});

module.exports = {
  createTokenPair,
};
