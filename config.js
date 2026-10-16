// الصق هنا إعدادات مشروع Firebase (من: Project settings ← Your apps ← SDK setup and configuration ← Config)
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAPUy9Z7xHmTg7UyYF9QEc8d2SFbnHWkdM",
  authDomain: "afia-delivery.firebaseapp.com",
  projectId: "afia-delivery",
  storageBucket: "afia-delivery.firebasestorage.app",
  messagingSenderId: "267091912359",
  appId: "1:267091912359:web:3f58e49b56ad41b12b5d82"
};

// إعدادات التتبع (اختياري)
window.TRACKING = {
  minSeconds: 30,     // أقصى مدة بين تحديثين للموقع وهو واقف
  minMeters: 150,     // يرسل تحديث إذا تحرّك هذي المسافة
  floorSeconds: 10    // أقل مدة بين أي تحديثين (يحمي الباقة المجانية)
};
