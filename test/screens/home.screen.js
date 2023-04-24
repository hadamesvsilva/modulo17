class HomeScreen {
    get #enterSkip(){
        return $('id:button_skip')
    }

    async goToButtonLogin(){
        await this.#enterSkip.click()
    }

    get #enterStoreAddress(){
        return $('id:button_login_store')
    }

    async goToLogin(){
        await this.#enterStoreAddress.click()
    }
}

module.exports = new HomeScreen()