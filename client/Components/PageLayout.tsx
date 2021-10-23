import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './Navbar';

interface IPageLayout {
	classname?: string;
}

const PageLayout: React.FC<IPageLayout> = ({ children, classname }) => {
	return (
		<Container>
			<NavigationBar />
			<div className={`page-wrapper ${classname}`}>{children}</div>
			<footer className="page-footer">
				<div>
					<a href="#">courses</a>
					{' | '}
					<a href="#">github</a>
					{' | '}
					<a href="#">facebook</a>
				</div>
			</footer>
		</Container>
	);
};

export default PageLayout;
