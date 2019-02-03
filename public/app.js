document.addEventListener('DOMContentLoaded', e => {
  const app = firebase.app();
  console.log(app);

  const db = firebase.firestore();
  const automobiles = db.collection('automobiles');

  automobiles.get().then(data => {
    data.docs.forEach(doc => console.log(doc.data()));
  });
});
