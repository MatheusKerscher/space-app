import styled from "styled-components";

import tags from "./tags.json";

const StyledTagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 56px 0 40px 0;
`;

const StyledTagsTitle = styled.h3`
  font-size: 24px;
  color: #d9d9d9;
`;

const StyledButtonTagContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledButtonTag = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  color: #ffffff;
  border-radius: 10px;
  border: ${(props) => (props.$currentTag ? "3px solid #c98cf1" : "3px solid transparent")};
  outline: none;
  padding: 10px 8px;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({ currentTagId, onChangeCurrentTagId }) => {
  return (
    <StyledTagsContainer>
      <StyledTagsTitle>Busque por tags:</StyledTagsTitle>

      <StyledButtonTagContainer>
        {tags.map((t) => (
          <StyledButtonTag
            key={t.id}
            $currentTag={currentTagId === t.id}
            type="button"
            onClick={() => onChangeCurrentTagId(t.id)}
          >
            {t.title}
          </StyledButtonTag>
        ))}
      </StyledButtonTagContainer>
    </StyledTagsContainer>
  );
};

export default Tags;
