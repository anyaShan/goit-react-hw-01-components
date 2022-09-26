import {
  List,
  Item,
  Label,
  Percentage,
} from 'components/Statistics/StatList/StatList.styled';
export const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id} length={stats.length}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  );
};
