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
