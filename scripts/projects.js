const projects = [
	{
		name: "Signalist",
		image_path: "assets/screen/signalist_screen.png",
		description:
			"Stock market toolkit: sign up, personalize your investing profile, and get AI-powered market news summaries by email.",
		tech_stack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"MongoDB",
			"Better Auth",
			"Inngest",
			"Gemini API",
			"Finnhub API",
		],
		git_repo: "https://github.com/ElnaraKanybek/signalist",
		demo_url: "https://signalist-stock-tracker-app-gamma.vercel.app/sign-in",
	},
	{
		name: "CodeScout",
		image_path: "assets/screen/codescout_screen.png",
		description:
			"Lightweight autonomous AI coding agent for the command line that explores a codebase, reads and writes files, and runs Python code.",
		tech_stack: [
			"Python",
			"OpenRouter",
			"LLMs",
			"uv",
			"python-dotenv",
			"subprocess",
		],
		git_repo: "https://github.com/ElnaraKanybek/codescout",
	},
	{
		name: "WealthLens",
		image_path: "assets/screen/wealthlens_screen.png",
		description:
			"Stock screener that pulls live prices and company financials, ranks stocks against each other, and sorts them into three easy-to-follow strategies, so you get a clear shortlist instead of a wall of numbers.",
		tech_stack: ["Python", "pandas", "NumPy", "yfinance", "SciPy", "Jupyter"],
		git_repo: "https://github.com/ElnaraKanybek/wealthlens",
	},
	{
		name: "JACHacks Website",
		image_path: "assets/screen/jachacks_screen.png",
		description:
			"Official website for JACHacks, the John Abbott College hackathon (200+ participants). I co-organized the event and built and deployed the front end.",
		tech_stack: ["HTML", "CSS", "JavaScript", "Cloudflare", "MLH"],
		git_repo: "https://github.com/John-Abbott-College/JACHacks-Website",
		demo_url: "https://johnabbott.qc.ca/jachacks",
	},
	{
		name: "MyChef",
		image_path: "assets/screen/mychef_screen.png",
		description:
			"Full-stack recipe platform to discover, create, save, and manage recipes, with user authentication and role-based admin controls.",
		tech_stack: [
			"React",
			"TypeScript",
			"Vite",
			"React Router",
			"Node.js",
			"PostgreSQL",
		],
		git_repo: "https://github.com/ElnaraKanybek/mychef",
	},
	{
		name: "Cafe Curator",
		image_path: "assets/screen/cafecurator_screen.png",
		description:
			"Swipeable cafe-discovery app built on the Google Places API. Finds cafes within 3 km of you, with Hammer.js swipe gestures and a saved list that persists between visits.",
		tech_stack: [
			"HTML",
			"CSS",
			"JavaScript",
			"Google Places API",
			"Hammer.js",
			"Vercel",
		],
		git_repo: "https://github.com/ElnaraKanybek/cafe-curator",
		demo_url: "https://cafe-curator.vercel.app/",
	},
	{
		name: "GhibliVerse",
		image_path: "assets/screen/ghibliverse_screen.png",
		description:
			"Browse Studio Ghibli films and quickly find movies using live search and autocomplete suggestions.",
		tech_stack: ["HTML", "CSS", "JavaScript", "jQuery", "Studio Ghibli API"],
		git_repo: "https://github.com/ElnaraKanybek/ghibliverse",
	},
];

const projectsContainer = document.getElementById("projects-container");

const githubLogo = `<svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>`;

projects.forEach((project) => {
	const imageHTML = `<figure><img src="${project.image_path}" alt="${project.name}" /></figure>`;

	let techStackHTML = "";
	project.tech_stack.forEach((tech) => {
		techStackHTML += `<span class="badge badge-soft">${tech}</span>`;
	});

	const demoHTML = project.demo_url
		? `
                <a href="${project.demo_url}" target="_blank" rel="noopener" class="btn btn-outline text-white hover:scale-105 transition-transform duration-200">
                    Live Demo
                </a>`
		: "";

	const projectCard = document.createElement("div");
	projectCard.className = "card bg-base-100 w-100 shadow";

	projectCard.innerHTML = `
        ${imageHTML}
        <div class="card-body">
            <h2 class="card-title">${project.name}</h2>
            <p class="opacity-75">${project.description}</p>
            <div class="flex flex-row flex-wrap gap-2 mt-2">
                ${techStackHTML}
            </div>
            <div class="card-actions mt-2 justify-end">
                ${demoHTML}
                <a href="${project.git_repo}" target="_blank" rel="noopener" class="btn bg-black text-white border-black hover:scale-105 transition-transform duration-200">
                    ${githubLogo}
                    GitHub
                </a>
            </div>
        </div>
    `;
	projectsContainer.appendChild(projectCard);
});
