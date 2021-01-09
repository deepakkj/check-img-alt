export const getImgsWithAltTag = (imgEle) => {
  return imgEle.getAttribute('alt');
};

export const getImgsWithoutAltTag = (imgEle) => {
  return !imgEle.getAttribute('alt');
};

export const getImgsWithoutCurrentExtension = (imgEle) => {
  return !(imgEle.getAttribute('data-extensiontag') === 'extensiontag');
};

export const checkIfImageHasParentPictureTag = (imgEle) => {
  return imgEle.parentNode.tagName.toLowerCase() === 'picture';
};

export const checkIfImageHasSiblingSourceTag = (imgEle) => {
  return imgEle.previousElementSibling.tagName.toLowerCase() === 'source';
};

export const getSrcUrlFromSourceTagOfSiblingImage = (imgEle) => {
  if (checkIfImageHasParentPictureTag(imgEle) && checkIfImageHasSiblingSourceTag(imgEle)) {
    return imgEle.previousElementSibling.srcset || imgEle.nextElementSibling.srcset;
  }
  return '';
};

export const getAllImgNodesInPage = () => {
  const imgElements = window.document.getElementsByTagName('img') || [];
  const imgElementsWithoutCurrentExtension = Array.from(imgElements).filter(getImgsWithoutCurrentExtension) || [];
  const imgElementsWithSourceTag = imgElementsWithoutCurrentExtension.map(imgEle => {
    if (imgEle.src === '') {
      // TODO: FIXME the logic to check if src is present in image or not. imgEle.src is not working as expected
      // console.log("imeEle", imgEle);
      // console.log("imeEle.src", imgEle.src);
      // console.log("imeEle.getAttribute('src')", imgEle.getAttribute('src'));
      imgEle.src = getSrcUrlFromSourceTagOfSiblingImage(imgEle);
    }
    return imgEle;
  });
  return imgElementsWithSourceTag;
};