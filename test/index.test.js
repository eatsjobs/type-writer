import { html, fixture, expect, aTimeout } from "@open-wc/testing"
import '../type-writer';

it('should render correctly', async () => {
  const el = await fixture(html`<type-writer>This is a test</type-writer>`);
  await el.start();
  expect(el.shadowRoot.querySelector("#type-write").textContent).to.equal("This is a test");
});

it('should autostart', async () => {
  const el = await fixture(html`<type-writer autostart>This is a test</type-writer>`);
  await el._startPromise
  expect(el.shadowRoot.querySelector("#type-write").textContent).to.equal("This is a test");
});

it('should respect typing delay', async () => {
  const el = await fixture(html`<type-writer typingdelay="1000">This is a test</type-writer>`);  
  el.start();
  el.pause();
  expect(el.shadowRoot.querySelector("#type-write").textContent).to.equal("T");
});

it("passes the a11y audit", async () => {
  const el = await fixture(html`<type-writer>Some text here</type-writer> `);
  await el.start();
  await expect(el).shadowDom.to.be.accessible();
});