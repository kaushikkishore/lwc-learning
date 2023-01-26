import { LightningElement } from 'lwc';
import CURRENT_USER_ID from '@salesforce/user/Id';
import IS_GUEST_USER from '@salesforce/user/isGuest';

export default class GetUserInformation extends LightningElement {
    userId = CURRENT_USER_ID;
    isGuesUser = IS_GUEST_USER;
}