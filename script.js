var filters = [];

function filterProject(event, type) {
    // Toggle the active class on the clicked filter button
    event.currentTarget.classList.toggle('active');
    // Toggle the filter type
    var filterIndex = filters.findIndex((filter) => filter === type);
    filterIndex === -1 ? filters.push(type) : filters.splice(filterIndex, 1);

    if (filters.length === 0) {
        // Show all projects if no filters are applied
        document.querySelectorAll('.project').forEach((project) => {
            project.classList.remove('hidden');
        });
    } else {
        // Hide all projects first
        document.querySelectorAll('.project').forEach((project) => {
            project.classList.add('hidden');
        });

        // Show only the projects that match the filters
        filters.forEach((filter) => {
            document.querySelectorAll(`.project-type__${filter}`).forEach((project) => {
                project.classList.remove('hidden');
            });
        });
    }
}