//background-color: #7283A6   
function openHTML() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
	    <title>My Team</title>
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.typekit.net/iuk5sne.css">
        </head>
    <body style="background-image:url('../images/snow_web.jpg');font-family: proxima-nova, sans-serif;">

    <div class="container" >

	        <div class="jumbotron mt-3" style="background-image:url('./images/snow_web.jpg'); background-size: cover">
		        <h1 class="text-center">Our Team</h1>
	        </div>
        <div class="container">
        
        <div class = "row">
`
}

function cardHTML(employee) {
    let pt2 = "";
    let pt1 = ` 
    <div class= "col-sm-4"> 
    <div class="card mb-3">
    <h5 class="card-header" style="background-color:#7CA6A2;font-family: proxima-nova, sans-serif;
    font-weight: 700;
    font-style: normal;">${employee.getRole()}</h5>
    <div class="card-body">
    <h5 class="card-title">${employee.name}</h5>
    <p class="card-text">Employee ID: ${employee.id}</p>
    <p class="card-text"><a href="mailto:${employee.email}">${employee.email}</a></p>`;

    if (employee.getRole() == "Manager") {
        pt2 = `<p class="card-text">Office: ${employee.officeNumber}</p>
        </div>
        </div>
        </div>
        `;
    }
    if (employee.getRole() == "Intern") {
        pt2 = `<p class="card-text">${employee.school}</p>
        </div>
        </div>
        </div>
        `;
    }
    if (employee.getRole() == "Engineer") {
        pt2 = `<p class="card-text"><a href= "https://github.com/${employee.github}/" target="_blank">GitHub: ${employee.github}</a></p>
        </div>
        </div>
        </div>
        `;
    }

    //<a href="#" class="btn btn-primary">Go somewhere</a>
    return (pt1 + pt2);
}
function closeHTML() {
    return `
        </div>
         </div>
        </div>
        </body>
        </html>
    `
}

module.exports = {
    openHTML,
    cardHTML,
    closeHTML
};
