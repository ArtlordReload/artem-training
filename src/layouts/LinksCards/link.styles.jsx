// link.styles.jsx

import styled from '@emotion/styled';

export const CustomLink = styled.div`
  font-family: "Heebo-Bold, Helvetica";
  font-size: 25px;
  font-weight: 500;
  line-height: 24px;
  color: #00ae00;
  cursor: pointer;
  color: ${(props) => (props.activeLink === props.linkNumber ? '#00AE00' : '#808080')};
  text-decoration: ${(props) =>
    props.activeLink === props.linkNumber ? 'underline #00ae00' : 'color none'};
  transition: text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline #00AE00;
  }
`;