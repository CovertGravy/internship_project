const dataset = document.querySelector('.dataset');
const dataheads = document.querySelectorAll('.data-head span');

// create element
function renderData(d) {
  let div = document.createElement('div');
  let data = d.data();
  let dataheadCount = 0;
  console.log(data, dataheads);

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let span = document.createElement('span');
      span.textContent = data[dataheads[dataheadCount++].textContent];
      div.appendChild(span);
      console.log(key);
    }
  }
  dataset.appendChild(div);
}

document.addEventListener('DOMContentLoaded', e => {
  const db = firebase.firestore();
  const automobiles = db.collection('automobiles');

  automobiles.get().then(data => {
    data.docs.forEach(doc => renderData(doc));
  });
  // const form = document.querySelector('form');
  // form.addEventListener('submit', e => {
  //   e.preventDefault();
  //   automobiles.add({
  //     Model: form.Model.value,
  //     MPG: form.MPG.value,
  //     Cylinders: form.Cylinders.value,
  //     Displacement: form.Displacement.value,
  //     Horsepower: form.Horsepower.value,
  //     Weight: form.Weight.value,
  //     Acceleration: form.Acceleration.value,
  //     Year: form.Year.value,
  //     Origin: form.Origin.value
  //   });
  //   alert('added');
  //   form.reset();
  // });
});
