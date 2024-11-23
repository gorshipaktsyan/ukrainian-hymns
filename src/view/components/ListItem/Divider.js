import { Divider } from '@mui/material';

export default function DividerComponent({ lastIndex, index }) {
  return index !== lastIndex ? <Divider key={index} /> : null;
}
