import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';

import { Bin2dec } from './pages/T1-01-bin-2-dec/Bin2dec';
import { BorderRadiusPreview } from './pages/T1-02-border-radius-preview/BorderRadiusPreview';
import { Calculator } from './pages/T1-03-calculator/Calculator';
import { ChristmasLights } from './pages/T1-04-christmas-lights/ChristmasLights';
import { CauseEffect } from './pages/T1-05-cause-effect/CauseEffect';
import { BetterAccordian } from './pages/TM-better-accordian/BetterAccordian';

function App() {
	const [sidebarOpen, setSideBarOpen] = useState(true);

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
			<div className={`page ${sidebarOpen ? 'sidebarOpened' : ''}`}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/bin-2-dec' element={<Bin2dec />} />
					<Route
						path='/border-radius-preview'
						element={<BorderRadiusPreview />}
					/>
					<Route path='/calculator' element={<Calculator />} />
					<Route path='/christmas-lights' element={<ChristmasLights />} />
					<Route path='/cause-effect' element={<CauseEffect />} />
					<Route path='/better-accordian' element={<BetterAccordian />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
