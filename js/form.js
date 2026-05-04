const form = document.getElementById('screening-form');
if (form) {
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    if (!data.name || !data.email || !data.org) {
      status.textContent = 'Vänligen fyll i alla fält.';
      status.className = 'form-status form-status--error';
      return;
    }

    status.textContent = 'Skickar…';
    status.className = 'form-status';

    // TODO: replace with real endpoint
    await new Promise(r => setTimeout(r, 800));

    status.textContent = 'Tack! Filmlänken skickas till din e-post inom kort.';
    status.className = 'form-status form-status--success';
    form.reset();
  });
}
