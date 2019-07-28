import styled from 'styled-components'

const Card = styled.section`
    box-shadow: 0px 2px 2px #efefef;
    border: 1px solid #efefef;
    border-radius: 4px;
    display: block;
    padding: 8px 16px;
`;

const ListItem = styled.div`
    display: block;
    padding: 8px 0px;
    border-bottom: 1px solid #efefef;
`;

const Container = {
    Card: Card,
    Item: ListItem
}

export default Container