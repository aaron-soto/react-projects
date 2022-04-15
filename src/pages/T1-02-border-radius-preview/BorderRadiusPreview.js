import { useState } from 'react';
import './border-radius-preview.scss';

export const BorderRadiusPreview = () => {
	const [topLeft, setTopLeft] = useState(0);
	const [topRight, setTopRight] = useState(0);
	const [bottomLeft, setBottomLeft] = useState(0);
	const [bottomRight, setBottomRight] = useState(0);

	return (
		<div className='container'>
			<div className='row page-header'>
				<h1>Border Radius Previewer</h1>
				<a
					href='https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md'
					target='_blank'
					rel='noreferrer'
				>
					Challenge Github Repo
				</a>
			</div>

			<div className='row'>
				<div
					className='box'
					style={{
						borderTopLeftRadius: `${topLeft}%`,
						borderTopRightRadius: `${topRight}%`,
						borderBottomLeftRadius: `${bottomLeft}%`,
						borderBottomRightRadius: `${bottomRight}%`,
					}}
				></div>
			</div>

			<div className='row'>
				<div className='input-group'>
					<p className='label'>Top Left:</p>
					<input
						type='range'
						min='0'
						max='50'
						defaultValue='0'
						onChange={(e) => setTopLeft(e.target.value)}
					/>
				</div>
				<div className='input-group'>
					<p className='label'>Top Right:</p>
					<input
						type='range'
						min='0'
						max='50'
						defaultValue='0'
						onChange={(e) => setTopRight(e.target.value)}
					/>
				</div>
			</div>

			<div className='row'>
				<div className='input-group'>
					<p className='label'>Bottom Left:</p>
					<input
						type='range'
						min='0'
						max='50'
						defaultValue='0'
						onChange={(e) => setBottomLeft(e.target.value)}
					/>
				</div>
				<div className='input-group'>
					<p className='label'>Bottom Right:</p>
					<input
						type='range'
						min='0'
						max='50'
						defaultValue='0'
						onChange={(e) => setBottomRight(e.target.value)}
					/>
				</div>
			</div>

			<div className='row'>
				<div className='col'>
					<p className='label'>css code:</p>
					<p>
						border-radius: {topLeft}% {topRight}% {bottomLeft}% {bottomRight}%;
					</p>
				</div>
			</div>
		</div>
	);
};
