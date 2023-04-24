class LoginScreen {
    get #storeAddress() { return $('android.widget.EditText') }

    get #continue() {return $('android=new UiSelector().text("Continue")')}

    get #storeAddresssenha() { return $('android.widget.EditText') }

    async StoreAddress(url){
        this.#storeAddress.setValue(url)
    }

    async continue(){
        await this.#continue.waitForExist({ timeout: 10000 })
        await this.#continue.click()
    }

    async StoreAddress(email){
        this.#storeAddress.setValue(email)
    }

    async StoreAddresssenha(senha){
        this.#storeAddresssenha.setValue(senha)
    }
}

module.exports = new LoginScreen()