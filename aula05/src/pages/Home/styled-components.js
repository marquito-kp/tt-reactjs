import styled from 'styled-components';

export const Button = styled.button`
    background: ${ (props) => props.size ? 'red' : 'blue'};
    width: ${ (props) => props.size ? '100' : '300'}px;
    padding: 15px;
    color: #fff;
    border: none;
`
