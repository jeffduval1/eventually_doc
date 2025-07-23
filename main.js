 // Accordéons exclusifs pour les codes imbriqués (optionnel)
 document.querySelectorAll('.section details').forEach(parent => {
    const nestedDetails = parent.querySelectorAll('details');

    nestedDetails.forEach(d => {
      d.addEventListener('toggle', () => {
        if (d.open) {
          nestedDetails.forEach(other => {
            if (other !== d) other.removeAttribute('open');
          });
        }
      });
    });
  });