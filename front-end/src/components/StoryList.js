import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';

import '../css/StoryList.css';
import StoryListItem from './StoryListItem'

class StoryList extends Component {

  renderListItem = () => {
    if (!this.props.stories) return null;
    return _
    .reduce(this.props.stories, (accum, story) => {
      accum.push(story);
      return accum;
    }, [])
    .map((story, key) => {
      const location = {pathname: `/story/${story.id}`}
      return (
        <Link key={key} to={location}>
          <StoryListItem key={key} story={story}/>
        </Link>
      )
    })
  }

  render() {
    return (
      <div className="StoryList">
        {this.renderListItem()}
      </div>
    );
  }
}

export default StoryList;
