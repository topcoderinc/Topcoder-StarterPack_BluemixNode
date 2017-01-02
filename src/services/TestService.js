/**
 * Sample service
 */
import decorate from 'decorate-it';

// ------------------------------------
// Exports
// ------------------------------------

const TestService = {
  testMethod,
};

decorate(TestService, 'TestService');

export default TestService;

// ------------------------------------
// Public
// ------------------------------------

/**
 * Test method
 * @returns {{success: Boolean}} the test result
 */
async function testMethod() {
  return await Promise.resolve({success: true});
}

testMethod.schema = {

};
