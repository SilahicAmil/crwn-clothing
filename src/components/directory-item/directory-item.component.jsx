import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBody,
  DirectoryTitle,
  ShopNow,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <DirectoryBody>
        <DirectoryTitle>{title}</DirectoryTitle>
        <ShopNow>Shop Now</ShopNow>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
