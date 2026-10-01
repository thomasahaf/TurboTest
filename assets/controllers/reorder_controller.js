import { Controller } from '@hotwired/stimulus';
import Sortable from "@stimulus-components/sortable"


export default class extends Sortable {
    static values = { url: String };

    connect() {
        super.connect()
        console.log("Do what you want here.")

        // The sortable.js instance.
        this.sortable

        // Your options
        this.options

        // Your default options
        this.defaultOptions

        console.log('Hello Stimulus! Edit me in assets/controllers/reorder_controller.js');
    }

    // You can override the `onUpdate` method here.
    onUpdate(event) {
        super.onUpdate(event);
        console.log("Do what you want here. 2");
    }

    // You can set default options in this getter for all sortable elements.
    get defaultOptions() {
        return {
            animation: 500,
        }
    }

    async save(event) {
        // The moved <li>. Its new index is its position among its siblings.
        const item = event.item ?? event.detail?.item;
        const newIndex = Array.from(this.element.children).indexOf(item);

        console.log("Getting new index " + newIndex);
        /*
        await fetch(this.urlValue.replace('__ID__', item.dataset.id), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ position: newIndex }),
        });*/
    }
}
