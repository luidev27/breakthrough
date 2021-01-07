import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { List, TrashFill } from 'react-bootstrap-icons';

import {format_paragraphs} from 'utils/format';
import Component from 'components/component';
import './corevalues.scss'

class Keyword {
  constructor(text) {
    this.text = text
    this.visible = true
    this.group = [0, false]
    this.selected_litmus = []
    this.selected_priority = false
    this.description = ''
  }
}

class CoreValues extends Component {
  constructor(props) {
    super(props)
    this.classes.push('corevalues');

    Object.assign(this.state,
      {
        workshop: {
          inputs: [],
          words: new Set(),
          groups: [
            [],
            [],
            [],
            [],
            []
          ],
        },
    //     discussion: [
    //       { author: {
    //           name:'Janis Joplin',
    //           image:'https://breakthroughos.com/wp-content/uploads/2020/09/mez3pofgs_k-scaled-50x50.jpg'
    //         },
    //         date: new Date().getTime() - 1000*60*60*24*4,
    //         text: 'Hey guys, I think this is a really great idea, but here are some points we need:\n\n- Captalize that\n- Make sure we talk about members'
    //       },
    //       { author: {
    //           name:'Walter White',
    //           image:'https://breakthroughos.com/wp-content/uploads/2020/09/nohb3fjsy90-scaled-50x50.jpg'
    //         },
    //         date: new Date().getTime() - 1000*60*60*24*6,
    //         text: 'I have a really good idea.'
    //       },
    //     ],
      }
    );
  }

  // on_drag_end(drawer, {source,destination,type,...event}) {
  //   if (!destination) {return}
  //   switch(type) {
  //     case 'group':
  //     let {workshop} = drawer.state;
  //
  //     let [sourceI,destinationI] = [source,destination].map(x=>parseInt(x.droppableId.split('-')[1]))
  //     let word = workshop.groups[sourceI].filter(x=>x.visible)[source.index];
  //     word.group[0] = destinationI;
  //
  //     let sourceFieldList = workshop.groups[sourceI];
  //     let destinationFieldList = workshop.groups[destinationI];
  //
  //     sourceFieldList.splice(source.index,1)
  //     destinationFieldList.splice(destination.index,0,word);
  //
  //     // If multiple words in a group are selected after a drag,
  //     // i.e. if dragging a selected word into a group already with a word selected,
  //     // deselect all of them.
  //     if (destinationFieldList.filter(word=>word.group[1]).length>1) {
  //       destinationFieldList.forEach(word=>word.group[1]=false)
  //     }
  //     break
  //     default:
  //     drawer.state.data.elements.splice(destination.index,0,drawer.state.data.elements.splice(source.index,1)[0]);
  //   }
  // }

  display(className) {
    return (
      <>
      { this.state.data.elements
        .filter(element=>element.type==='cell')
        .reduce((rows,element,i)=>{
          if (rows[rows.length-1].length < 2) {
            rows[rows.length-1].push(element)
          }
          else {
            rows.push([element])
          }
          return rows
        }, [[]])
        .map((row,i)=>
          <Row key={i}>
          { row.map((element,i)=>
              <Col className={[className,'value'].join(' ')} key={i}>
                <h5>{element['title']}</h5>
                {format_paragraphs(element['content'])}
              </Col>
            )
          }
          </Row>
        )
      }
      </>
    );
  }

  edit_display(className, drawer) {
    let {data} = drawer.state;
    let exerciseWindow = this.exercise_display(className, drawer)

    let editWindow = <>
    <Droppable droppableId="data-container">
    { (provided,snapshot)=>
      <div ref={provided.innerRef} {...provided.droppableProps}>{
        data.elements.map((element,elementI)=>{
          return <Draggable
          key={elementI}
          index={elementI}
          draggableId={element['title'] + element['content'] + elementI || elementI}
          >
          { (provided,snapshot)=>
              <div ref={provided.innerRef} {...provided.draggableProps}>
                <Row style={{marginBottom:'0.5em',padding:'0.5em', borderRadius:'5px', background: '#f8f8f8'}}>
                  <Col style={{display:'flex',flexDirection:'column'}}>{
                    ['title','content']
                    .map((field,fieldI)=>
                      <textarea
                      key={field+fieldI}
                      index={fieldI}
                      defaultValue={element[field]}
                      onChange={event=>element[field]=event.target.value}
                      style={{minWidth:'100px',marginBottom:'5px'}}
                      />
                    )
                  }
                  </Col>
                  <Col xs="auto" style={{display:'flex',flexDirection:'column'}}>
                    <div {...provided.dragHandleProps}>
                      <div style={{padding:'1em',borderRadius:'5px'}}>
                        <List style={{fontSize:'24px',display:'inline-block'}}/>
                      </div>
                    </div>
                    <button
                      onClick={_=>{
                        data.elements.splice(elementI,1);
                        drawer.setState({data});
                      }}
                      style={{padding:'1em',borderRadius:'5px'}}
                    >
                      <TrashFill style={{fontSize:'24px',display:'inline-block'}}/>
                    </button>
                  </Col>
                </Row>
              </div>
          }
          </Draggable>
        })
      }
      {provided.placeholder}
      </div>
    }
    </Droppable>
    <button style={{flex:'100%'}} onClick={_=>{
      let newdata = {title: 'new', content: 'value'};
      data.elements.push(newdata);
      drawer.setState({data});
    }}>Add New</button>
    </>

    return <Row>
      <Col style={{minWidth:'300px'}}>
        <Container fluid>{editWindow}</Container>
        <hr/>
      </Col>
      { exerciseWindow &&
        <Col>{exerciseWindow}</Col>
      }
    </Row>
  }

  exercise_display(className, drawer){
    return <>
      <h5 style={{fontSize:'14pt'}}>Core Values Exercise</h5>
      <p>Use our facilitated exercise to build your core values.</p>
      <button>Workshop It</button>
      <hr/>
      <h2>Creating your Core Values</h2>
      <span>
        <p>Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.</p>
        <p>The arrangement of type involves selecting typefaces, point size, line length, line-spacing (leading), letter-spacing (tracking), and adjusting the space within letters pairs (kerning).</p>
      </span>
      <img width="476" height="265" src="https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting-476x265.jpg" srcSet="https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting-320x178.jpg 320w,https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting-476x265.jpg 476w" data-img-src="https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting.jpg" alt="" title="product-development-consulting"/>
    </>
  }

  workshop_display(className, drawer){
    let {workshop} = drawer.state;
    let { inputs=[], words=new Set(), groups=[[],[],[],[],[]] } = workshop;
    let array_words = Array.from(words);

    let keywords = [
      'family', 'charity', 'innovation', 'technology', 'kindness', 'empathy', 'value', 'luxury'
    ];

    var step = (n,header,description,content)=><Row style={{padding:'4em'}}>
      <Col xs={3} style={{display: 'flex', flexDirection:'column'}}>
        <h6>Step {n}</h6>
        <h4>{header}</h4>
        {format_paragraphs(description)}
      </Col>
      <Col>
        {content}
      </Col>
    </Row>;

    function updates_words() {
      let inputs_ = inputs.slice(1);

      words.forEach(word=>word.visible=false);

      inputs_.forEach(string=>{
        if (typeof string !== 'string') { return }
        for (let word of string.split(' ')) {
          if (keywords.includes(word)) {
            let existing_keyword_i = array_words.findIndex((keyword,i)=>keyword.text===word);

            if (existing_keyword_i !== -1) {
              array_words[existing_keyword_i].visible = true;
            }
            else {
              let keyword = new Keyword(word);
              words.add(keyword)
            }
          }
        }
      });

      groups[0] = Array.from(words).filter(word=>word.group[0]===0);
      drawer.setState({workshop: Object.assign({inputs,words,groups},workshop) });
    }

    let suggest = n =>
      <textarea defaultValue={keywords.join(' ')}
      style={{width:'100%',height:'100%'}}
      onChange={event=>{
        inputs[n] = event.target.value;
        updates_words();
        drawer.setState({});
      } }
      />;

    let group = <Row>
      <Col xs={3}>
        <div className={className} style={{height:'300px'}}>
          <Droppable type="group" droppableId="group-0">
          { (provided,snapshot)=>
              <>
              <ul ref={provided.innerRef} {...provided.droppableProps}
              style={{margin:0,minHeight:'100%',background:snapshot.isDraggingOver?'#adf':'#fff'}}
              >
              { groups[0]
                .filter(x=>x.visible)
                .map((word,i)=>
                  <Draggable type="group" key={word.text} draggableId={word.text} index={i}>
                  { (provided,snapshot)=>
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <span className="keyword" style={{padding:'1em'}}>{word.text}</span>
                      </li>
                  }
                  </Draggable>
              ) }
              {provided.placeholder}
              </ul>
              </>
          }
          </Droppable>
        </div>
      </Col>
      <Col style={{display:'flex',flexWrap:'wrap'}}>
        { groups.map((group,group_i)=>
            group_i !== 0 &&
            <div className={className} style={{width:'50%',height:'150px'}} key={group_i}>
              <Droppable type="group" droppableId={'group-'+(group_i)}>
              { (provided,snapshot)=>
                  <>
                  <ul
                  style={{margin:0,background:snapshot.isDraggingOver?'#adf':'#fff',minHeight:'100%'}}
                  ref={provided.innerRef} {...provided.droppableProps}
                  >
                  { group
                    .filter(x=>x.visible)
                    .map((word,word_i)=>
                      <Draggable type="group" key={word.text} draggableId={word.text} index={word_i}>
                      { (provided,snapshot)=>
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <input type="checkbox"
                            onChange={event=>{
                              if (!word.group[1]) {
                                groups[group_i].forEach(x=>x.group[1]=false);
                              }
                              word.group[1] = !word.group[1];
                              drawer.setState({});
                            } }
                            checked={word.group[1]}
                            />
                            <span className="keyword" style={{padding:'1em'}}>{word.text}</span>
                          </li>
                      }
                      </Draggable>
                  ) }
                  {provided.placeholder}
                  </ul>
                  </>
              }
              </Droppable>
            </div>
        ) }
      </Col>
    </Row>;

    let questions = [
      'If you were to start a new organization, which words would you select to build it around regardless of industry?',
      'Which of these values would you want your organization to continue to stand for 100 years into the future, no matter what changes occur in the outside world?',
      'Which of these values, if breached by an employee, would suggest they do not belong as part of the organization?',
    ];

    let litmus = <Container>
      { questions.map((question,question_i)=>
          <div className={className} style={{marginBottom:'2em',padding:'2em'}} key={question_i}>
            <h6 style={{marginBottom:'2em'}}>{question}</h6>
            <div style={{display:'flex'}}>
            { array_words.map((word,word_i)=>
                word.visible &&
                <button className="keyword" key={word_i}
                style={{
                  background:word.selected_litmus[question_i]?'#48f':'#eee',
                  padding:'7px 20px',marginRight:'10px',borderRadius:'20px',
                  fontSize:'14px',
                }}
                onClick={event=>{
                  word.selected_litmus[question_i] = !word.selected_litmus[question_i];
                  drawer.setState({});
                } }
                >{word.text}</button>
            ) }
            </div>
          </div>
      ) }
    </Container>;

    let prioritize = <Container>
      <Row className={className} style={{padding:'1em',minHeight:'70px',marginBottom:'1em'}}>
      { array_words.map((word,i)=>
          word.visible &&
          <button className="keyword" key={i}
          style={{
            background:
              word.selected_priority
              ? '#48f'
              : array_words.filter(word=>word.selected_priority).length >= 7
              ? '#ddd'
              : '#eee',
            padding:'7px 20px',marginRight: '10px',borderRadius:'20px',
            fontSize:'14px',
          }}
          disabled={!word.selected_priority&&array_words.filter(word=>word.selected_priority).length >= 7}
          onClick={event=>{
            // Toggle the selection of the keyword
            if (array_words.filter(word=>word.selected_priority).length >= 7 && !word.selected_priority) { return }
            word.selected_priority = !word.selected_priority;
            drawer.setState({});
          } }
          >{word.text}</button>
      ) }
      </Row>
      { array_words.map((word,i)=>
          word.visible && word.selected_priority &&
          <Row className={className} key={i} style={{marginBottom:'1em',padding:'1em'}}>
            <Col xs={2} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
              <h4 className="keyword">{word.text}</h4>
            </Col>
            <Col>
              <textarea defaultValue={word.description} placeholder="Value Description" style={{width:'100%'}} rows={4}
              onChange={event=>{
                word.description = event.target.value
              } }
              />
            </Col>
          </Row>
      ) }
    </Container>

    let sections = [
      <Row>
        <Col style={{padding:'2em'}}>
          <h1>Create Your Core Values</h1>
          {format_paragraphs('Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed. The arrangement of type involves selecting typefaces, point size, line length, line-spacing (leading), letter-spacing (tracking), and adjusting the space within letters pairs (kerning).')}
        </Col>
        <Col xs={4}>
          <Image src="https://breakthroughos.com/wp-content/uploads/2020/10/product-development-consulting-476x265.jpg"/>
        </Col>
      </Row>,
      step(
        1,
        'MVP ( Most Valuable Player )',
        'Think about a person you know (that works at the company or not) who is most likely to drive the company to success. List the skills and traits of that person you are thinking of',
        suggest(1),
      ),
      step(
        2,
        'Day in the Life',
        'Describe a single workday 5 years in the future. What do you do? What do you enjoy most about the day? What is it like to work at your company?',
        suggest(2),
      ),
      step(
        3,
        'Group',
        'We\'ve pulled words out for you. Group similiar words and then choose one from each group that resonates the most with you.',
        group,
      ),
      step(
        4,
        'Litmus Test',
        'Select the words you believe answer the questions.',
        litmus,
      ),
      step(
        5,
        'Prioritize & Describe',
        'Choose a maximum of 7 words and then describe what they should mean to your team.',
        prioritize,
      ),
    ];

    return <>
      {sections.map((section,i)=><div key={i}>{section}<hr/></div>)}
    </>
  }
}

export default CoreValues;
