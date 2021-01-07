import React from 'react';

// Double break lines will make new paragraphs
// Single break lines will add within a paragraph a <br/> in between lines.
export function format_paragraphs(text, style) {
  return (
    (text && typeof text == 'string')
    ? text.split('\n\n').map((paragraph,i)=>
        <p key={i} style={style}>{
          ( lines=>
              lines.reduce((body,line,i)=>
                body.concat(i < lines.length - 1 ? [line, <br key={i+'b'}/>] : [line]),[]
              )
          )
          (paragraph.split('\n'))
        }</p>
      )
    : ''
  );
}

export function format_list(text, style) {
  return (
    (typeof text == 'string')
    ? <ul style={style}>{text.split('\n').map((t,i)=><li key={i}>{t}</li>)}</ul>
    : Array.isArray(text)
    ? <ul style={style}>{text.map((t,i)=><li key={i}>{t}</li>)}</ul>
    : ''
  );
}
