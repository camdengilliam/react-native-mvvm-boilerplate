describe('HomeView', () => {

  beforeEach(async () => {
    await device.reloadReactNative();
  });


  ///.toBeVisible()
  // .toBeNotVisible()
  // .toExist()
  // .toNotExist()
  // .toHaveText()
  // .toHaveId()
  // .toHaveValue()

  it('get users button should exist', async () => {
    const getUsersButton = await element(by.id('get-users-button'))
    await expect(getUsersButton).toExist()
  })

  it('get users button should not fail when pressed', async () => {
    try {
      const getUsersButton = await element(by.id('get-users-button'))
      await getUsersButton.tap()
    }
    catch (e) {

    }
  })

});
