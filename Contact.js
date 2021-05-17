import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
        <div class="contact">
            <div class="contactForm">
                <h1>Reach out to us!</h1>
                <h4>(773)555-1234</h4>
                <h4>1234 Michigan Ave.</h4>
                <h4>Chicago, IL</h4>
                    <form>
                        <ul>
                            <li>
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="user_name">
                            </li>
                            <li>
                                <label for="mail">E-mail:</label>
                                <input type="email" id="mail" name="user_email">
                            </li>
                            <li>
                                <label for="msg">Message:</label>
                                <textarea id="msg" name="user_message"></textarea>
                            </li>
                        </ul>
                </form>
                <p>
                    <button class="contactBtn">Submit</button>
                </p>
            </div>
        </div>    
        `
    }
}
