import React from 'react'

export default function Group (props){

  let reddit_url = `https://www.reddit.com/r/${props.group[0]}/`

    return (
        <li key={props.i} className='group-name'>
           <a className='group-link' href={reddit_url}>
              r/{props.group[0]}
          </a>
        </li>
      )
}

