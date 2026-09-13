import { ArrowUpRight, Camera } from "lucide-react";
import Link from "next/link";
import Particles from "./components/particles";

const navigation = [
	{ name: "Photography", href: "/photography" },
];

const links = [
	{ label: "GitHub", href: "https://github.com/mtm-x" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/mtm-x" },
	{ label: "Email", href: "mailto:devthamaraimanalan.m@gmail.com" },
	{ label: "Discord (mtm_xx)", href: "https://discordapp.com/users/mtm-xx" },
];

export default function Home() {
	return (
		<div className="relative flex flex-col items-center justify-center w-full min-h-screen min-h-[100svh] overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<div className="w-[92vw] max-w-6xl h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={150}
			/>

			<div className="z-10 flex flex-col items-center px-4 gap-3">
				<h1 className="py-3.5 px-0.5 z-10 text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-6xl sm:whitespace-nowrap bg-clip-text">
					Thamaraimanalan M
				</h1>
			</div>

			<div className="w-[92vw] max-w-6xl h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="z-10 flex flex-col items-center gap-3 px-4 pt-6">
				<p className="text-center text-zinc-400 leading-relaxed">
					Just open source :) Embedded Software @ Linumiz
				</p>
				<div className="flex flex-wrap items-center justify-center gap-6 pt-2">
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							target="_blank"
							className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
						>
							{link.label}
							<ArrowUpRight className="w-3.5 h-3.5" />
						</Link>
					))}
				</div>
				<nav className="z-20 mt-8 animate-fade-in">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="group inline-flex items-center gap-3 border-y border-zinc-700/80 px-5 py-3 text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 hover:border-zinc-300 hover:text-zinc-100"
						>
							<Camera className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
							{item.name}
							<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}
