var heading = document.createElement("h3")
heading.innerHTML = "Pagination"
heading.style.textAlign = "center"

var box = document.createElement("div")
box.setAttribute("id", "box")
box.style.marginTop = "30px"
var table = document.createElement("table")
table.setAttribute("class", "table")
table.style.width = "600px"
var thead = document.createElement("thead")
var tr = document.createElement("tr")
var th1 = document.createElement("th")
th1.innerHTML = "ID"
var th2 = document.createElement("th")
th2.innerHTML = "Name"
var th3 = document.createElement("th")
th3.innerHTML = "Email"
var tbody = document.createElement("tbody")

var pageicons = document.createElement("div")
pageicons.setAttribute("class", "text-center");
var ul = document.createElement("ul")
ul.setAttribute("class", "pagination");
pageicons.append(ul)
function fetchData(a) {
  var res = fetch("https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json")
  res.then(d => d.json()).then(d1 => {
      var data = d1
      console.log(data)
      tbody.innerHTML = ""
      let itemsPerPage = 10
      let startIndex = (a - 1) * itemsPerPage;
      let endIndex = startIndex + itemsPerPage;
      for (let i = startIndex; i < endIndex; i++) {
          tbody.innerHTML += `<tr>
          <td>${data[i].id}</td>
          <td>${data[i].name}</td>
          <td>${data[i].email}</td>
        </tr>`
      }
      currentPage = a;
      updatePagination();
  })
}

function updatePagination() {
  ul.innerHTML = `<li class="page-item"><a class="page-link" onclick=fetchData(1) href="#">First</a></li>
  <li class="page-item ${currentPage === 1 ? 'disabled' : ''}"><a class="page-link" onclick=fetchData(${currentPage - 1}) href="#">&laquo;</a></li>
  <li class="page-item"><a class="page-link" onclick=fetchData(1) href="#">1</a></li>
  <li class="page-item"><a class="page-link" onclick=fetchData(2) href="#">2</a></li>
  <li class="page-item"><a class="page-link" onclick=fetchData(3) href="#">3</a></li>
  <li class="page-item ${currentPage === 10 ? 'disabled' : ''}"><a class="page-link" onclick=fetchData(${currentPage + 1}) href="#">&raquo;</a></li>
  <li class="page-item"><a class="page-link" onclick=fetchData(10) href="#">Last</a></li>`
}


fetchData(1)
tr.append(th1, th2, th3)
thead.append(tr)
table.append(thead, tbody)
box.append(table)
document.body.append(heading, box, pageicons)
