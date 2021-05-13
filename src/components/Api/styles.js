import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 70px 0;
`;

export const Section = styled.div`
    background: ${(props) => props.bgColor || "white"};
    position: static;
    max-width: 100%;
    width: 100%;
    min-height: calc(100% - 70px);
    height: auto;
    transform: translateY(70px);
    display: flex;

    ${(props) =>
        props.center &&
        css`
            display: flex;
            justify-content: center;
            align-items: center;
        `}
`;

export const ContentBox = styled.div`
    width: calc(100% - 350px);
    margin-left: 350px;
    min-height: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 55px 60px;
    background: #f7f9f8;
`;

export const SideBar = styled.div`
    padding-top: 50px;
    width: 350px;
    height: calc(100% - 70px);
    position: fixed;
    overflow-y: scroll;
    top: 70px;
    left: 0;
    background: white;
    z-index: 10;
`;

export const SideTitle = styled.h2`
    font-size: 18px;
    color: #666666;
    width: 100%;
    margin: 0;
    padding: 13px 30px;
    cursor: pointer;
    position: relative;

    &::after,
    &::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 7px;
        background: #666666;
        top: 55%;
        transform-origin: center;
        transition: 0.15s all linear;
    }

    &::after {
        right: 30px;
        transform: translateY(-50%) rotate(50deg);
    }
    &::before {
        right: 34px;
        transform: translateY(-50%) rotate(-50deg);
    }
`;

export const SideItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SideSubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    height: 0;
    transition: 0.2s all ease-out;
    position: relative;
`;

export const SideLine = styled.div`
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: calc(100% - 18px);
    left: 34px;
    top: 9px;
    background: #dfdfdf;
`;

export const SideLineFill = styled.div`
    position: absolute;
    height: 29px;
    width: 2px;
    left: 0;
    top: 0;
    background: #132fb7;
    transition: 0.3s transform ease-out, 0.18s opacity linear;
    opacity: 0;

    // transform 47px ok?
`;

export const SideSub = styled.a`
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #666666;
    padding: 13px 30px 13px 50px;
    background: white;
    cursor: pointer;
    transition: 0.175s all linear;
    text-decoration: none;
    &:hover {
        filter: brightness(0.967);
    }
`;

export const DocsWrapper = styled.div`
    width: 980px;
    height: auto;
    background: white;
`;

export const DocsSection = styled.div`
    width: 100%;
    padding: 40px 50px;
    height: ${(props) => props.height || "auto"};
`;

export const DocsTitle = styled.h1`
    font-size: 32px;
    color: black;
    font-weight: 700;
    margin-top: 0;
`;

export const DocsBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
`;

export const DocsDes = styled.p`
    font-size: 17px;
    white-space: pre-line;
    letter-spacing: -0.4px;
    font-weight: 500;
    color: #333333;
    margin-bottom: 50px;
`;

export const DocsSubTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    white-space: pre;
    color: #111111;
    margin-bottom: 20px;
`;

export const DocsA = styled.a`
    color: black;
    font-size: 18px;
    font-weight: 700;
`;

export const DocsCode = styled.p`
    margin: 0;
    background: #f7f9f8;
    white-space: pre-wrap;
    padding: 20px 30px;
    letter-spacing: 0;
    margin-bottom: 10px;
`;

export const DocsImg = styled.img`
    width: 100%;
    height: auto;
`;
