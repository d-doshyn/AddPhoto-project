import { createApi } from 'unsplash-js';

let randomImage = async () => {
    const unsplash = createApi({
        accessKey: 'v8irXskAXkvxGL-MHxMPCQ-RSAbf1oLRytetoza5TGE'
    });

    let photo = await unsplash.photos.getRandom();
    let randomPhoto = await photo.response.links.download;

    let mainSection = document.querySelector(".main");
    mainSection.style.backgroundImage = "url(" + randomPhoto + ")";
}

randomImage();