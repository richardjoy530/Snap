import { trigger, transition, style, query, group, animate, } from '@angular/animations'

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('app-data => app-listing', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ],{ optional: true }),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
        ]),

        transition('app-listing => app-data', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ right: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ right: '100%' }))
                ],{ optional: true }),
                query(':enter', [
                    animate('300ms ease-out', style({ right: '0%' }))
                ])
            ]),
        ]),
        transition('* => login', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ],{ optional: true }),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
        ]),
        transition('login => *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ right: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ right: '100%' }))
                ],{ optional: true }),
                query(':enter', [
                    animate('300ms ease-out', style({ right: '0%' }))
                ])
            ]),
        ]),
    ]);