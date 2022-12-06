<script>

import { translate, zoomIn, changeBackground } from './animate.js'

export default {
    data() {
        return {
            valueDisplay: '',
            operatorsElement: [
                'AC', '%', '/', '*',
                7, 8, 9, '-',
                4, 5, 6, '+',
                1, 2, 3, '=',
                0, '.'
            ],
            previousValue: '',
            operator: null,
            vibrated: false,
            moved: false,
            errOperators: false,
        }
    },
    methods: {
        calculate(n) {

            this.randomize()

            try {
                if (!isNaN(n) || n === '.') {
                    this.valueDisplay += n + ''
                }

                if (n === 'AC') {
                    this.valueDisplay = ''
                }

                if (['/', '*', '+', '-'].includes(n)) {
                    this.operator = n
                    this.previousValue = this.valueDisplay
                    this.valueDisplay = ''
                }

                if (n === '%') {
                    this.valueDisplay = this.valueDisplay / 100
                }

                if (n === '*') {
                    this.changeBg()
                }

                if (n === '=') {
                    this.moved = true
                    setTimeout(() => {
                        this.moved = false
                    }, 1500)

                    this.valueDisplay = eval(
                        this.previousValue + this.operator + this.valueDisplay
                    )
                    this.previousValue = ''
                    this.operator = null
                }

                this.numberAnimation(n)

                this.errOperators = false

            } catch (e) {
                console.log(e);
                this.errOperators = true
            }

        },
        randomize() {

            const arrLength = this.operatorsElement.length // get operators element's length

            const startRandom = Math.floor(Math.random() * arrLength) // get random start  and end 
            const endRandom = Math.floor(Math.random() * arrLength)


            const fromIndex = startRandom // get start array index
            const toIndex = endRandom // set the end pos of array

            const newEl = this.operatorsElement.splice(fromIndex, 1)[0] // get the array that will be moved to

            this.operatorsElement.splice(toIndex, 0, newEl) // output the random pos

        },
        animateElOne() {
            translate(this.$refs.calcMove)
        },
        animateElEight() {
            zoomIn(this.$refs.calcMove)
        },
        changeBg() {
            changeBackground(this.$refs.calcMove)
        },
        numberAnimation(n) {
            if (n === 5) {
                this.vibrated = true
                setTimeout(() => {
                    this.vibrated = false
                }, 1500)
            }
            if (n === 1) {
                this.animateElOne()
            }
            if (n === 8) {
                this.animateElEight()
            }
        }
    }
}
</script>
<template>
    <div class="wrapper-2 relative bg-slate-300 shadow-2xl" ref="calcMove" :class="[{active: vibrated}, {act: moved}]">
        <div class="display p-2 m-auto h-16 w-full bg-purple-700">
            <h1 class="text-white text-4xl">{{valueDisplay || 0}}</h1>
        </div>
        <div class="buttons m-auto operators-container w-full flex justify-center py-3">
            <div class="wrapper inline-grid gap-4 grid-cols-4 mt-4">
                <!-- <Operators/> -->
                <button @click="calculate(operator)" class="calcBtn rounded-lg bg-red-500 text-white px-2 py-2 w-14 h-14" v-for="operator in operatorsElement" :class="{'bg-blue-900' : ['AC', '%', '/', '*', '-', '+', '='].includes(operator)}">
                    {{operator}}
                </button>
            </div>
        </div>
        <div v-show="errOperators" class="w-full bg-red-800 p-5 text-white error-element absolute bottom-0 right-0">
            wrong operation!
        </div>
    </div>
</template>
<style scoped>
.display h1 {
    display: inline-block;
    /*text-align: right;*/
    width: 300px;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    flex-direction: column-reverse;
    text-align: right;
}

/* width */
::-webkit-scrollbar {
    height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.wrapper-2.active {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

.wrapper-2.act {
    animation: moveToY 1s forwards;
    transform: translateY(0);
}

.calcBtn.btnAnimated {
    animation: btnAnimated .95s forwards;
    transform: scale(1);
}

@keyframes shake {

    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}

@keyframes moveToY {

    10%,
    90% {
        transform: translateY(-10px);
    }

    20%,
    80% {
        transform: translateY(10px);
    }

    30%,
    50%,
    70% {
        transform: translateY(8px);
    }

    40%,
    60% {
        transform: translateY(9px);
    }

}
</style>