const accordionContainers = document.querySelectorAll(".accordion-container");

accordionContainers.forEach(element => {
    element.addEventListener('click', handleAccordionClickEvent); 
});

//
function handleAccordionClickEvent(event) {
    // Handle button clicks
    if(event && event.target && event.target.tagName === "BUTTON") {
        // Walk up DOM and get the parent node
        let accordionSectionParent = event.target.parentElement.parentElement;
        let accordionSection = accordionSectionParent.querySelector("p");

        // Toggle hidden class
        let sectionHidden = accordionSection.classList.toggle("accordion-section-hidden");


        // Change text on button
        event.target.innerHTML = sectionHidden ? "show" : "hide"
    }
}