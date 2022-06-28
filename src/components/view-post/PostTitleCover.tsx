import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootStore } from "../../redux/Types";

const TitleCoverWrapper = styled.div`
    .title-cover {
        width: 100%;
        height: 450px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #f8f8f8;
        z-index: -1;

        @media (max-width: 800px) {
            width: 100%;
            height: 400px;
        }
    }
`;

const TitleInfoWrapper = styled.div`
    width: 45%;
    margin: 150px auto;
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    @media (max-width: 800px) {
        width: 90%;
    }
    .title {
        font-family: "Noto Serif KR", serif;
        font-size: 45px;

        @media (max-width: 800px) {
            font-size: 30px;
        }
    }
    .subtitle {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        color: #aaa;

        @media (max-width: 800px) {
            margin-top: 5px;
            font-size: 16px;
        }
    }
    .article-info {
        font-size: 12px;
        font-weight: 500;
        color: #aaa;
        margin-top: 30px;

        @media (max-width: 800px) {
            margin-top: 15px;
        }

        .date {
            color: #ccc;
        }
    }
`;

const PostTitleCover = () => {
    const { blog } = useSelector((state: RootStore) => state);
    return (
        <TitleCoverWrapper>
            <div className="title-cover" />
            <TitleInfoWrapper>
                <h1 className="title">{blog.title}</h1>
                <p className="subtitle">{blog.subTitle}</p>
                <div className="article-info">
                    <span className="by">by </span>
                    <span className="author">데데뎁 Dededef · </span>
                    <span className="date">{blog.date}</span>
                </div>
            </TitleInfoWrapper>
        </TitleCoverWrapper>
    );
};

export default PostTitleCover;
