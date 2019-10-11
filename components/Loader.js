import styled from "styled-components";

const CenteredIcon = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;

    img {
        width: 100%;
    }
`;

const Loader = () => {
    return (
        <CenteredIcon>
            <img src="/static/images/loader.gif" alt="" />
        </CenteredIcon>
    );
};

export default Loader;
