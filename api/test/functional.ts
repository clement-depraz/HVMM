const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();

describe('math', () => {
    it('returns true when 1 + 1 equals 2', () => {
        expect(1 + 1).to.equal(2);
    });
});
