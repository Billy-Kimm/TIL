//import React, { Component } from 'react';
import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author={faker.name.firstName()} 
                time={faker.date.recent().toLocaleString()}
                body={faker.lorem.sentence()}
                avatar={faker.image.avatar()}
                />
        </ApprovalCard> 
 
       <ApprovalCard>
            <CommentDetail 
                author={faker.name.firstName()} 
                time={faker.date.recent().toLocaleString()}
                body={faker.lorem.sentence()}
                avatar={faker.image.avatar()}
                />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                author={faker.name.firstName()} 
                time={faker.date.recent().toLocaleString()}
                body={faker.lorem.sentence()}
                avatar={faker.image.avatar()}
                />
        </ApprovalCard>    
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
