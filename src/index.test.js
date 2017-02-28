import {expect} from 'chai';
import carNames from './index';

describe('start test car-names module', () => {	
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(carNames.all).to.satisfy(isArrayOfStrings);

	  function isArrayOfStrings(array) {
	    return array.every(item => typeof item === 'string');
	  }
    });
	
    it('should contain one car named `Ferrari`', () => {
      expect(carNames.all).to.include('Ferrari');
    });
  });

  describe('random', () => {
    it('should return a random item from the carNames.all', () => {
      const randomCar = carNames.random();
      expect(carNames.all).to.include(randomCar);
    });
  });
});
