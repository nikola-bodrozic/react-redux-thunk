import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchPosts } from "./actions";
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

const styles = {
  display: 'table-cell',
  height: '60px',
  width: '80px',
  textAlign: 'center',
  background: '#f6f6f6',
  verticalAlign: 'middle',
  border: '5px solid white',
};

const Posts = () => {
  const disp = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    disp(fetchUsers());
  }, [disp]);

  const getPostsIds = index => disp(fetchPosts(index));

  const renderToolTip = arr => <div>{arr.map(item => <p key={item.id}>{item.title}</p>)}</div>;

  const renderUsers = () => {
    if (state.loading) return <p>Loading...</p>;
    
    return state.items.map((user) => (<div key={user.id}>
      <Tooltip
        placement="right"
        overlay={renderToolTip(state.postTitles)}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
        onVisibleChange={() => getPostsIds(user.id)}
      >
        <a href="#" style={styles}>{user.name}</a>
      </Tooltip></div>));
  };

  return <div>{renderUsers()}</div>
};

export default Posts;
