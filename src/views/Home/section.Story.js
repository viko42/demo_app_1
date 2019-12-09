import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";

import { SectionContainer, StoryContainer, CardContainerStory } from "./styled";
import SectionTitle from "../../components/Sections/Title";
import ReactMarkdown from "react-markdown";

import { storyCards } from "../../data";

function SectionSteps(props) {
  const [cards, setCards] = useState([]);

  const loadFiles = useCallback(async () => {
    for (const key in storyCards) {
      const element = storyCards[key];
      const text = await fetch(element.markdownFile)
        .then(response => response.text())
        .then(text => text);

      setCards(cards => cards.concat(text));
    }
  }, []);

  useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  return (
    <SectionContainer>
      <SectionTitle text={props.title} id="story" />
      <StoryContainer>
        {cards.map((text, key) => (
          <CardContainerStory
            xs={12}
            sm={12}
            md={12}
            xlg={6}
            align={"inherit"}
            key={key}
          >
            <div>
              <img src={storyCards[key].icon} alt="icon" />
              <span>{storyCards[key].title}</span>
            </div>
            <div>
              <ReactMarkdown linkTarget={"_blank"} source={text} />
            </div>
          </CardContainerStory>
        ))}
      </StoryContainer>
    </SectionContainer>
  );
}

SectionSteps.propTypes = {
  title: PropTypes.string
};

SectionSteps.defaultProps = {
  title: "Our story"
};

export default SectionSteps;
