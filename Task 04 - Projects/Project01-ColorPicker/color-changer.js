const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'grey':
        return (body.style.backgroundColor = e.target.id);

      case 'white':
        return (body.style.backgroundColor = e.target.id);

      case 'blue':
        return (body.style.backgroundColor = e.target.id);

      case 'yellow':
        return (body.style.backgroundColor = e.target.id);
    }
  });
});
