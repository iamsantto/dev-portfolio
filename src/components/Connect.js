import React from 'react';

import { CONNECT } from '../constants/app'

function Connect() {
  return <div className="Connect">
    <a href={CONNECT.githubUrl} target="blank"><img src={CONNECT.githubImg} alt={CONNECT.githubAlt} /></a>
    <a href={CONNECT.linkedinUrl} target="blank"><img src={CONNECT.linkedinImg} alt={CONNECT.linkedinAlt} /></a>
    <a href={CONNECT.instagramUrl} target="blank"><img src={CONNECT.instagramImg} alt={CONNECT.instagramAlt} /></a>
    <a href={CONNECT.twitterUrl} target="blank"><img src={CONNECT.twitterImg} alt={CONNECT.twitterAlt} /></a>
    <a href={CONNECT.mailUrl} target="blank"><img src={CONNECT.mailImg} alt={CONNECT.mailAlt} /></a>
  </div>
}

export default Connect;
