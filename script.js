const container = document.getElementById('container')

window.addEventListener('keydown', (event) => {
  container.innerHTML = `
  <div class="keys">
  ${event.key === ' ' ? 'Space' : event.key} 
  <span>event.key</span>
</div>

<div class="keys">
  ${event.keyCode}
  <span>event.keyCode</span>
</div>

<div class="keys">
  ${event.code}
  <span>event.code</span>
</div>
  `
})