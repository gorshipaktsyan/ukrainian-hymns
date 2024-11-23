import HymnStyledComponents from './styles';

const {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowLeftWrapper,
  ArrowRightWrapper,
  MobArrowRightIcon,
  MobArrowLeftIcon
} = HymnStyledComponents;

export default function Arrows({
  isAllowToUseArrows,
  isMobile,
  handleLeftSwipe,
  handleRightSwipe
}) {
  return (
    <>
      {!isMobile ? (
        <>
          <ArrowLeftWrapper onClick={handleRightSwipe}>
            <ArrowLeftIcon />
          </ArrowLeftWrapper>
          <ArrowRightWrapper onClick={handleLeftSwipe}>
            <ArrowRightIcon />
          </ArrowRightWrapper>
        </>
      ) : (
        isAllowToUseArrows && (
          <>
            <MobArrowLeftIcon onClick={handleRightSwipe} />
            <MobArrowRightIcon onClick={handleLeftSwipe} />
          </>
        )
      )}
    </>
  );
}
