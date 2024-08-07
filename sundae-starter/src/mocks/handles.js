import {http, HttpResponse} from 'msw'

export const handlers = [
    http.get('http://localhost3030/scoops', () => {
        // Note that you DONT'T have to stringify the json body. msw handles that for you
        return HttpResponse.json([
            {name: 'Chocolate', imagePath: '/images/chocolate-scoop.png'},
            {name: 'Vanilla', imagePath: '/images/vanilla-scoop.png'}
        ]
    
    )
    }),
]