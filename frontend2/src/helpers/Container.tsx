import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import { IBaseProps } from '../types/IGeneral';

const ContainerStyle: FC<IBaseProps> = ({ children }) => {
  return <Container className='mt-4'>{children}</Container>;
};

export default ContainerStyle;
