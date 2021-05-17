import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Services");
    }

    async getHtml() {
        return `
        <div class="services">
            <h1>Everything you need under one roof!</h1>
            <ul class="servicesList" >
                <li>HairCuts - $25</li>
                <li>BuzzCuts - $20</li>
                <li>Beard Trim $15</li>
                <li>Combo $35</li>
            </ul>
            <p>
            Walk-ins are not encouraged at this time! This will change with the ongoing Covid-19 quarantine and outbreak. You can however check the board outside of the shop for openings.
            </p>
        </div>
        `
    }
}

