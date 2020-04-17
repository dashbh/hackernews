export const formatStory = (item: any) => {
  const localCopy = localStorage.getItem(item.objectID);
  if (localCopy) {
    const { points, hideUserDetails } = JSON.parse(localCopy);
    return {
      ...item,
      points,
      hideUserDetails,
    };
  }

  return item;
};

export const hostName = (story) => {
  const storyUrl = story.story_url ? story.story_url : story.url;
  try {
    const url = new URL(storyUrl);
    return url.host;
  } catch (err) {
    return null;
  }
};
