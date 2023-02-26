import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchPosts } from "./actions";
import { CTooltip } from '@coreui/react'

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

    return state.items.map((user) => (
      <CTooltip placement="right" content={renderToolTip(state.postTitles)} onShow={() => {getPostsIds(user.id)}}>
        <div style={styles.itemHolder}>{user.name}</div>
      </CTooltip>)
    );
  };

  return <div>{renderUsers()}</div>
};

export default Posts;

const styles = {
  itemHolder: {
    border: '1px solid rgba(0,255,0,0.3)', 
    width:'300px', 
    display: 'flex',
    padding: '5px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
