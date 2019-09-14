/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//global  variables//
const h3 = document.querySelectorAll("h3");
const pageHeader = document.querySelector(".page-header");
const page = document.querySelector(".page");
const studentItems = document.querySelectorAll(".student-item");
let perPage = 10;
const ul = document.querySelector(".student-list");

//function to show list of students//
const showPage = (list, page) => {
  const start = page * perPage - perPage;
  const end = page * perPage - 1;
  for (let i = 0; i < list.length; i++) {
    if (i >= start && i <= end) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};

showPage(studentItems, 1);

const appendPageLinks = list => {
  //round number up to get 6 pages for 54 students//
  const pages = Math.ceil(studentItems.length / perPage);
  const div = document.createElement("div");
  div.className = "pagination";
  page.appendChild(div);
  const ul = document.createElement("ul");
  div.appendChild(ul);
  //loop through pages and add ul and 'a' elements for each page//
  for (let i = 0; i < pages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    //for each page add a page number from the iteration of "i" for anchor tags//
    a.textContent = i + 1;
    ul.appendChild(li);
    li.appendChild(a);
    a.href = "#";
    const anchor = document.querySelectorAll("a");
    for (let i = 0; i < anchor.length; i++) {
      //first achor tag with active class//
      anchor[0].className = "active";
      //event listener for ul for anchor tags to pass up the dom tree//
      ul.addEventListener("click", e => {
        //remove all active classes from anchor tags
        anchor[i].classList.remove("active");
        //add active class onclick event//
        e.target.className = "active";
        showPage(studentItems, e.target.textContent);
      });
    }
  }
};
appendPageLinks(studentItems);

const div = document.createElement("div");
div.className = "student-search";
const input = document.createElement("input");
input.placeHolder = "Search for Students";
input.type = "text";
const button = document.createElement("button");
const h4 = document.createElement("h4");
button.textContent = "search";
pageHeader.appendChild(div);
div.appendChild(input);
div.appendChild(button);
div.appendChild(h4);

input.addEventListener("keyup", () => {
  searchStudent(input, studentItems);
});

button.addEventListener("submit", () => {
  e.preventDefault;
  searchStudent(input, studentItems);
});

const searchStudent = (searchInput, name) => {
  for (let i = 0; i < name.length; i++) {
    name[i].style.display = "none";
    const searchInput = input.value.toUpperCase();
    const student = name[i].querySelector("h3").textContent.toUpperCase();
    if (searchInput !== 0 && student.includes(searchInput)) {
      name[i].style.display = "";
    }
  }
};
