/**
 * Sample controller
 */
import TestService from '../services/TestService';


export default {
  testMethod,
};

/**
 * Get test
 * @param {Object} req
 * @param {Object} res
 */
async function testMethod(req, res) {
  const result = await TestService.testMethod();
  res.json(result);
}
