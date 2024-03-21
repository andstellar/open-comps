async function copyForValue(event) {
    event.preventDefault();
    const forId = event.target.getAttribute('for');
    const forElement = forId ? document.getElementById(forId) : undefined;
    if (!forElement) return;
    console.log({forElement})
    const text = forElement.value ?? forElement.innerHTML;
    console.log({text})
    try {
      const task = navigator.clipboard.writeText( text );
      event.target.classList.add('copying');
      await task;
      event.target.classList.remove('copying');
      event.target.classList.add('copied');
    } catch (e) {
        event.target.classList.add('error');
    }
    setTimeout(() => {
      event.target.classList.remove('copying');
      event.target.classList.remove('copied');
      event.target.classList.remove('error');
    }, 1000)
  }

document.querySelectorAll('label[role=button].copy').forEach(element => element.addEventListener('click', copyForValue));
