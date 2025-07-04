import { auth, db } from '../../firebase-config.js';
import { doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const form = document.getElementById('detailsForm');

onAuthStateChanged(auth, async user => {
  if (!user) return window.location.href = "../../index.html";
  const ref = doc(db, "seafarers", user.uid, "cv", "personalDetails");
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const d = snap.data();
    form.firstName.value   = d.firstName   || '';
    form.lastName.value    = d.lastName    || '';
    form.middleName.value  = d.middleName  || '';
    form.dob.value         = d.dob         || '';
    form.birthPlace.value  = d.birthPlace  || '';
    form.nationality.value = d.nationality || '';
    form.gender.value      = d.gender      || '';
    form.email.value       = d.email       || '';
    form.phone.value       = d.phone       || '';
    form.mobile.value      = d.mobile      || '';
    form.residence.value   = d.residence   || '';
    form.city.value        = d.city        || '';
    form.zip.value         = d.zip         || '';
    form.address.value     = d.address     || '';
  }
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const user = auth.currentUser;
  if (!user) return;

  const data = {
    firstName:   form.firstName.value,
    lastName:    form.lastName.value,
    middleName:  form.middleName.value,
    dob:         form.dob.value,
    birthPlace:  form.birthPlace.value,
    nationality: form.nationality.value,
    gender:      form.gender.value,
    email:       form.email.value,
    phone:       form.phone.value,
    mobile:      form.mobile.value,
    residence:   form.residence.value,
    city:        form.city.value,
    zip:         form.zip.value,
    address:     form.address.value
  };

  await setDoc(doc(db, "seafarers", user.uid, "cv", "personalDetails"), data);
  alert("Personal details saved.");
});
