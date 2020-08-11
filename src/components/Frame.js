import React from 'react';
import Head from './Head';
import AboutMe from './AboutMe';
import EducationUl from './EducationUl';
import '../styles/frame.scss';

function Frame() {
  const aboutMeDescribe =
    'Lorem ipsum dolor sit amet,consectetur adipisicing elit. Repellendus,non,dolorem,cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.';
  const describeList = [
    {
      year: 1990,
      title: 'I was born in Katowice',
      describe:
        'Lorem ipsum dolor sit amet,consectetur adipisicing elit.Sapiente,exercitationem,totam,dolores iste dolore est aut modi.',
    },
    {
      year: 2005,
      title: 'Secondary school specializeing in artistic',
      describe:
        'Eos,explicabo,nam,tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
    },
    {
      year: 2009,
      title: 'First level graduation in Graphic Design',
      describe:
        'Aspernatur,mollitia,quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis?Iusto,quibusdam asperiores unde repellat.',
    },
    {
      year: 2012,
      title: 'Second level graduation in Graphic Design',
      describe: 'Ducimus,aliquam tempore autem itaque et accusantium!',
    },
  ];
  return (
    <div className="Frame">
      <Head name="KAMIL 24YO"></Head>
      <hr className="frameHr"></hr>
      <AboutMe describe={aboutMeDescribe}></AboutMe>
      <EducationUl describeList={describeList}></EducationUl>
    </div>
  );
}

export default Frame;
