Feature: System Process
  
  Scenario:	Call ls
    When I run the ls command
	  Then the list of files will contain the package.json file