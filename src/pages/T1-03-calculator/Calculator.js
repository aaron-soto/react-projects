import './calculator.scss';

import { useState } from 'react';

export const Calculator = () => {
	const [history, setHistory] = useState('');
	const [output, setOutput] = useState('');

	const handlePress = (input) => {
		console.log(input);
		if (input == 'clr') {
			setHistory('');
			setOutput('');
		} else if (input === '+') {
			console.log('add');
		} else {
			setHistory(history.concat(input));

			setOutput(history.concat(input));
		}
	};

	return (
		<div className='container'>
			<div className='row page-header'>
				<h1>Calculator</h1>
				<a
					href='https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md'
					target='_blank'
					rel='noreferrer'
				>
					Challenge Github Repo
				</a>
			</div>

			<div className='row history-row'>
				<p>{history}</p>
			</div>
			<div className='row output-row'>
				<p>{output}</p>
			</div>
			<div className='row btn-row'>
				<div className='calc-btn btn-white' onClick={() => handlePress('clr')}>
					AC
				</div>
				<div className='calc-btn btn-white'>&#177;</div>
				<div className='calc-btn btn-white'>%</div>
				<div className='calc-btn btn-yellow'>&#247;</div>
			</div>
			<div className='row btn-row'>
				<div className='calc-btn' onClick={() => handlePress(7)}>
					7
				</div>
				<div className='calc-btn' onClick={() => handlePress(8)}>
					8
				</div>
				<div className='calc-btn' onClick={() => handlePress(9)}>
					9
				</div>
				<div className='calc-btn btn-yellow'>x</div>
			</div>
			<div className='row btn-row'>
				<div className='calc-btn' onClick={() => handlePress(4)}>
					4
				</div>
				<div className='calc-btn' onClick={() => handlePress(5)}>
					5
				</div>
				<div className='calc-btn' onClick={() => handlePress(6)}>
					6
				</div>
				<div className='calc-btn btn-yellow'>-</div>
			</div>
			<div className='row btn-row'>
				<div className='calc-btn' onClick={() => handlePress(1)}>
					1
				</div>
				<div className='calc-btn' onClick={() => handlePress(2)}>
					2
				</div>
				<div className='calc-btn' onClick={() => handlePress(3)}>
					3
				</div>
				<div className='calc-btn btn-yellow' onClick={() => handlePress('+')}>
					+
				</div>
			</div>
			<div className='row btn-row'>
				<div className='calc-btn'>0</div>
				<div className='calc-btn'>.</div>
				<div className='calc-btn'>&#9003;</div>
				<div className='calc-btn btn-last'>=</div>
			</div>
		</div>
	);
};
