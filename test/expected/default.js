const template = () => html`<style>.heading{color:#00f}</style><h1 class="heading">${title}</h1><ul>${items.map(item => {
      return getHTML()`<li>${item}</li>`
    })}</ul>`;

export { template };
