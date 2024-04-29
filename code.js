"use strict";
figma.showUI(__html__);
figma.ui.onmessage = async msg => {
    if (msg.type = "generatePages") {
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
            "——————————————",
            "↳ ⚪️ Branding",
            "↳ ⚪️ Colours",
            "↳ ⚪️ Typography",
            "↳ ⚪️ Grids & Layout",
            "↳ ⚪️ Component Library",
            "——————————————",
            "Working File",
            "↳ ⚪️ Work in Progress",
            "——————————————",
            "Archive",
            "↳ ⚪️ Graveyard",
            "——————————————",
            "Templates",
            "↳ ⚪️ [Page Title]",
        ];
        //Create a loop
        let currentPage = figma.currentPage;
        currentPage.name = pages[0];
        for (let page of pages.slice(1)) { // to skip first item in our array
            let newPage = figma.createPage();
            newPage.name = page;
        }

        // figma.notify("Pages generated");
        if (msg.type = "generateThumbnail")
        {
            console.log("Select thumbnail from array of pages and generate a frame within it");
            if (figma.currentPage.name == "Thumbnail")
            {
                //Code to create frame
                const frame = figma.createFrame ()
                frame.resize(1260,960) //Follow Figma's thumbnail min-dimensions
                frame.name = "_THUMBNAIL" //Frame name set to _THUMBNAIL
                
                //Create text layer and load font
                const text = figma.createText()
                await figma.loadFontAsync(text.fontName)

                //Set the text string
                text.characters = "Project Thumbnail"
                text.fontSize = 128
                //Attach this text layer to the thumbnail frame
                frame.insertChild(0,text)
                text.textAlignVertical = 'CENTER'
                text.x = 50
                text.y = 50
                //add a function to remove pages, coz screw righ-click delete
                //if figma current page is selected
                    // if remove is selected
                            //remove the page
                
            }
        }
    }
};