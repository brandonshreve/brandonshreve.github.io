let projects = [
    {
        "title": "SubtleColor.com",
        "description": "Personal portfolio website. Written in vanilla JavaScript, HTML5, CSS3.",
        "link": "https://github.com/brandonshreve/brandonshreve.github.io"
    },
    {
        "title": "FSBookmarklet",
        "descrition": "A bookmarklet for FakeSpot",
        "link": "https://github.com/brandonshreve/FSBookmarklet"
    },
    {
        "title": "RfHb",
        "description": "A HandBrake helper for larger directory trees. Recursively calls the transcoder for a given directory.",
        "link": "https://github.com/brandonshreve/RfHb"
    },
    {
        "title": "RideAzon",
        "description": "Ride-sharing application for local events.",
        "link": "https://github.com/brandonshreve/RideAzon"
    }
];

let sites = [
    {
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/in/brandonshreve/"
    },
    {
        "name": "GitHub",
        "link": "https://github.com/brandonshreve"
    }
];

function addProjectsToDom() {
    const ulElement = document.querySelector('#projects-list');

    projects.forEach(project => {
        const liElement = document.createElement('li');
        const anchorElement = document.createElement('a');
        const textNode = document.createTextNode(project.title);

        anchorElement.setAttribute('href', project.link);
        anchorElement.appendChild(textNode);
        liElement.appendChild(anchorElement);
        ulElement.appendChild(liElement);
    });
}

function addLinksToDom() {
    const ulElement = document.querySelector('#links-list');

    sites.forEach(site => {
        const liElement = document.createElement('li');
        const anchorElement = document.createElement('a');
        const textNode = document.createTextNode(site.name);

        anchorElement.setAttribute('href', site.link);
        anchorElement.appendChild(textNode);
        liElement.appendChild(anchorElement);
        ulElement.appendChild(liElement);
    });
}

addProjectsToDom();
addLinksToDom();
