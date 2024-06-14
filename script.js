const Name = document.querySelector("#left_header #cv_name");

Name.addEventListener("click", () => {
    display_content("cv_name", "AKASH KUMAR", "resourses/akash.jpg");
})
Name.addEventListener("mouseover", () => {
    Name.style = "text-decoration:underline 5px;"
})
Name.addEventListener("mouseout", () => {
    Name.style = "text-decoration:underline reset;"
})

// events of btech cse marks
const btechcse_marksheet = document.querySelector("#btechcse_marksheet")
btechcse_marksheet.addEventListener("mouseover", () => {
    btechcse_marksheet.style = "text-decoration:underline;"
})
btechcse_marksheet.addEventListener("mouseout", () => {
    btechcse_marksheet.style = "text-decoration:none;"
})
btechcse_marksheet.addEventListener("click", () => {
    btechcse_marksheet.style = "text-decoration:underline;"
    display_content("cv_name", "Third semester Marksheet", "resourses/akash.jpg");
})





const outer_container = document.querySelector("#outer_container");
const remove_button = document.querySelector("#remove_button");
const content_header = document.querySelector("#content_header");
const content = document.querySelector("#content")

function display_content(id, data, src) {
    // document.querySelector(`#${id}`).addEventListener("click", () => {
    //     // outer_container.style.display = "flex";
    // })
    outer_container.style.display = "flex";
    content_header.innerHTML = data;
    content.style = `background-image: url(${src});background-size: contain;background-repeat: no-repeat; `;

    remove_button.addEventListener("click", () => {
        outer_container.style.display = "none";
    })
}
