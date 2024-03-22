import * as QRCode from 'qrcode';

// This function is used to modify the SVG string to use CSS variables for fill and stroke
/**
 * @param {string} svg
 */
function modifySVGForCSSVars(svg) {
    // Define the CSS variables with default values in a <style> tag
    const styleContent = `<style>:root { --qr-fill-color: red; --qr-stroke-color: yellow; }</style>`;

    // Find the position to insert the styleContent immediately after the first <svg> tag
    // This accounts for additional attributes within the <svg> tag
    const position = svg.indexOf(">") + 1;

    // Insert the styleContent into the SVG string at the found position
    const modifiedSvg =
        svg.slice(0, position) + styleContent + svg.slice(position);

    // Replace inline fill and stroke with CSS variable references
    return modifiedSvg
        .replace(/fill="[^"]*"/g, 'fill="var(--qr-fill-color, black)"') // Default fallback color is black
        .replace(/stroke="[^"]*"/g, 'stroke="var(--qr-stroke-color, white)"') // Default fallback stroke
        .replace(/width="[^"]*"/g, '') // Remove width
        .replace(/height="[^"]*"/g, ''); // And height attributes to allow for responsive scaling
};

export class QRCodeComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // const value = this.getAttribute('value');
        // if (value) {
        //     this.generateQRCode(value);
        // }
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(value) {
        if (value)
            this.setAttribute('value', value);
        else
            this.removeAttribute('value');
    }

    /**
     * @param {any} value
     */
    async generateQRCode(value) {
        const code = await QRCode.toString(
            value,
            { color: { dark: "#123456FF", light: "#789ABCFF" }, type: "svg", width: 200 });

        this.shadow.innerHTML = modifySVGForCSSVars(code);
    }

    static get observedAttributes() {
        return ['value'];
    }

    /**
     * @param {string} name
     * @param {any} oldValue
     * @param {any} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value' && newValue !== oldValue) {
            this.generateQRCode(newValue);
        }
    }
}

customElements.define('qr-code', QRCodeComponent);