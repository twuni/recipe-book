import { describe, it } from 'mocha';

import { JSDOM } from 'jsdom';

import { expect } from 'chai';
import mount from '.';

describe('#mount()', () => {
  it('injects a <div> to the document body', () => {
    const { window: { document } } = new JSDOM('<html><body></body></html>');
    const element = document.createElement('i');
    mount(element, document);
    expect(document.querySelector('body > div')).not.to.be.undefined;
  });

  it('places the given element into the injected <div>', () => {
    const { window: { document } } = new JSDOM('<html><body></body></html>');
    const element = document.createElement('i');
    mount(element, document);
    expect(document.querySelector('body > div')).to.include(element);
  });

  it('replaces the existing <div>, if any', () => {
    const { window: { document } } = new JSDOM('<html><body><div></div></body></html>');
    const element = document.createElement('i');
    mount(element, document);
    expect(document.querySelector('body > div')).to.include(element);
  });
});
