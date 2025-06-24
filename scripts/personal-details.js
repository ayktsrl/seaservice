// scripts/personal-details.js

import { auth, db } from '../firebase-config.js';
import {
  doc,
  getDoc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const form = document.getElementById("detailsForm");

onAuthStateChanged(auth, async user => {
  if (!user) return location.href = "index.html";

  const docRef = doc(db, `seafarers/${user.uid}/cv/personalDetails`);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    const data = snapshot.data();
    for (const key in data) {
      const el = document.getElementById(key);
      if (el) el.value = data[key];
    }
    if (data.gender) {
      document.getElementById(data.gender.toLowerCase())?.setAttribute("checked", true);
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      middleName: form.middleName.value.trim(),
      gender: form.gender.value,
      dob: form.dob.value,
      birthPlace: form.birthPlace.value.trim(),
      nationality: form.nationality.value,
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      mobile: form.mobile.value.trim(),
      residence: form.residence.value,
      city: form.city.value.trim(),
      zip: form.zip.value.trim(),
      address: form.address.value.trim(),
      updatedAt: new Date().toISOString()
    };

    await setDoc(docRef, payload);
    alert("Personal details saved successfully.");
  });
});
