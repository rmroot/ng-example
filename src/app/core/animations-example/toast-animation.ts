import { trigger, state, style, animate, transition } from '@angular/animations';

export const toastAnimation = trigger('toast',
    [
        state('show', style({
            bottom: '40px'
        })),
        transition('hide => show', animate('1s ease')),
        transition('show => hide', animate('1s ease'))
    ]
);