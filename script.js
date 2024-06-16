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
const skill_problem_solving = document.querySelector("#skill_problem_solving")
skill_problem_solving.addEventListener("mouseover", () => {
    mouseover_fun("skill_problem_solving", "Problem Solving", "resourses/akash.jpg");
})

// Events on certificate and achievements
// events on su code blaze
const certificate_SUcode_blaze = document.querySelector("#certificate_SUcode_blaze")
certificate_SUcode_blaze.addEventListener("mouseover", () => {
    mouseover_fun("certificate_SUcode_blaze", "SU Code Blaze Hackthon", "resourses/akash.jpg");
})

// events IIRS-ISRO 
const cerificate_overview_geoprocessing_using_python = document.querySelector("#cerificate_overview_geoprocessing_using_python")
cerificate_overview_geoprocessing_using_python.addEventListener("mouseover", () => {
    mouseover_fun("cerificate_overview_geoprocessing_using_python", "Overview of geoprocessing using python", "resourses/akash.jpg");
})

// events on Smart india hackathon
const certifice_internal_smart_india_hackathon = document.querySelector("#certifice_internal_smart_india_hackathon")
certifice_internal_smart_india_hackathon.addEventListener("mouseover", () => {
    mouseover_fun("certifice_internal_smart_india_hackathon", "Internal Smart India Hackathon", "resourses/akash.jpg");
})

// events on NCC - C
const certificate_ncc_C_certificate = document.querySelector("#certificate_ncc_C_certificate")
certificate_ncc_C_certificate.addEventListener("mouseover", () => {
    mouseover_fun("certificate_ncc_C_certificate", "NCC- C Certificate", "resourses/akash.jpg");
})

// events on NCC ATC
const certificate_army_attachment_camp = document.querySelector("#certificate_army_attachment_camp")
certificate_army_attachment_camp.addEventListener("mouseover", () => {
    mouseover_fun("certificate_army_attachment_camp", "Army Attachment Camp certificate", "resourses/akash.jpg");
})

// events on MRDC CAMP
const certificate_MRDC = document.querySelector("#certificate_MRDC")
certificate_MRDC.addEventListener("mouseover", () => {
    mouseover_fun("certificate_MRDC", "MRDC", "resourses/akash.jpg");
})

// Events on extra-curricular activities
// events on su code blaze
const extra_curricular_debate_competion = document.querySelector("#extra_curricular_debate_competion")
extra_curricular_debate_competion.addEventListener("mouseover", () => {
    mouseover_fun("extra_curricular_debate_competion", "Debate Competition", "resourses/akash.jpg");
})

// events on su code blaze
const extra_curricular_quiz_competion = document.querySelector("#extra_curricular_quiz_competion")
extra_curricular_quiz_competion.addEventListener("mouseover", () => {
    mouseover_fun("extra_curricular_quiz_competion", "Quiz Competition", "resourses/akash.jpg");
})

// events on su code blaze
const extra_curricular_waste_to_best = document.querySelector("#extra_curricular_waste_to_best")
extra_curricular_waste_to_best.addEventListener("mouseover", () => {
    mouseover_fun("extra_curricular_waste_to_best", "Waste to Best competiton", "resourses/akash.jpg");
})

// events on su code blaze
const extra_curricular_IPSC_Band = document.querySelector("#extra_curricular_IPSC_Band")
extra_curricular_IPSC_Band.addEventListener("mouseover", () => {
    mouseover_fun("extra_curricular_IPSC_Band", "IPSC Band competition", "resourses/akash.jpg");
})

// Events on Projects
// Project - Sticky notes
// const project_sticky_notes = document.querySelector("#project_sticky_notes")
// project_sticky_notes.addEventListener("click"()=> {
//     // open sticky note website
// })
