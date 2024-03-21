import { html } from 'htm/preact';
import { useRef } from 'preact/hooks';
import preactement from 'preactement';

const define = preactement.define;

export function ImageCompare() {
    /** @type {import('preact').Ref<HTMLDivElement>} */
    const containerRef = useRef();
    /** @type {import('preact').Ref<HTMLInputElement>} */
    const inputRef = useRef();
  return html`
  <div class="wrapper">
  <div class="compare">
  <section class="before">
    <img src="https://assets.codepen.io/2585/Runner.svg" alt="" />
  </section>
  <section class="after">
    <img src="https://assets.codepen.io/2585/Roboto.svg" alt="" />
  </section>
  <input type="range" id="range"></input>
</div> 
</div>
    `;
}

export const MyCounterElement = define('image-compare', () => ImageCompare);
