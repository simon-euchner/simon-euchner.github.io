/* -------------------------------------------------------------------------- *
 * LOAD HTML SOURCES                                                          *
 *                                                                            *
 * AUTHOR OF THIS FILE: SIMON EUCHNER                                         *
 * -------------------------------------------------------------------------- */

/* LOAD HTML SOURCE*/
function loadHtmlSource(path, id) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error("Allow JS to see legal matters.", err));
}
