import styled from "styled-components";

export const CardStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 3px solid var(--color-font);
    padding: 5px;

    .img {
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .data-news {
        display: flex;
        flex-direction: column;

        h5 {
            font-size: 1.4rem;
            padding: 15px 0;
        }
    }
`