import { expect } from 'chai';

describe('Navigasi ke Gallery & Photos', () => {

  it('Buka menu Views → Gallery → Photos', async () => {
    // Klik menu "Views" di halaman utama
    const viewsMenu = await $('//android.widget.TextView[@text="Views"]');
    await viewsMenu.waitForDisplayed({ timeout: 5000 });
    await viewsMenu.click();

    // Klik submenu "Gallery"
    const galleryMenu = await $('//android.widget.TextView[@text="Gallery"]');
    await galleryMenu.waitForDisplayed({ timeout: 5000 });
    await galleryMenu.click();

    // Klik submenu "Photos"
    const photosMenu = await $('//android.widget.TextView[@text="1. Photos"]');
    await photosMenu.waitForDisplayed({ timeout: 5000 });
    await photosMenu.click();

    console.log('Berhasil navigasi ke Gallery → Photos');

  });
});

