import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux/Actions/Users/userAction";

function UserList({ userData, fetchUsers }) {
  const fetchuser = useCallback(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    fetchuser();
  }, [fetchuser]);

  return (
    <div>
      {userData.loading ? (
        <h1>Loading...</h1>
      ) : userData.error ? (
        <h1>{userData.error}</h1>
      ) : (
        userData.users.map((user, key) => {
          return (
            <div key={key}>
              {user.name}
              <br />
            </div>
          );
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.allUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
