# Basic Search Flow

## Field validation
* Given I am on MarsAir homepage
* Then I should see Departing and Returning dropdown

## Seat available
* Given I am on MarsAir homepage
* When I search for "July" "December (two years from now)"
* Then I should see "Seats available!" in search result
* And I should see "Call now on 0800 MARSAIR to book!" in search result

## Seat not available
* Given I am on MarsAir homepage
* When I search for "December" "December (two years from now)"
* Then I should see "Sorry, there are no more seats available." in search result

## Invalid returning date (less than 1 year)
* Given I am on MarsAir homepage
* When I search for "December" "July (next year)"
* Then I should see "Unfortunately, this schedule is not possible. Please try again." in search result
