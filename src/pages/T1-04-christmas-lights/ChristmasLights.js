import './christmaslights.scss';

const Light = ({ color }) => {
	return <div className={`light ${color}`}></div>;
};

export const ChristmasLights = () => {
	return (
		<div className='container'>
			<div className='row page-header'>
				<h1>Christmas Lights</h1>
				<a
					href='https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Christmas-Lights-App.md'
					target='_blank'
					rel='noreferrer'
				>
					Challenge Github Repo
				</a>
			</div>

			<div className='row'>
				<Light color='green' />
				<Light color='red' />
				<Light color='blue' />
				<Light color='yellow' />
				<Light color='green' />
				<Light color='blue' />
				<Light color='red' />
			</div>
		</div>
	);
};
