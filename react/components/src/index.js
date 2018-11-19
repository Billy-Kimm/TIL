import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';

const App = () => {
  return (
    <Fragment>
    <Message header="안녕하세요" body="어서오십숑"/>
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
    </Fragment>

  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
