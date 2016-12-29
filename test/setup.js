/**
 * Configure testing utils
 */

import chai from 'chai';
import supertest from 'supertest';
import sinonChai from 'sinon-chai';
import decorate from 'decorate-it';
import chaiAsPromised from 'chai-as-promised';
import '../src/bootstrap';

chai.use(sinonChai);
chai.use(chaiAsPromised);

global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();

Promise.promisifyAll(supertest);

decorate.configure({
  debug: false,
});
