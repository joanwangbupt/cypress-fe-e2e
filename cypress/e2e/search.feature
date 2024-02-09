Feature: search function of baidu.com

  Scenario: open "baidu.com' and search 'ILoveYou'

  Given I open homepage of baidu
  When I input ILoveYou
  And I click search button
  Then I get the feedback