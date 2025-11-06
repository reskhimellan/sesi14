import { expect } from 'chai';

// Function to generate random string
function generateRandomString(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

describe('Appium DEMO App', () => {

  afterEach(async () => {
    await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });
    await browser.pause(1000);
    await browser.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });
  });

  it('Input ke elemen', async () => {
    // menu: App > Alert Dialogs > Text Entry dialog

    const appMenu = await $('//android.widget.TextView[@content-desc="App"]');
    const alertDialogMenu = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    const textEntryDialogMenu = await $('//android.widget.Button[@content-desc="Text Entry dialog"]');

    await appMenu.click();
    await alertDialogMenu.click();
    await textEntryDialogMenu.click();

    // Isi field
    const nameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
    const passField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');

     const passwordRandom = generateRandomString(10);

    await nameField.setValue('QA_User');
    await passField.setValue(passwordRandom);


  });

});


  
    
