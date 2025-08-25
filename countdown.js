const mulai = document.getElementById("mulai");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("hitungmundur");

let waktu = 300; // 5 menit dalam detik
let interval = null;

// Fungsi update tampilan waktu
function update() {
  const menit = Math.floor(waktu / 60);
  const detik = waktu % 60;
  timer.textContent =
    menit.toString().padStart(2, "0") + ":" +
    detik.toString().padStart(2, "0");
}

// Fungsi tombol mulai
function tombolmulai() {
  if (interval) return; // cegah interval dobel
  interval = setInterval(() => {
    waktu--;
    update();

    if (waktu <= 0) {
      clearInterval(interval);
      interval = null;
      alert("Telur dah matang!!");
      waktu = 300; // reset otomatis
      update();
    }
  }, 1000);
}

// Fungsi tombol stop
function tombolstop() {
  clearInterval(interval);
  interval = null;
}

// Fungsi tombol reset
function tombolreset() {
  clearInterval(interval);
  interval = null;
  waktu = 300;
  update();
}

// biar pertama kali tampil 05:00
update();

// Hubungkan tombol dengan fungsi
mulai.addEventListener("click", tombolmulai);
stop.addEventListener("click", tombolstop);
reset.addEventListener("click", tombolreset);
