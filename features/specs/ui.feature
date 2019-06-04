Feature: Google Homepage
  
  @UI
  Scenario: Vist google.com
    Given I visit google.com
    Then the title should contain Google