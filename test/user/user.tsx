import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "modules/store";
import {SET_INITIALIZED, SET_USER_ID} from "modules/user/user";

const User = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_USER_ID({id: "예제 ID"}));
    dispatch(SET_INITIALIZED({isInitialized: false}));
  });

  const divCss = {padding: 20};

  return (
    <>
      <div css={divCss}>
        <h1>user id: {user.loggedInUserId}</h1>
      </div>
      <div css={divCss}>
        <h1>
          initialized:
          {user.initialized ? "true" : "false"}
        </h1>
      </div>
    </>
  );
};

export default User;
