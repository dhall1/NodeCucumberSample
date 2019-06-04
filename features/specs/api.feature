Feature: Testing an API
  
  Makes some sample requests about posts to an API.
  
  Scenario Outline: JSONPlaceholder API
    Given I want the <n>th user
	  Then the username is "<username>"

  Examples:
    | n | username  |
	  | 0 | Bret      |
	  | 1 | Antonette |
  	| 2 | Samantha  |

  Scenario: ITunes API
    When I search for movies directed by 'James Cameron'
    Then the list of movies will include 'Avatar'
