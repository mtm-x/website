import { ArrowUpRight, Camera } from "lucide-react";
import Link from "next/link";
import React from "react";
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
			<nav
				className="absolute right-6 z-20 animate-fade-in sm:right-8"
				style={{ top: "max(1.5rem, calc(env(safe-area-inset-top) + 1rem))" }}
			>
				<ul>
					{navigation.map((item, index) => (
						<React.Fragment key={item.href}>
							<Link
								href={item.href}
								className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-black/20 px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm duration-500 hover:border-zinc-500 hover:text-zinc-100"
							>
								<Camera className="h-4 w-4" />
								{item.name}
							</Link>
							{index < navigation.length - 1 && (
								<span className="text-zinc-700 select-none">·</span>
							)}
						</React.Fragment>
					))}
				</ul>
			</nav>
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
			</div>
		</div>
	);
}
