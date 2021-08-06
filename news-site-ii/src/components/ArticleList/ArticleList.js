import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import Article from '../Article/Article.js'

class ArticleList extends Component {

  createArticleList = (articles) => {
    let output = [];
    articles.map( (article, idx) => {
      // output.push({"id": article.id, "title": article.title, "created_date": article.created_date})
      output.push(<Article key={idx} id={article.id} title={article.title} created_date={article.created_date} handleTitleClick={this.props.handleTitleClick} />)
    })
    return output;
  }

  render() {
    return (
      <div>
        {this.createArticleList(this.props.articles, this.props.handleTitleClick)}
      </div>
    );
  }
}


export default ArticleList;
