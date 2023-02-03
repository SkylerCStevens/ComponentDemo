import React from 'react';

export type CommentpostProps = {
  likeCount: number;
  id: number;
  threadId: number;
  replyId: number;
  replyable: boolean;
  isLoggedIn: boolean;
  likable: boolean;
  userName: string;
  profileImg: {imgSrc: string, imgAlt: string};
};

export function Commentpost({ 
  likeCount,
  id,
  replyId,
  threadId,
  replyable,
  isLoggedIn,
  likable,
  userName,
  profileImg
 }: CommentpostProps) {
  return (
    <div>
      {}
    </div>
  );
}
