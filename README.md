This application will be an Angular 1.x front end that will take in 2 numbers, a node.js restful service that will save the results to a DB and then retrieve the results the next time a page it loaded. The Angular code should be written in AngularJS ONLY, no TypeScript.

Include an instructions document that explains what software needs to be installed and direction on how to install and start/setup each part of the application so it can be used. Installation instructions of major databases are not required.
1.1.1.1	Assumptions
-	All software and frameworks are installed on the users system so we can run the application
-	All code should have a unit test associated with it  
1.1.1.2	Behavior
-	Angular App
o	Create a page that inputs 2 numbers
	Add CSS support for the inputs
•	When the input for either field is not a number >= 0
o	change the font to bold and red to show an error
o	font should change back to NOT bold and black when the input is valid  
	Test cases for the inputs
•	Any value -1 or less should cause the button to be disabled
•	value => 0 should be considered a valid input
•	Any text values should cause the field to be disabled 
o	Provide a button to calculate the results
	When clicked the application should take the 2 numbers and multiply them using a directive
	The calculate button should only be enabled when both inputs have a valid number entered in it
o	When I access the application it should check the database and load the last inputs and results if they exist
	Requires database and service portions to be completed
-	Mongo/MySQL/SQLServer/Oracle
o	Create a database that you can save the 2 inputs and the results of the calculation
o	The type of database is up to you, Mongo or MYSQL are preferred but not required 
-	NodeJS restful service
o	Create a simple service that has two paths: /saveData, /getData
o	This service should take the inputs and results and save them in the database
o	Should also provide a way to read the data from the database and populate UI
1.1.1.3	Configurations and Limitations
N/A
1.1.1.3.1	Graphical User Interfaces
UI can be any format you like as long as it follows the rules set out in the Angular App section 
1.1.1.4	Error / Exception Handling
Errors should be displayed as described in the application section. We want CSS rules for the inputs to change color and font based conditions specified in the description.

1.1.1.5	Unit Test
Please ensure add unit tests and document how to run unit test cases

