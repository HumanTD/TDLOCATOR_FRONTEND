import React from 'react';
import Button from '@mui/material/Button';
import Sexy from '../components/Sexy';

const divStyle = `
justify-text-center
text-center flex  flex-col   m-10
`;
const buttonStyle = `
w-1/2 
`;
const Heropage = () => (
  <div className=" flex w-full flex-row font-serif">
    <div className={`${divStyle} w-3/5`}>
      <h1 className="pb-5 text-8xl font-bold">Finding the missing</h1>
      <p className="px-5 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam quas,
        distinctio tempora ratione dolore ab rerum fugit tenetur, itaque minima
        similique obcaecati quis laborum, omnis molestias deleniti nisi autem!
      </p>
      <div className="mt-10 flex justify-center">
        <Button
          type="button"
          variant="contained"
          className={`${buttonStyle}`}
          href="/"
        >
          Login
        </Button>
      </div>
    </div>

    <div className={`${divStyle} h-96 w-2/5`}>
      <Sexy />
    </div>
  </div>
);

export default Heropage;
