figma.showUI(__html__)

figma.ui.onmessage = msg => {
    if(msg.type="generatePages") {
let pages = [
    "Thumbnail",
    "——————————————",
    "Delivery",
    "↳ ⚪️ Indicative Timeline",
    "——————————————",
    "Visual Indicators ⚪️ 🟡 🟢 ",
    "——————————————",
    "References",
    "↳ ⚪️ UX Patterns",
    "↳ ⚪️ UI Patterns",
    "——————————————",
    "Primitives",
    "↳ ⚪️ Branding",
    "↳ ⚪️ Colours",
    "↳ ⚪️ Typography",
    "↳ ⚪️ Grids & Layout",
    "↳ ⚪️ Component Library",
    "——————————————",
    "Components",
    "↳ ⚪️ Work in Progress",
    "↳ ⚪️ Work in Progress 3",
    "↳ ⚪️ Accordions",
    "——————————————",
    "Archive",
    "↳ ⚪️ Graveyard",
    "——————————————",
    "Templates",
    "↳ ⚪️ [Page Title]",
]

//Create a loop
let currentPage = figma.currentPage;
currentPage.name = pages[0];

for (let page of pages.slice(1)) { // to skip first item in our array
    let newPage = figma.createPage();
    newPage.name = page;
}
}
figma.notify("Pages generated")



}
