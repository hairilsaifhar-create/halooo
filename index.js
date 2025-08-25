const tombol = document.getElementById("info");
  const popup = document.getElementById("popupBox");

  tombol.addEventListener("click", (event) => {
    event.preventDefault(); // biar <a> tidak reload halaman
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") 
                          ? "flex" 
                          : "none";
  });

document.getElementById("formku").addEventListener("submit", myFunc);

  function myFunc(event) {
    event.preventDefault();

    try {
      var isinama = document.getElementById("isinama").value;
      var isikomen = document.getElementById("isikomen").value;

      // ambil data lama
      let semuaData = JSON.parse(localStorage.getItem("komentarList")) || [];

      // buat data baru
      let dataBaru = {
        dari: isinama,
        dia_bilang: isikomen
      };

      // tambahkan ke array
      semuaData.push(dataBaru);

      // simpan lagi
      localStorage.setItem("komentarList", JSON.stringify(semuaData));

      // kosongkan input
      document.getElementById("isinama").value = "";
      document.getElementById("isikomen").value = "";

      alert("Data berhasil disimpan!");
    } catch (err) {
      console.error("Terjadi error:", err);
      alert("Gagal menyimpan data, cek console!");
    }
  }

    const mulai = document.getElementById("mulai");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const timer = document.getElementById("hitungmundur");

  let waktu = 300; // 5 menit
  let interval;

  const update = () => {
    const menit = Math.floor(waktu / 60);
    const sekon = waktu % 60;
   timer.innerHTML = `${menit.toString().padStart(2, "0")}:${sekon.toString().padStart(2, "0")}`;
};

  const tombolmulai = () => {
    clearInterval(interval); // biar ga dobel kalau dipencet lagi
    interval = setInterval(() => {
      waktu--;
      update();

      if (waktu <= 0) {
        clearInterval(interval);
        alert("Telur dah matang!!");
        waktu = 300; // reset otomatis ke 5 menit
        update();
      }
    }, 1000);
  };

  const tombolstop = () => clearInterval(interval);

  const tombolreset = () => {
    clearInterval(interval);
    waktu = 300;
    update();
  };

  // biar pertama kali tampil format 05:00
  update();

  mulai.addEventListener("click", tombolmulai);
  stop.addEventListener("click", tombolstop);
  reset.addEventListener("click", tombolreset);