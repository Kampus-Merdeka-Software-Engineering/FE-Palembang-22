// Estimasi Harga
function getHarga(){
  let from = document.getElementById("asal").value;
  let to = document.getElementById("tujuan").value;
  let weigth = document.getElementById("berat").value;
  let length = document.getElementById("panjang").value;
  let heigth = document.getElementById("tinggi").value;
  let width = document.getElementById("lebar").value;
  
  
  let tableBody = document.querySelector('#data-estimasi tbody');

// Mendefinisikan URL API
let apiUrl = `https://magnificent-cod-slip.cyclic.app/products/${from}/${to}`;

  

// Mengambil data dari API
fetch(apiUrl)
.then(response => response.json())
.then(data => {
  // Loop melalui data dan tambahkan baris ke dalam tabel
  data.forEach(item => {
    let biaya_normal =parseInt(`${item.harga_normal}`)
    let tambahan = parseInt(`${item.tambahan}`);
    let volume = parseInt(length * heigth * width / 10000) // Mengonversi cm³ ke liter.
    let harga = 0
        
    if (volume > weigth){
      harga = biaya_normal + (volume - 10) * tambahan 
    }else if (weigth > 10.3){
      harga = (weigth - 10) * tambahan + biaya_normal
    }else{
      harga = biaya_normal
    }
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${item.nama_paket}</td>
                <td>${harga}</td>
                `;
                tableBody.appendChild(row);
              });
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
    });
    
  }


// Get Outlate

// Mendapatkan referensi ke elemen tabel
const tableBody = document.querySelector('#data-table tbody');

// Mendefinisikan URL API
const apiUrl = 'https://magnificent-cod-slip.cyclic.app/outlates';

// Mengambil data dari API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Loop melalui data dan tambahkan baris ke dalam tabel
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.kota}</td>
                <td>${item.alamat}</td>
                <td>${item.telp}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });




// DOM
function ubahWarnamn1() {
  mn1.style.backgroundColor = '#60b4df';
  mn1.style.color = '#ffffff';
  mn2.style.backgroundColor = '#ffffff';
  mn2.style.color = '#60b4df';
  mn3.style.backgroundColor = '#ffffff';
  mn3.style.color = '#60b4df';
  m1.style.display = 'flex';
  m2.style.display = 'none';
  m3.style.display = 'none';
}
function ubahWarnamn2() {
  mn1.style.backgroundColor = '#ffffff';
  mn1.style.color = '#60b4df';
  mn2.style.backgroundColor = '#60b4df';
  mn2.style.color = '#ffffff';
  mn3.style.backgroundColor = '#ffffff';
  mn3.style.color = '#60b4df';
  m1.style.display = 'none';
  m2.style.display = 'flex';
  m3.style.display = 'none';
}
function ubahWarnamn3() {
  mn1.style.backgroundColor = '#ffffff';
  mn1.style.color = '#60b4df';
  mn2.style.backgroundColor = '#ffffff';
  mn2.style.color = '#60b4df';
  mn3.style.backgroundColor = '#60b4df';
  mn3.style.color = '#ffffff';
  m1.style.display = 'none';
  m2.style.display = 'none';
  m3.style.display = 'flex';
}

const mn1 = document.getElementById('mn1');
const mn2 = document.getElementById('mn2');
const mn3 = document.getElementById('mn3');
const m1 = document.getElementById('main1');
const m2 = document.getElementById('main2');
const m3 = document.getElementById('main3');


mn1.addEventListener('click', ubahWarnamn1);
mn2.addEventListener('click', ubahWarnamn2);
mn3.addEventListener('click', ubahWarnamn3);





//LOADING SCROLL
window.addEventListener('scroll', reveal);

    function reveal(){
      let reveals = document.querySelectorAll('.reveal');

      for(let i = 0; i < reveals.length; i++){

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }

// SCROLL ATAS
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})