import TestService from '../../src/services/TestService';

describe('MiscService', () => {
  describe('#testMethod', () => {
    it('should return success', async() => {
      const result = await TestService.testMethod();
      expect(result).to.deep.equal({success: true});
    });
  });
});
