export const formatStory = (item: any) => {
    const localCopy = localStorage.getItem(item.objectID);
    if (localCopy) {
        const { points, hideUserDetails } = JSON.parse(localCopy);
        return {
            ...item,
            points,
            hideUserDetails
        };
    }
    else {
        return item;
    }
}

export const hostName = (story) => {
    const story_url = story.story_url ? story.story_url : story.url;
    try {
        const url = new URL(story_url);
        return url.host;
    }
    catch (err) {
        return;
    }
}
