import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Story from "./Story";
import ImgStory from "../ImageStory";
import { motion } from "framer-motion";
import NewPost from "./NewPost";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Body = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    onSnapshot(q, (snapshot) => {
      setposts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Container>
      <Sidebar />
      <Feed>
        <Carousel>
          <Stories drag="x" dragConstraints={{ right: 0, left: -270 }}>
            {ImgStory.map((image, index) => (
              <Story
                key={index}
                img={image.imgProfile}
                bgImage={image.url}
                user={image.name}
              />
            ))}
          </Stories>
          <NewPost />
          {posts.map((posts, index) => (
            <Post
              key={index}
              name={posts.name}
              imgProfile={posts.imgProfile}
              postText={posts.postText}
              postImage={posts.postImage}
            />
          ))}
        </Carousel>
      </Feed>
      <SectionRight>Seccion Derecha</SectionRight>
    </Container>
  );
};

export default Body;

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #cfcfcf;
`;

const Feed = styled.div`
  width: 100%;
  display: flex;
  flex: 0.5;
  align-item: center;
`;

const Carousel = styled(motion.div)`
  width: 40em;
  background-color: white;
  height: 30vh;
  margin-top: 20px;
  border-radius: 10px;
`;

const Stories = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 90em;
  flex-wrap: wrap;
`;

const SectionRight = styled.div``;
