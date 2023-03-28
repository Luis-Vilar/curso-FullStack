import React from 'react';
function Bio(props) {
  return ( 
<div>
        <h3>Bio</h3>
        {props.children}
      </div>
   );
}

export default Bio;