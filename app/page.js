import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
			<header className="text-center py-12">
				<h1 className="text-5xl font-bold tracking-tight">DatamaticAI</h1>
				<p className="text-lg mt-4 text-gray-400 max-w-xl mx-auto">
					This domain is for sale. $1000 to{' '}
					<Link
						href="https://www.afternic.com/domain/datamaticai.com"
						className="underline"
					>
						Buy Now
					</Link>
					, open to crypto/negotiations at:{' '}
					<Link
						href="mailto:pat@patripples.com"
						className="text-white underline"
					>
						pat@patripples.com
					</Link>
				</p>
				<p className="text-lg mt-4 text-gray-400 max-w-xl mx-auto">
					Where data meets imagination. Explore, predict, and create with the
					power of AI-driven insights.
				</p>
			</header>

			<main className="flex flex-col items-center gap-12">
				<section className="max-w-3xl text-center">
					<h2 className="text-3xl font-semibold">
						Turning Numbers Into Narratives
					</h2>
					<p className="text-gray-400 mt-4">
						Every dataset has a story waiting to be told. DatamaticAI helps
						transform raw information into actionable insights, vivid
						predictions, and compelling visualizations.
					</p>
				</section>

				<section className="max-w-3xl text-center">
					<h2 className="text-3xl font-semibold">Possible Applications</h2>
					<ul className="mt-4 text-gray-400 space-y-3">
						<li>
							<span className="text-white font-medium">
								Predictive Analytics:
							</span>{' '}
							See the future before it happens.
						</li>
						<li>
							<span className="text-white font-medium">
								AI-Assisted Storytelling:
							</span>{' '}
							Let data craft compelling narratives.
						</li>
						<li>
							<span className="text-white font-medium">
								Real-time Insights:
							</span>{' '}
							Make decisions faster, with clarity.
						</li>
					</ul>
				</section>
			</main>

			<footer className="mt-16 py-6 border-t border-gray-800 w-full text-center">
				<p className="text-gray-500">
					Contact:{' '}
					<a href="mailto:pat@patripples.com" className="text-white underline">
						pat@patripples.com
					</a>
				</p>
			</footer>
		</div>
	);
}
