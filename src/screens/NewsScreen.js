import React from "react";
import NewsSearchForm from "../components/NewsSearchForm";
import NewsStories from "../components/NewsStories";
import NewsButtons from "../components/NewsButtons";
function NewsScreen() {
  return (
    <>
      <h2>Digital Nomad News</h2>
      {/* <NewsSearchForm /> */}
      <NewsButtons />
      <NewsStories />
    </>
  );
}

export default NewsScreen;
