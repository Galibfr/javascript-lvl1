

var tasks = [];
var addTask;
var addAnother = "y";
var editTask;
var deleteTask;
var display = "";

display = prompt(
	"Task List \n\n\n\n(1)Add Task\n(2)Delete Task\n(3) Edit Task \n(4)Quit"
);

while (addAnother == "y") {
	addTask = parseFloat(prompt("Enter a task"));
	tasks.push(addTask);
	addAnother = prompt("Do you want to add another task? y or n");
}

for (x = 0; x < addTask.length; x++) {
	display = display + tasks[x];
	alert(
		prompt(
			"Task List\n" +
				addTask +
				"\n\n\n\n(1)Add Task\n(2)Delete Task\n(3) Edit Task\n(4)Quit"
		)
	);
}
alert(display);
