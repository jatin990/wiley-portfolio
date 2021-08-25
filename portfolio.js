var ProjectIndex = 1;
showproject(ProjectIndex);

function PlusProject(n) {
  showproject(ProjectIndex += n);
}

function showproject(n) {
  var i;
  var project = document.getElementsByClassName("project");
  if (n > project.length) {ProjectIndex = 1}
  if (n < 1) {ProjectIndex = project.length}
  for (i = 0; i < project.length; i++) {
      project[i].style.display = "none";
  }
  project[ProjectIndex-1].style.display = "block";
  project[ProjectIndex-1].classList.add("show");
}