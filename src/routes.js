/**
 * Contains all application endpoints
 */

import TestController from './controllers/TestController';

export default {
  '/test': {
    get: {
      method: TestController.testMethod,
      public: true,
    },
  },
};
