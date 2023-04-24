const MyStoreScreen = require("../screens/MyStore.screen.js")
const HomeScreen = require("../screens/home.screen.js")
const LoginScreen = require("../screens/login.screen.js")

let url = 'http://lojaebac.ebaconline.art.br/';
let email = 'lojaebacqe@gmail.com';
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ';

describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await HomeScreen.goToButtonLogin();
        await HomeScreen.goToLogin();
        await LoginScreen.StoreAddress(url);
        await LoginScreen.continue();
        await LoginScreen.continue();
        await LoginScreen.StoreAddress(email);
        await LoginScreen.continue();
        await LoginScreenn.StoreAddresssenha(senha);
        await LoginScreen.continue();

        expect(await MyStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy();
        expect(await MyStoreScreen.getStoreName()).toEqual('EBAC - Shop');
    });

});