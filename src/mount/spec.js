import { describe, it } from 'mocha';

import { JSDOM } from 'jsdom';

import { expect } from 'chai';
import mount from '.';

describe('#mount()', () => {
  it('injects a <div> to the document body', () => {
    const { window: { document } } = new JSDOM('<html><body></body></html>');
    const node = document.createElement('i');
    mount(node, document);
    expect(document.querySelector('body > div')).not.to.be.null;
  });

  it('places the given node into the injected <div>', () => {
    const { window: { document } } = new JSDOM('<html><body></body></html>');
    const node = document.createElement('i');
    mount(node, document);
    expect(document.querySelector('body > div > i')).not.to.be.null;
  });

  it('replaces the existing <div>, if any', () => {
    const { window: { document } } = new JSDOM('<html><body><div></div></body></html>');
    const node = document.createElement('i');
    mount(node, document);
    expect(document.querySelectorAll('body > div')).to.have.length(1);
  });
});
