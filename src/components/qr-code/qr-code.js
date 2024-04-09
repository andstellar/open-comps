import { html } from "htm/preact";
import { define } from "preact-progressive-enhancement";
import * as QRCode from "qrcode";

/**
 * @template P
 * @typedef {import('preact').FunctionComponent<P>} FunctionComponent<P>
 */
/**
 * @template P
 * @typedef {import('preact').ComponentClass<P>} ComponentClass<P>
 */
/**
 * @template P
 * @typedef {import('preact').FunctionalComponent<P>} FunctionalComponent<P>
 */

/**
 * @param {Uint8Array} data
 * @param {number} size
 * @param {number} margin
 */
function qrToPath(data, size, margin) {
  let path = "";
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);

    if (!col && !newRow) newRow = true;

    if (data[i]) {
      lineLength++;

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? `M ${col + margin} ${0.5 + row + margin}`
          : `m ${moveBy} 0`;

        moveBy = 0;
        newRow = false;
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += `h ${lineLength}`;
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }

  return path;
}

/**
 * @param {QRCode.QRCode} qrData
 * @returns {import('preact').VNode<{}>}
 */
function render(qrData) {
  const margin = 4;
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + margin * 2;

  return html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${qrcodesize} ${qrcodesize}" shape-rendering="crispEdges">
        <style>:root { --qr-fill-color: white; --qr-stroke-color: black; }</style>
        <path fill="var(--qr-fill-color, black)" d="M0 0h ${qrcodesize}v${qrcodesize}H0z"/>
        <path stroke="var(--qr-stroke-color, white)" d="${
    qrToPath(data, size, margin)
  }"/>
    </svg>`;
}

/**
 * @param {{value: string}} props
 */
export function QrCode({ value }) {
  const code = QRCode.create(value);
  return render(code);
}

export const QrCodeElement = define(QrCode, "qr-code", ["value"], {
  shadow: false,
});
