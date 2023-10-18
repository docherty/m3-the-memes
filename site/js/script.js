const openseaSVG = 'data:image/svg+xml,' + encodeURIComponent(`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.5824 0 0 3.5824 0 8C0 12.4176 3.5824 16 8 16C12.4176 16 16 12.4176 16 8C16 3.5824 12.4192 0 8 0ZM3.9472 8.2688L3.9808 8.2144L6.0624 4.9584C6.0928 4.912 6.1648 4.9168 6.1872 4.968C6.5344 5.7472 6.8352 6.7168 6.6944 7.32C6.6352 7.568 6.4704 7.904 6.2848 8.2144C6.2608 8.2592 6.2352 8.304 6.2064 8.3472C6.1936 8.3664 6.1712 8.3776 6.1472 8.3776H4.008C3.9504 8.3776 3.9168 8.3152 3.9472 8.2688ZM13.2224 9.3888C13.2224 9.4192 13.2048 9.4448 13.1792 9.456C13.0176 9.5248 12.4656 9.7792 12.2368 10.0976C11.6512 10.912 11.2048 12.0768 10.2048 12.0768H6.0352C4.5568 12.0768 3.36 10.8752 3.36 9.392V9.344C3.36 9.3056 3.392 9.2736 3.432 9.2736H5.7552C5.8016 9.2736 5.8352 9.3152 5.832 9.3616C5.8144 9.512 5.8432 9.6672 5.9152 9.808C6.0528 10.088 6.3392 10.2624 6.648 10.2624H7.7984V9.3648H6.6608C6.6032 9.3648 6.568 9.2976 6.6016 9.2496C6.6144 9.2304 6.6272 9.2112 6.6432 9.1888C6.7504 9.0352 6.904 8.7984 7.0576 8.528C7.1616 8.3456 7.2624 8.1504 7.344 7.9552C7.36 7.92 7.3728 7.8832 7.3872 7.848C7.4096 7.7856 7.432 7.7264 7.448 7.6688C7.464 7.6192 7.4784 7.568 7.4912 7.52C7.5296 7.3536 7.5456 7.1776 7.5456 6.9952C7.5456 6.9232 7.5424 6.848 7.536 6.7776C7.5328 6.6992 7.5232 6.6208 7.5136 6.5424C7.5072 6.4736 7.4944 6.4048 7.4816 6.3344C7.464 6.2304 7.4416 6.1264 7.416 6.0224L7.4064 5.9824C7.3872 5.9104 7.3696 5.8432 7.3472 5.7712C7.2816 5.5472 7.208 5.328 7.128 5.1232C7.0992 5.0416 7.0672 4.9632 7.0336 4.8864C6.9856 4.768 6.936 4.6608 6.8912 4.56C6.8672 4.5136 6.848 4.472 6.8288 4.4288C6.8064 4.3808 6.784 4.3328 6.76 4.2864C6.744 4.2512 6.7248 4.2176 6.712 4.1856L6.5712 3.9264C6.552 3.8912 6.584 3.848 6.6224 3.8592L7.5024 4.0976H7.5056C7.5072 4.0976 7.5072 4.0976 7.5088 4.0976L7.624 4.1312L7.752 4.1664L7.7984 4.1792V3.6576C7.7984 3.4048 8 3.2 8.2512 3.2C8.376 3.2 8.4896 3.2512 8.5696 3.3344C8.6512 3.4176 8.7024 3.5312 8.7024 3.6576V4.4336L8.7968 4.4592C8.8032 4.4624 8.8112 4.4656 8.8176 4.4704C8.84 4.4864 8.8736 4.512 8.9152 4.544C8.9488 4.5696 8.984 4.6016 9.0256 4.6352C9.1104 4.704 9.2128 4.792 9.3232 4.8928C9.352 4.9184 9.3808 4.944 9.408 4.9712C9.5504 5.104 9.7104 5.2592 9.864 5.432C9.9072 5.4816 9.9488 5.5296 9.992 5.5824C10.0336 5.6352 10.08 5.6864 10.1184 5.7376C10.1712 5.8064 10.2256 5.8784 10.2752 5.9536C10.2976 5.9888 10.3248 6.0256 10.3456 6.0608C10.4096 6.1552 10.464 6.2528 10.5168 6.3504C10.5392 6.3952 10.5616 6.4448 10.5808 6.4928C10.64 6.624 10.6864 6.7568 10.7152 6.8912C10.7248 6.92 10.7312 6.9504 10.7344 6.9792V6.9856C10.744 7.024 10.7472 7.0656 10.7504 7.1088C10.7632 7.2448 10.7568 7.3824 10.728 7.52C10.7152 7.5776 10.6992 7.632 10.68 7.6912C10.6592 7.7472 10.64 7.8048 10.6144 7.8608C10.5648 7.9744 10.5072 8.0896 10.4384 8.1952C10.416 8.2352 10.3888 8.2768 10.3632 8.3168C10.3344 8.3584 10.304 8.3984 10.2784 8.4368C10.2416 8.4864 10.2032 8.5376 10.1632 8.584C10.128 8.632 10.0928 8.68 10.0528 8.7232C9.9984 8.7888 9.9456 8.8496 9.8896 8.9088C9.8576 8.9472 9.8224 8.9872 9.7856 9.0224C9.7504 9.0624 9.7136 9.0976 9.6816 9.1296C9.6256 9.1856 9.5808 9.2272 9.5424 9.264L9.4512 9.3456C9.4384 9.3584 9.4208 9.3648 9.4032 9.3648H8.7024V10.2624H9.584C9.7808 10.2624 9.968 10.1936 10.12 10.064C10.1712 10.0192 10.3968 9.824 10.664 9.5296C10.6736 9.5184 10.6848 9.512 10.6976 9.5088L13.1312 8.8048C13.1776 8.792 13.2224 8.8256 13.2224 8.8736V9.3888Z" fill="white"/>
</svg>
`);

const looksrareSVG = 'data:image/svg+xml,' + encodeURIComponent(`
<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.10809 8.16637C7.5475 8.16637 6.28125 6.90138 6.28125 5.33953C6.28125 3.77768 7.5475 2.5127 9.10809 2.5127C10.6687 2.5127 11.9349 3.77768 11.9349 5.33953C11.9349 6.90138 10.6687 8.16637 9.10809 8.16637ZM7.87903 5.33953C7.87903 6.0186 8.42957 6.56859 9.10809 6.56859C9.7866 6.56859 10.3371 6.0186 10.3371 5.33953C10.3371 4.66046 9.7866 4.11047 9.10809 4.11047C8.42957 4.11047 7.87903 4.66046 7.87903 5.33953Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.39121L5.41598 0H12.8014L18.2174 5.39121L9.1087 14.4483L0 5.39121ZM13.2938 3.42838C10.9926 1.12922 7.22483 1.12923 4.92362 3.42839L2.95417 5.38751L4.92362 7.34661C7.22483 9.64577 10.9926 9.64575 13.2938 7.34659L15.2632 5.38751L13.2938 3.42838Z" fill="white"/>
</svg>
`);

const raribleSVG = 'data:image/svg+xml,' + encodeURIComponent(`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46842 0C1.57012 0 0.03125 1.56598 0.03125 3.4977V12.4519C0.03125 14.3836 1.57012 15.9496 3.46842 15.9496H12.2676C14.1659 15.9496 15.7047 14.3836 15.7047 12.4519V3.4977C15.7047 1.56598 14.1659 0 12.2676 0H3.46842ZM10.8711 7.9548C11.3632 7.8226 11.8011 7.44203 11.8011 6.67693C11.8011 5.4031 10.7548 5.1067 9.41411 5.1067H4.07433V10.8429H6.32184V8.89613H8.98786C9.3986 8.89613 9.63887 9.06437 9.63887 9.48097V10.8429H11.8864V9.40887C11.8864 8.62777 11.4601 8.13503 10.8711 7.9548ZM9.36122 6.70933H6.32285V7.49143H9.36122V7.4912C9.36576 7.49137 9.37029 7.49143 9.37487 7.49143C9.58381 7.49143 9.75318 7.31637 9.75318 7.1004C9.75318 6.8844 9.58381 6.70933 9.37487 6.70933C9.37029 6.70933 9.36576 6.70943 9.36122 6.7096V6.70933Z" fill="white"/>
</svg>
`);

const x2y2SVG = 'data:image/svg+xml,' + encodeURIComponent(`
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M418.612 131.483C387.231 100.819 344.302 81.9202 296.96 81.9202C200.818 81.9202 122.88 159.858 122.88 256C122.88 352.142 200.818 430.08 296.96 430.08C344.302 430.08 387.231 411.182 418.612 380.517C381.179 429.329 322.264 460.8 256 460.8C142.891 460.8 51.2 369.109 51.2 256C51.2 142.892 142.891 51.2002 256 51.2002C322.264 51.2002 381.179 82.6714 418.612 131.483Z" fill="white"/>
<path d="M166.87 355.615C191.976 380.146 226.318 395.264 264.192 395.264C341.106 395.264 403.456 332.914 403.456 256C403.456 179.086 341.106 116.736 264.192 116.736C226.318 116.736 191.976 131.854 166.87 156.385C196.817 117.337 243.948 92.1602 296.96 92.1602C387.446 92.1602 460.8 165.514 460.8 256C460.8 346.486 387.446 419.84 296.96 419.84C243.948 419.84 196.817 394.663 166.87 355.615Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M378.88 256C378.88 323.864 323.864 378.88 256 378.88C188.136 378.88 133.12 323.864 133.12 256C133.12 188.136 188.136 133.12 256 133.12C323.864 133.12 378.88 188.136 378.88 256ZM337.92 256C337.92 301.243 301.243 337.92 256 337.92C210.757 337.92 174.08 301.243 174.08 256C174.08 210.757 210.757 174.08 256 174.08C301.243 174.08 337.92 210.757 337.92 256Z" fill="white"/>
</svg>
`);

function fetchProjectFiles() {
    const projects = [];
    let projectCount = 1;

    function fetchProject() {
        const projectFile = `data/${projectCount}.json`;

        return fetch(projectFile)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching project data');
                }
            })
            .then(project => {
                projects.push(project);
                projectCount++;
                return fetchProject();
            })
            .catch(error => {
                if (error.name === 'FetchError') {
                    // No more projects to load.
                    return projects;
                } else {
                    console.error('Error fetching project data:', error);
                    return projects;
                }
            });
    }

    return fetchProject()
        .catch(error => {
            if (error.name === 'FetchError') {
                console.log('No more projects to load.');
            } else {
                console.error('Error fetching project data:', error);
            }
            return projects; // Return the fetched projects even if errors occurred
        });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.classList.add('lazy');
    image.dataset.src = project.thumbnail;
    image.src = "/images/ui/placeholder.png";

    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const name = document.createElement('h2');
    name.textContent = project.meme_name;
    contentContainer.appendChild(name);

    const artist = document.createElement('p');
    artist.innerHTML = "<em>" + project.artist_name + "</em>";
    contentContainer.appendChild(artist);

    const inputString = project.description;
    let cleanDescription = "";
    let memeCount = "";
    let seasonCount = "";
    let cardCount = "";

    const regex = /(.*?)(Meme:\s*(\d+)\s*Season:\s*(\d+)\s*Card:\s*(\d+))/is;
    const match = inputString.match(regex);

    if (match) {
        cleanDescription = match[1].trim();
        memeCount = parseInt(match[3].trim());
        seasonCount = parseInt(match[4].trim());
        cardCount = parseInt(match[5].trim());
        // console.log(inputString);
        // console.log(cleanDescription);
        // console.log(memeCount + " " + seasonCount + " " + cardCount);
    } else {
        cleanDescription = inputString.trim();
        memeCount = "n/a";
        seasonCount = "n/a";
        cardCount = "n/a";
        // console.log("No match" + inputString);
    }

    const description = document.createElement('p');
    let truncatedDescription = "";

    const maxDescriptionLength = 140;

    if (cleanDescription.length > maxDescriptionLength) {
        truncatedDescription = cleanDescription.substring(0, maxDescriptionLength - 3) + '...';
        description.textContent = truncatedDescription;
        const moreButton = document.createElement('button');
        moreButton.classList.add('button-more');
        moreButton.textContent = 'More';
        moreButton.addEventListener('click', () => {
            displayProjectModal(project);
        });
        contentContainer.appendChild(description);
        contentContainer.appendChild(moreButton);
    } else {
        description.textContent = cleanDescription;
        contentContainer.appendChild(description);    
    }
    
    const memeInfo = document.createElement('p');
    memeInfo.innerHTML = "Meme: <b>" + memeCount + "</b><br/>Season: <b>" + seasonCount + "</b><br/>Card: <b>" + cardCount + "</b>";
    contentContainer.appendChild(memeInfo);

    //create a div for the marketplace links
    const marketplaceLinks = document.createElement('div');
    marketplaceLinks.classList.add('marketplace-links');
    card.appendChild(marketplaceLinks);

    // create a link to opensea
    const openseaLink = document.createElement('a');
    openseaLink.href = `https://opensea.io/assets/ethereum/0x33fd426905f149f8376e227d0c9d3340aad17af1/${project.token_id}`;
    const openseaIcon = document.createElement('img');
    openseaIcon.src = openseaSVG;
    openseaLink.classList.add('marketplace-link');
    openseaLink.appendChild(openseaIcon);
    marketplaceLinks.appendChild(openseaLink);
    
    // create a link to looksrare
    const looksrareLink = document.createElement('a');
    looksrareLink.href = `https://looksrare.org/collections/0x33fd426905f149f8376e227d0c9d3340aad17af1/${project.token_id}`;
    looksrareLink.classList.add('marketplace-link');
    const looksrareIcon = document.createElement('img');
    looksrareIcon.src = looksrareSVG;
    looksrareLink.appendChild(looksrareIcon);
    marketplaceLinks.appendChild(looksrareLink);

    // create a link to rarible
    const raribleLink = document.createElement('a');
    raribleLink.href = `https://rarible.com/token/0x33fd426905f149f8376e227d0c9d3340aad17af1:${project.token_id}`;
    raribleLink.classList.add('marketplace-link');
    const raribleIcon = document.createElement('img');
    raribleIcon.src = raribleSVG;
    raribleLink.appendChild(raribleIcon);
    marketplaceLinks.appendChild(raribleLink);

    // create a link to x2y2
    const x2y2Link = document.createElement('a');
    x2y2Link.href = `https://x2y2.market/collections/0x33fd426905f149f8376e227d0c9d3340aad17af1/${project.token_id}`;
    x2y2Link.classList.add('marketplace-link');
    const x2y2Icon = document.createElement('img');
    x2y2Icon.src = x2y2SVG;
    x2y2Link.appendChild(x2y2Icon);
    marketplaceLinks.appendChild(x2y2Link);
    
    card.appendChild(contentContainer);

    return card;
}

function displayProjectModal(project) {
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.remove();
        }
    });

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalLeft = document.createElement('div');
    modalLeft.classList.add('modal-left');

    const imageElement = document.createElement('img');
    imageElement.src = project.image_url;
    imageElement.classList.add('aspect-ratio');
    modalLeft.appendChild(imageElement);

    const projectDetailsContainer = document.createElement('div');
    projectDetailsContainer.classList.add('project-details');

    const projectDetails = document.createElement('div');
   
    const inputString = project.description;
    let cleanDescription = "";
    let memeCount = "";
    let seasonCount = "";
    let cardCount = "";

    const regex = /(.*?)(Meme:\s*(\d+)\s*Season:\s*(\d+)\s*Card:\s*(\d+))/is;
    const match = inputString.match(regex);

    if (match) {
        cleanDescription = match[1].trim();
        memeCount = parseInt(match[3].trim());
        seasonCount = parseInt(match[4].trim());
        cardCount = parseInt(match[5].trim());
        // console.log(inputString);
        // console.log(cleanDescription);
        // console.log(memeCount + " " + seasonCount + " " + cardCount);
    } else {
        cleanDescription = inputString.trim();
        memeCount = "n/a";
        seasonCount = "n/a";
        cardCount = "n/a";
        // console.log("No match" + inputString);
    }
   
    const memeInfo = document.createElement('p');
    memeInfo.innerHTML = "Meme: <b>" + memeCount + "</b><br/>Season: <b>" + seasonCount + "</b><br/>Card: <b>" + cardCount + "</b>";  

    projectDetails.innerHTML = `
        <h2>${project.meme_name}</h2>
        <p><em>${project.artist_name}</em></p>
        <p>${cleanDescription}</p>
    `;
    
    projectDetailsContainer.appendChild(projectDetails);
    projectDetailsContainer.appendChild(memeInfo);
  
    //create a div for the marketplace links
    const marketplaceLinks = document.createElement('div');
    marketplaceLinks.classList.add('marketplace-links');
    projectDetailsContainer.appendChild(marketplaceLinks);

    // create a link to opensea
    const openseaLink = document.createElement('a');
    openseaLink.href = `https://opensea.io/assets/ethereum/0x33fd426905f149f8376e227d0c9d3340aad17af1/${project.token_id}`;
    const openseaIcon = document.createElement('img');
    openseaIcon.src = openseaSVG;
    openseaLink.classList.add('marketplace-link');
    openseaLink.appendChild(openseaIcon);
    marketplaceLinks.appendChild(openseaLink);
    
    // create a link to looksrare
    const looksrareLink = document.createElement('a');
    looksrareLink.href = `https://looksrare.org/collections/0x33fd426905f149f8376e227d0c9d3340aad17af1/${project.token_id}`;
    looksrareLink.classList.add('marketplace-link');
    const looksrareIcon = document.createElement('img');
    looksrareIcon.src = looksrareSVG;
    looksrareLink.appendChild(looksrareIcon);
    marketplaceLinks.appendChild(looksrareLink);

    // create a link to rarible
    const raribleLink = document.createElement('a');
    raribleLink.href = `https://rarible.com/token/0x33fd426905f149f8376e227d0c9d3340aad17af1:${project.token_id}`;
    raribleLink.classList.add('marketplace-link');
    const raribleIcon = document.createElement('img');
    raribleIcon.src = raribleSVG;
    raribleLink.appendChild(raribleIcon);
    marketplaceLinks.appendChild(raribleLink);

    // create a link to x2y2
    const x2y2Link = document.createElement('a');
    x2y2Link.href = `https://x2y2.market/collections/0x33fd426905f149f8376e227d0c9d3340aad17af1/${project.token_id}`;
    x2y2Link.classList.add('marketplace-link');
    const x2y2Icon = document.createElement('img');
    x2y2Icon.src = x2y2SVG;
    x2y2Link.appendChild(x2y2Icon);
    marketplaceLinks.appendChild(x2y2Link);

    modalContent.appendChild(modalLeft);
    modalContent.appendChild(projectDetailsContainer);

    const dismissButton = document.createElement('button');
    dismissButton.classList.add('button-close');
    dismissButton.addEventListener('click', () => {
        modalOverlay.remove();
    });
// Create an img element for the SVG icon
const closeIcon = document.createElement('img');
closeIcon.src = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" fill="#fff"/>
    </svg>
`);

// Set alt text and class
closeIcon.alt = 'Close';
closeIcon.classList.add('icon-close');

// Append the close icon to the dismissButton
dismissButton.appendChild(closeIcon);
    modalContent.appendChild(dismissButton);
    modalOverlay.appendChild(modalContent);

    document.body.appendChild(modalOverlay);
}

function displayNoProjectsMessage(container) {
    const message = document.createElement('p');
    message.textContent = 'No projects found.';
    container.appendChild(message);
}

document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('projectContainer');

    fetchProjectFiles()
        .then(projects => {
            if (projects.length === 0) {
                displayNoProjectsMessage(projectContainer);
                console.log('No projects found.');
            } else {
                projects.forEach(project => {
                    const projectCard = createProjectCard(project);
                    projectContainer.appendChild(projectCard);
                });

                const lazyImages = document.querySelectorAll('.lazy');
                const options = {
                    rootMargin: '0px',
                    threshold: 0.1
                };

                const lazyLoad = (target) => {
                    const image = new Image();
                    image.src = target.dataset.src;
                    image.onload = () => {
                        target.src = target.dataset.src;
                    };
                };

                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            lazyLoad(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                }, options);

                lazyImages.forEach(image => {
                    observer.observe(image);
                });
            }
        });
});
