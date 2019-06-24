import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const toastAnimation: AnimationTriggerMetadata = trigger('toast',
    [
        state('show', style({
            bottom: '40px'
        })),
        state('hide', style({
            bottom: '-100%'
        })),
        transition('hide => show', animate('1s ease')),
        transition('show => hide', animate('1s ease'))
    ]
);