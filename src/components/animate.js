import anime from 'animejs'

export function translate(element) {
    anime({
        targets: element,
        keyframes: [
            { translateX: 10 },
            { translateY: 10 },
            { translateX: -10 },
            { translateY: 0 },
            { translateX: 0 },
        ],
        duration: 1000,
    })
}

export function zoomIn(element) {
    anime({
        targets: element,
        keyframes: [
            { scale: 1.05 },
            { scale: 1 }
        ],
        duration: 1200,
    })
}

export function changeBackground(element) {
    anime({
        targets: element,
        keyframes: [
        	{backgroundColor: '#2D033B'},
            {translateX: 100},
        	{backgroundColor: '#10A19D'},
            {translateX: -100},
        	{backgroundColor: '#CBD5E1'},
            {translateX: 0},
        ],
        easing: 'easeInOutQuad',
        duration: 1300,
    })
}