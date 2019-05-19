export class ListItemUtility {
    getProjects() {
        fetch('./projects.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
    }
}