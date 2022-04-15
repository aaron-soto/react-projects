import { useState } from 'react';
import './bin2dec.scss';

export const Bin2dec = () => {
	const [binaryInput, setBinaryInput] = useState('');
	const [decimalOutput, setDecimalOutput] = useState('');
	const [errors, setErrors] = useState('');

	const handleChange = (e) => {
		let input = e.target.value;
		setBinaryInput(input);

		// Handle and set errors
		if (/[a-zA-Z]/.test(input)) {
			setErrors('Number must not contain a letter');
		} else if (!/^[01]+$/.test(input) && input.length > 0) {
			setErrors("Binary numbers only contain 1's and 0's");
		} else {
			setErrors('');
		}

		if (errors === '') {
			let total = 0;
			for (let i = 0; i < input.length; i++) {
				const currentDigit = parseInt(input[i]);
				let newTotal = total * 2 + currentDigit;
				total = newTotal;
			}
			setDecimalOutput(total);
		}
	};

	return (
		<div className='container'>
			<div className='row page-header'>
				<h1>Binary to Decimal</h1>
				<a
					href='https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md'
					target='_blank'
					rel='noreferrer'
				>
					Challenge Github Repo
				</a>
			</div>
			<details>
				<summary>Steps to convert</summary>
				<p>
					<b>Step 1.</b> To convert a binary integer to decimal, start by adding
					the left-most digit to 0.
				</p>
				<p>
					<b>Step 2.</b> Next, multiply this by 2, and add the next digit in
					your number (as you progress from left to right) to this product. (In
					other words, multiply the current product in each step by 2 and add
					the current digit).
				</p>
			</details>

			<div className='row'>
				<div className='challenge'>
					<input
						type='text'
						placeholder='Binary Number'
						onChange={(e) => handleChange(e)}
					/>
				</div>
			</div>

			<div className='row errors'>
				<p>{errors}</p>
			</div>

			<div className='row'>
				<h3 className='binary-output'>Binary input: {binaryInput}</h3>
			</div>
			<div className='row'>
				<h3 className='binary-output'>Decimal output: {decimalOutput}</h3>
			</div>
		</div>
	);
};
