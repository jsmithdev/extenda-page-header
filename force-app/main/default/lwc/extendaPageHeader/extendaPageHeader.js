import { LightningElement, api } from 'lwc';

export default class ExtendaPageHeader extends LightningElement {
    /**
     * Title of the page header. todo: To include additional markup or another component, use the title slot.
     *
     * @type {string}
     * @public
     * @default 'Title'
     */
    @api title = 'Title';

    /**
     * Subtitle or description of the page header. todo: To include additional markup or another component, use the label slot.
     * @type {string}
     * @public
     * @default 'Subtitle'
     */
    @api subtitle = 'Subtitle';

    /**
     * Sets margin of the page header. Accepted values are css values such as 0.5rem or 1rem.
     * @type {string}
     * @public
     * @default '1rem'
     * @example
     * <c-extenda-page-header margin="1rem"></c-extenda-page-header>
     * <c-extenda-page-header margin="0.5rem"></c-extenda-page-header>
     */
    @api margin = undefined;

    /**
     * Padding of the page header. Accepted values are css values such as 0.5rem or 1rem.
     * @type {string}
     * @public
     * @default undefined
     * @example
     * <c-extenda-page-header padding="1rem"></c-extenda-page-header>
     * <c-extenda-page-header padding="0.5rem"></c-extenda-page-header>
     */
    @api padding = undefined;

    renderedCallback() {

        if(this.margin) {
            this.template
                .querySelector('.slds-page-header')
                .style.setProperty('margin', this.margin);
        }

        if(this.padding) {
            this.template
                .querySelector('.slds-page-header')
                .style.setProperty('padding', this.padding);
        }
    }

}
