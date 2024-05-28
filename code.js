"use strict";
figma.showUI(__html__, { width: 300, height: 620 });
let pages = {};
let statusMap = {};
figma.ui.onmessage = msg => {
    if (msg.type === "generatePages") {
        pages = {};
        statusMap = {};
        const pageNames = [
            "Thumbnail",
            "---",
            "Delivery",
            "↳ ⚪️ Indicative Timeline",
            "---",
            "Visual Indicators ⚪️ 🟡 🟢 ",
            "---",
            "References",
            "↳ ⚪️ UX Patterns",
            "↳ ⚪️ UI Patterns",
            "---",
            "Primitives",
            "↳ ⚪️ Branding",
            "↳ ⚪️ Colours",
            "↳ ⚪️ Typography",
            "↳ ⚪️ Grids & Layout",
            "↳ ⚪️ Component Library",
            "---",
            "Components",
            "↳ ⚪️ Accordions",
            "↳ ⚪️ Avatars",
            "↳ ⚪️ Breadcrumbs",
            "↳ ⚪️ Buttons",
            "↳ ⚪️ Filters",
            "↳ ⚪️ Inputs",
            "↳ ⚪️ Pagination",
            "↳ ⚪️ Tables",
            "↳ ⚪️ Tabs",
            "↳ ⚪️ Tags and Counters",
            "↳ ⚪️ Toggles",
            "↳ ⚪️ Tooltips",
            "---",
            "Core features",
            "↳ ⚪️ [Feature 1 deepdive]",
            "↳ ⚪️ [Feature 2 deepdive]",
            "---",
            "State management",
            "↳ ⚪️ Toasties",
            "↳ ⚪️ Error & Warning Modals",
            "↳ ⚪️ Page Errors",
            "---",
            "Layout patterns (For devs)",
            "↳ ⚪️ [Page Structure]",
            "---",
            "Archive",
            "↳ ⚪️ Graveyard",
            "---",
            "Templates",
            "↳ ⚪️ [Page Title]",
        ];
        // Create pages
        let currentPage = figma.currentPage;
        currentPage.name = pageNames[0];
        statusMap[currentPage.id] = 'notStarted';
        for (let i = 1; i < pageNames.length; i++) {
            let newPage = figma.createPage();
            newPage.name = pageNames[i];
            pages[newPage.id] = newPage;
            statusMap[newPage.id] = 'notStarted';
        }
        figma.notify("Pages generated");
    }
    if (msg.type === "changePageStatus") {
        const currentPage = figma.currentPage;
        const currentPageId = currentPage.id;
        const selectedStatus = msg.status;
        const currentStatus = statusMap[currentPageId];
        // Check if the current page has a status indicator
        if (currentPage.name.startsWith('↳')) {
            // Check if the selected status is different from the current status
            if (selectedStatus !== currentStatus) {
                // Update the current page's status
                statusMap[currentPageId] = selectedStatus;
                // Update the current page's name with the selected status
                const statusIndicator = selectedStatus === 'notStarted' ? '⚪️' : selectedStatus === 'inProgress' ? '🟡' : '🟢';
                currentPage.name = currentPage.name.replace(/⚪️|🟡|🟢/, statusIndicator);
                // Update the status indicator for all pages
                Object.keys(pages).forEach(pageId => {
                    const page = pages[pageId];
                    if (pageId !== currentPageId) {
                        const status = statusMap[pageId];
                        const indicator = status === 'notStarted' ? '⚪️' : status === 'inProgress' ? '🟡' : '🟢';
                        page.name = page.name.replace(/⚪️|🟡|🟢/, indicator);
                    }
                });
            }
            else {
                figma.notify("The page status is already set to " + selectedStatus + ".");
            }
        }
        else {
            figma.notify("Select a page with a page indicator (starts with '↳') to change status.");
        }
    }
        if (figma.currentPage.name === "Thumbnail") {
            const frame = figma.createFrame();
            frame.resize(1920, 1080); // Follow Figma's thumbnail min-dimensions
            frame.name = "_THUMBNAIL"; // Frame name set to _THUMBNAIL
            figma.setFileThumbnailNodeAsync(frame); // Frame set as thumbnail
            // Figure out set thumbnail
            // Create text layer and load font
            (async () => {
                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                const text = figma.createText();
                // Set the text string
                text.characters = "Project Thumbnail";
                text.fontSize = 72;
                // Attach this text layer to the thumbnail frame
                frame.insertChild(0, text);
                text.textAlignVertical = 'CENTER';
                text.x = 51;
                text.y = 952;
            })();
            
        }
        
};
