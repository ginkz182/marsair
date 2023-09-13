const {
  goto,
  dropDown,
  click,
  $
} = require('taiko')
const expect = require('chai').expect

const homeUrl = process.env.home_url
step('Given I am on MarsAir homepage', async () => {
  await goto(homeUrl)
})

step('Then I should see Departing and Returning dropdown', async () => {
  await expect(await dropDown('departing').isVisible()).to.be.true
  await expect(await dropDown('returning').isVisible()).to.be.true
})

step('When I search for <departing> <returning>', async (departing, returning) => {
  await dropDown('departing').select(departing)
  await dropDown('returning').select(returning)
  await click('Search')
})

step(['Then I should see <msg> in search result', 'And I should see <msg> in search result'], async (msg) => {
  expect(await $('#content').text()).to.contain(msg)
})
