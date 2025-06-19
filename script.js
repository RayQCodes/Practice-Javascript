document.addEventListener("DOMContentLoaded", () => {
  //grabbing elements
  const button = document.getElementById("add-bookmark");
  const sitedisplay = document.getElementById("site-name");
  const urldisplay = document.getElementById("site-url");
  const bookmarklist = document.getElementById("bookmark-list");

  //waits for event listens makes sure its a button and on the click removes the li element alongside we have to do this cuz we use innerhtml to properly save to local storage.
  bookmarklist.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
      localStorage.setItem("bookmark", bookmarklist.innerHTML);
    }
  });

  // Load saved bookmarks on reload
  bookmarklist.innerHTML = localStorage.getItem("bookmark") || "";

  //listens for a click then adds the li item alongside the link
  button.addEventListener("click", () => {
    const text = sitedisplay.value.trim();
    const url = urldisplay.value.trim();

    //user check for whether an input is added for both
    if (text === "" || url === "") {
      alert("You need to enter both a name and a URL.");
      return;
    }

    // Create and add bookmark this includes the list , the a tag for the link along side the button
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = url;
    a.target = "_blank";
    li.appendChild(a);

    //delete button creation
    const delbutton = document.createElement("button");
    delbutton.textContent = "delete";

    //listens for a delete button onclick then it  will remove the whole li , due to the idea that we use innerhtml we actually have to create an event to listen to check if its actually a button .
    delbutton.onclick = function () {
      li.remove();
    };
    //this ultimately will add the delete button
    li.appendChild(delbutton);

    //adds the li to the page
    bookmarklist.appendChild(li);

    // Save updated HTML to localStorage
    localStorage.setItem("bookmark", bookmarklist.innerHTML);

    //clears input
    sitedisplay.value = "";
    urldisplay.value = "";
  });
});
