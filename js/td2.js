/**
 *
 * M413 - TD2
 * *
 * 	@author Jean-Michel Bruneau
 *	@copyright UCA - IUT -INFO
 * 	@version	1.0
 * 	@date			2021-01-31
 *
 */
"use strict";

// M413 - TD2
let message = "JavaScript is ok :)";
// alert( message);
console.log(message);

function onLoad() {
  console.log("Processus de chargement du document terminé…");
  initSelect();
  var nouvelleDiv = document.createElement("div");
  nouvelleDiv.id = "insert-div";
  nouvelleDiv.innerHTML = `
	  <select id="insert-type" name="type">
		<option value="div">div</option>
		<option value="p">p</option>
		<option value="span">span</option>
	  </select>
	  <input type="text" id="insert-text" value="My New Text Element">
	`;
  document.body.insertBefore(nouvelleDiv, document.body.firstChild);
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
function initSelect() {
  //   document.body.addEventListener("click", select, false);
  //   document.body.addEventListener("click", select2, false);
  document.body.addEventListener("click", select3, false);
}
function select(e) {
  if (e.target.style.backgroundColor === "") {
    e.target.style.backgroundColor = "red";
  } else {
    e.target.style.backgroundColor = "";
  }
}
function select2(e) {
  if (e.target.classList.contains("blue")) {
    e.target.classList.remove("blue");
  } else {
    if (e.target.id != "insert-div" && e.target.parentNode.id != "insert-div") {
      document.querySelectorAll(".blue").forEach((el) => {
        el.classList.remove("blue");
      });
      e.target.classList.add("blue");
    }
  }
  insertElement(e.target);
}
function insertElement(target) {
  var newElement = document.createElement(
    document.getElementById("insert-type").value
  );
  newElement.innerHTML = document.getElementById("insert-text").value;
  document.body.insertBefore(newElement, target);
}
function search() {
  var searchText = document.getElementById("search-text").value;
  clearSelection();
  function clearSelection() {
    var selected = document.querySelectorAll(".select");
    for (var i = 0; i < selected.length; i++) {
      selected[i].classList.remove("select");
    }
  }
  if (!searchText == "") {
    function traverse(node) {
      var child, next;
      switch (node.nodeType) {
        case 1:
          if (node.tagName.toLowerCase() != "script") {
            for (child = node.firstChild; child; child = next) {
              next = child.nextSibling;
              traverse(child);
            }
          }
          break;
        case 3:
          var text = node.nodeValue;
          var re = new RegExp(searchText, "gi");
          if (re.test(text)) {
            var parent = node.parentNode;
            var html = parent.innerHTML;
            html = html.replace(re, '<span class="select">$&</span>');
            parent.innerHTML = html;
          }
          break;
      }
    }
    traverse(document.body);
  }
}
function select3(e) {
  if (e.target.style.backgroundColor != "red") {
    e.target.style.backgroundColor = "red";
    e.target.parentNode.style.backgroundColor = "orange";
  } else if (e.target.style.backgroundColor == "red") {
    if (e.target.children.length != 0) {
      e.target.style.backgroundColor = "orange";
    } else {
      e.target.style.backgroundColor = "";
    }
    e.target.parentNode.style.backgroundColor = "";
  }
}
