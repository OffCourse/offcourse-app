import React from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { isEmpty } from "ramda";
import { CourseCardProvider, CoursesProvider } from "../../providers";
import { NoSearchResultsView } from "..";
import View from "./View";

const mapper = {
  collection: ({ collectionName, searchTerm, curator, tag, render }) => {
    if (collectionName || searchTerm || curator || tag) {
      return (
        <CoursesProvider
          collectionName={collectionName}
          searchTerm={searchTerm}
          curator={curator}
          tag={tag}
        >
          {render}
        </CoursesProvider>
      );
    }
    return <CoursesProvider collectionName="popular">{render}</CoursesProvider>;
  },
  courseCard: <CourseCardProvider />
};

const CoursesContainer = ({ match, handlers }) => {
  const { collectionName, curator, tag, searchTerm } = match.params;
  const { goHome } = handlers;
  return (
    <Adopt
      curator={curator}
      collectionName={collectionName}
      tag={tag}
      searchTerm={searchTerm}
      mapper={mapper}
    >
      {({ collection, courseCard }) => {
        if (isEmpty(collection.courses)) {
          return (
            <NoSearchResultsView searchTerm={searchTerm} goHome={goHome} />
          );
        }
        return (
          <View
            handlers={handlers}
            collection={collection}
            courseCard={courseCard}
          />
        );
      }}
    </Adopt>
  );
};

CoursesContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string,
      curator: PropTypes.string,
      goal: PropTypes.string
    }).isRequired
  }).isRequired,
  handlers: PropTypes.shape({
    goToCollection: PropTypes.func.isRequired,
    goToCourse: PropTypes.func.isRequired,
    goToCheckpoint: PropTypes.func.isRequired
  }).isRequired
};

export default CoursesContainer;
