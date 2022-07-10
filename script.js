var url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
let tbody = document.querySelector("tbody");
let a = document.querySelector("#info-content");

b();
async function b() {
  try {
    const c = await fetch(url);
    let d = await c.json();
    d.map((e) => {
      tbody.innerHTML += `<tr class="d-row">
      <td class="column1">${e.id}</td>
      <td class="column2">${e.firstName}</td>
      <td class="column3">${e.lastName}</td>
      <td class="column4">${e.email}</td>
      <td class="column5">${e.phone}</td>
    </tr>`;
    });
    let tr = document.querySelectorAll("tr");
 

    tr.forEach((rows) => {
      rows.addEventListener("click", function () {
        rows.className = "d-row";
        
        var l = document.querySelector(".active");
        if (l === null) {
          this.classList.add("active");
        } else {
          l.classList.remove("active");
        }
        this.classList.add("active");
      
        let g = this.firstElementChild.innerText;

        d.map((e) => {
        
          if (g == e.id) {
            a.innerHTML = `<div><b>User selected:</b> ${e.firstName} ${e.lastName}</div>
        <div>
            <b>Description: </b>
            <textarea cols="50" rows="5" readonly>
                ${e.description}
            </textarea>
        </div>
        <div><b>Address:</b> ${e.address.streetAddress}</div>
        <div><b>City:</b> ${e.address.city}</div>
        <div><b>State:</b> ${e.address.state}</div>
        <div><b>Zip:</b> ${e.address.zip}</div>
        `;
            a.style.display = "block";
            return;
          }
        });
      });
      rows.classList.remove("active");
    });
  } catch (err) {
    console.log(err);
  }
}

let k = document.getElementById("search-box");
k.addEventListener("input", function (e) {

  let h = document.getElementsByTagName("h");
  let tableContent = "";
  for (let u = 1; u < h.length; u++) {
   
    if (h[u].innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      h[u].style.display = "";
    } else {
      h[u].style.display = "none";
    }
  }
});
