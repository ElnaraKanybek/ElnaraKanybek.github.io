const elnara_assets = [
	{ path: "assets/elnara/photo1.jpg", alt: "Elnara Kanybek - photo 1" },
	{ path: "assets/elnara/photo2.jpg", alt: "Elnara Kanybek - photo 2" },
	{ path: "assets/elnara/photo3.jpg", alt: "Elnara Kanybek - photo 3" },
	{ path: "assets/elnara/photo4.jpg", alt: "Elnara Kanybek - photo 4" },
	{ path: "assets/elnara/photo5.jpg", alt: "Elnara Kanybek - photo 5" },
];

const elnaraContainer = document.getElementById("elnara-container");

// Random order on every page load (delete this line for a fixed order)
elnara_assets.sort(() => Math.random() - 0.5);

let imagesHTML = "";
elnara_assets.forEach((asset) => {
	imagesHTML += `<img src="${asset.path}" alt="${asset.alt}"/>`;
});

elnaraContainer.innerHTML = imagesHTML;
