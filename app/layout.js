import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'DatamaticAI',
	description:
		'Driven by data? Explore, predict, and create with the power of AI-driven insights with DatamaticAI.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
