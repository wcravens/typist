import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use( chaiAsPromised );
const expect = chai.expect;

describe( 'typist', () => {
  context( 'on import', () => {
    it( 'should be a promise', async () => {
      expect( import( 'typist.js' ) ).to.be.a( 'promise' );
    });
    it( 'should eventually return a function', async () => {
      expect( import( 'typist.js' ) ).to.eventually.be.a( 'function' );
    });
  });
  it( 'should just work', async () => {
    const typist = ( await import( './typist.js' ) ).typist;
    expect( typist().type('H') ).to.be.ok;
    expect(
      typist().type('Hello, world!').to( console.log )
    ).to.be.ok;
  });
  it( 'should generate the right events. #Create the right kind of "listener" function to test.');
  it( 'should output a null as the last character as a way to trigger a "finished event"');
})
