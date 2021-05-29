import React from 'react';
import * as QuickSort from './SortingAlgorithms/QuickSort';
import * as BubbleSort from './SortingAlgorithms/BubbleSort';
import * as SelectionSort from './SortingAlgorithms/SelectionSort';

class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {array: [], color: 'lightgreen', animationSpeed: 5};
        this.resetArray = this.resetArray.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.animationsHelper = this.animationsHelper.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.selectionSort = this.selectionSort.bind(this);
    }

    pushRandomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        for (let i = 0; i < (screenWidth / 1920) * 125; i++) {
            array.push(this.pushRandomIntFromInterval(5, 0.85 * screenHeight));
        }
        this.setState({array: array});
    }

    quickSort() {
        const animations = QuickSort.quickSort(this.state.array);
        this.animationsHelper(animations);
    }

    animationsHelper(animations) {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const barOneIndex = animations[i][0];
            const newHeight = animations[i][1];
            setTimeout(() => {
                const barOneStyle = arrayBars[barOneIndex].style;
                barOneStyle.height = newHeight + 'px';
            }, i * this.state.animationSpeed);
        }
    }

    bubbleSort() {
        const animations = BubbleSort.bubbleSort(this.state.array);
        this.animationsHelper(animations);
    }

    selectionSort() {
        const animations = SelectionSort.selectionSort(this.state.array);
        this.animationsHelper(animations);
    }

    render() {
        return (
            <div className={'container justify-content-center text-center'}>
                <div className='buttons-container'>
                    <button
                        className='btn btn-dark reset-button'
                        onClick={() => {
                            this.quickSort();
                        }}

                    >
                        Quick Sort
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={() => {
                            this.resetArray();
                        }}

                    >
                        Reset Array
                    </button>
                    <button
                        className='btn btn-dark'
                        onClick={() => {
                            this.bubbleSort();
                        }}

                    >
                        Bubble Sort
                    </button>
                    <button
                        className='btn btn-dark'
                        onClick={() => {
                            this.selectionSort();
                        }}

                    >
                        Selection Sort
                    </button>
                </div>
                <div className='btn-group animation-controller'>
                    <button
                        className='btn btn-success'
                        onClick={() => {
                            this.setState((prevState) => {
                                return {
                                    ...prevState,
                                    animationSpeed: prevState.animationSpeed - 1,
                                };
                            });
                        }}
                    >
                        Decrease
                    </button>
                    <span className='btn btn-dark disabled'>
						Animation Rate: {this.state.animationSpeed}ms
					</span>
                    <button
                        className='btn btn-danger'
                        onClick={() => {
                            this.setState((prevState) => {
                                return {
                                    ...prevState,
                                    animationSpeed: prevState.animationSpeed + 1,
                                };
                            });
                        }}
                    >
                        Increase
                    </button>
                </div>
                <div className={"bars"} id='array-container'>
                    {this.state.array.map((value, id) => {
						return (
                            <div
                                className='array-bar'
                                key={id}
                                style={{
                                    height: value + 'px',
                                    backgroundColor: this.state.color,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Sorting;

