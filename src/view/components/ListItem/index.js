import Divider from './Divider';
import ListItemStyledComponents from './styles';

const { StyledListItem, StyledListItemText, StyledDeletedIcon, StyledText } =
  ListItemStyledComponents;

function ListItem({ title, number, id, list, index, Icon, onIconClick, onTitleClick, style }) {
  return (
    <>
      <StyledListItem
        id={id}
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <StyledListItemText onClick={() => onTitleClick(id)}>
          <StyledText style={style}>{title}</StyledText>
          <StyledText>{number}</StyledText>
        </StyledListItemText>
        {Icon && <StyledDeletedIcon as={Icon} onClick={() => onIconClick(id)} />}
      </StyledListItem>
      <Divider lastIndex={list.length - 1} index={index} />
    </>
  );
}
export default ListItem;
