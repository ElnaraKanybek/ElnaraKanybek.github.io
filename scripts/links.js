const links = [
	{
		href: "https://www.linkedin.com/in/elnarakanybek/",
		src: "https://img.icons8.com/?size=100&id=446&format=png&color=ffffff",
		alt: "LinkedIn",
	},
	{
		href: "https://github.com/ElnaraKanybek",
		src: "https://img.icons8.com/?size=100&id=467&format=png&color=ffffff",
		alt: "GitHub",
	},
	{
		// Downloads automatically on click.
		href: "assets/Elnara_Kanybek_CV.pdf",
		src: "https://img.icons8.com/?size=100&id=6459&format=png&color=ffffff",
		alt: "CV",
		download: "Elnara_Kanybek_CV.pdf",
	},
	{
		href: "mailto:elnarakanybek@gmail.com",
		src: "https://img.icons8.com/?size=100&id=492&format=png&color=ffffff",
		alt: "Email",
	},
];

const linksContainer = document.getElementById("links-container");

let linksHTML = "";
links.forEach((link) => {
	const attrs = link.download
		? `download="${link.download}"`
		: `target="_blank" rel="noopener"`;
	linksHTML += `
        <a href="${link.href}" ${attrs}>
            <img class="w-15 h-15 hover:scale-115 transition-transform duration-200" src="${link.src}" alt="${link.alt}">
        </a>
    `;
});

linksContainer.innerHTML = linksHTML;
