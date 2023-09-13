const {
  $,
  dropDown,
  write,
  into,
  click
} = require('taiko')
const expect = require('chai').expect

const availableDepart = 'July'
const availableReturn = 'December (two years from now)'

step('When I search flight with promo code <code>', async (code) => {
  await dropDown('departing').select(availableDepart)
  await dropDown('returning').select(availableReturn)
  await write(code, into($('#promotional_code')))
  await click('Search')
})

step('Then I should be able to see <code> <discount> discount', async (code, discount) => {
  const msg = `Promotional code ${code} used: ${discount}% discount!`
  expect(await $('#content').text()).to.contain(msg)
})

step('Then I should be <code> is not valid', async (code) => {
  const msg = `Sorry, code ${code} is not valid`
  expect(await $('#content').text()).to.contain(msg)
})
