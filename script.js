const outer_container = document.querySelector("#outer_container");
const remove_button = document.querySelector("#remove_button");
const content_header = document.querySelector("#content_header");
const content = document.querySelector("#content")

function mouseover_fun(id, data, src) {
    const element_id = document.querySelector(`#${id}`);
    element_id.style = "text-decoration:underline 1px;"
    element_id.addEventListener("mouseout", () => {
        element_id.style = "text-decoration: reset;"
    })
    element_id.addEventListener("click", () => {
        display_content(id, data, src);
    })


}
function display_content(id, data, src) {
    outer_container.style.display = "flex";
    content_header.innerHTML = data;
    content.style = `background-image: url(${src});`;

    remove_button.addEventListener("click", () => {
        outer_container.style.display = "none";
    })
}


// events on name
const Name = document.querySelector("#left_header #cv_name");
Name.addEventListener("mouseover", () => {
    mouseover_fun("cv_name", "AKASH KUMAR", "resourses/akash.jpg");
})


// events of btech cse marks
const btechcse_marksheet = document.querySelector("#btechcse_marksheet")
btechcse_marksheet.addEventListener("mouseover", () => {
    mouseover_fun("btechcse_marksheet", "Sem 3 Marksheet", "resourses/akash.jpg");
})


// events on Intermidiate and matriculation
const IntermidiateAndMatricualtion = document.querySelector("#IntermidiateAndMatricualtion")
IntermidiateAndMatricualtion.addEventListener("mouseover", () => {
    mouseover_fun("IntermidiateAndMatricualtion", "Intermidiate Marksheet", "resourses/akash.jpg");
})


// events on skills-android developer
const skill_android_developer = document.querySelector("#skill_android_developer")
skill_android_developer.addEventListener("mouseover", () => {
    mouseover_fun("skill_android_developer", "Android Developer", "resourses/akash.jpg");
})

// events on skills-web developer
const skill_web_developer = document.querySelector("#skill_web_developer")
skill_web_developer.addEventListener("mouseover", () => {
    mouseover_fun("skill_web_developer", "Web Developer", "resourses/akash.jpg");
})


// events on skills-data science
const skill_data_science = document.querySelector("#skill_data_science")
skill_data_science.addEventListener("mouseover", () => {
    mouseover_fun("skill_data_science", "Data science", "resourses/akash.jpg");
})

// events on skills-Leadership
const skill_leadership = document.querySelector("#skill_leadership")
skill_leadership.addEventListener("mouseover", () => {
    mouseover_fun("skill_leadership", "Leadership", "resourses/akash.jpg");
})


// events on skills-problem solving
const skill_problem_solvint = document.querySelector("#skill_problem_solvint")
skill_problem_solvint.addEventListener("mouseover", () => {
    mouseover_fun("skill_problem_solvint", "Problem Solving", "resourses/akash.jpg");
})
