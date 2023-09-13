# Departing Returning Validation

| departing | returning |
| December  | December |
| December  | July (next year) |
| December (next year) | July |


## Invalid schedule
* Given I am on MarsAir homepage
* When I search for <departing> <returning>
* Then I should see "Unfortunately, this schedule is not possible. Please try again." in search result
