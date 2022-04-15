import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './sidebar.scss';
import { Boop } from '../Boop';
import { FaArrowLeft } from 'react-icons/fa';
import { Tooltip } from '../tooltip/Tooltip';

const Tier = ({ tier, children }) => {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<div
				className={`tier ${opened ? 'opened' : ''}`}
				onClick={(e) => setOpened(!opened)}
			>
				<p>{tier}</p>
			</div>
			<AnimatePresence initial={false}>
				{opened && (
					<motion.div
						className='link-section'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export const Sidebar = ({ sidebarOpen, setSideBarOpen }) => {
	return (
		<div className={`sidebar ${!sidebarOpen ? 'closed' : ''}`}>
			<div className='menu-btn' onClick={(e) => setSideBarOpen(!sidebarOpen)}>
				<Boop rotation={30} timing={200}>
					<FaArrowLeft
						className='arrow'
						style={{ transform: `rotate(${sidebarOpen ? '0' : '180'}deg)` }}
					/>
				</Boop>
			</div>
			<NavLink className='project-link home' to='/'>
				Home
			</NavLink>
			<h3>Projects</h3>

			<Tier tier='Beginner'>
				<Tooltip content='Binary-to-Decimal number converter' direction='right'>
					<NavLink className='project-link proj done' to='/bin-2-dec'>
						Bin2Dec
					</NavLink>
				</Tooltip>
				<Tooltip
					content='Preview how CSS3 border-radius values affect an element'
					direction='right'
				>
					<NavLink
						className='project-link proj done'
						to='/border-radius-preview'
					>
						Border Radius Previewer
					</NavLink>
				</Tooltip>
				<Tooltip content='Calculator' direction='right'>
					<NavLink className='project-link proj' to='/calculator'>
						Calculator
					</NavLink>
				</Tooltip>
				<Tooltip
					content='Simulate a string of Christmas lights'
					direction='right'
				>
					<NavLink className='project-link proj' to='/christmas-lights'>
						Christmas Lights
					</NavLink>
				</Tooltip>
				<Tooltip
					content='Click list item to display item details'
					direction='right'
				>
					<NavLink className='project-link proj' to='/cause-effect'>
						Cause Effect
					</NavLink>
				</Tooltip>
			</Tier>

			<Tier tier='Intermediate'>
				<NavLink className='project-link proj' to='/bit-masks'>
					Bit Masks
				</NavLink>
				<NavLink className='project-link proj' to='/book-finder-app'>
					Book Finder App
				</NavLink>
				<NavLink className='project-link proj' to='/calculator-cli'>
					Calculator CLI
				</NavLink>
			</Tier>

			<Tier tier='Advanced'>
				<NavLink className='project-link proj' to='/battleship-bot'>
					Battleship Bot
				</NavLink>
				<NavLink className='project-link proj' to='/battleship-game-engine'>
					Battleship Game Engine
				</NavLink>
				<NavLink className='project-link proj' to='/boole-bots-game'>
					Boole Bots Game
				</NavLink>
			</Tier>

			<Tier tier='My Projects'>
				<Tooltip
					content='My attempt at making a better reusable accordian component for react'
					direction='right'
				>
					<NavLink className='project-link proj' to='/better-accordian'>
						Better Accordian
					</NavLink>
				</Tooltip>
			</Tier>
		</div>
	);
};
