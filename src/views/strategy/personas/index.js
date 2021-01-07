import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { ArrowsMove, ArrowsExpand, TrashFill } from 'react-bootstrap-icons';

import {format_paragraphs,format_list} from 'utils/format';
import Component from 'components/component';
import './personas.scss'

class Personas extends Component {
  constructor(props) {
    super(props)
    this.classes.push('personas');

    Object.assign(this.state.data, {
      primary: this.state.data.elements.filter(element=>element.type==='primary'),
      secondary: this.state.data.elements.filter(element=>element.type==='secondary'),
    });

    // Defining templates for sections in the workshop_display
    let choosefrom = (key,choices,selected,labelAddNew)=>{
      this.state.workshop[key] = {
        type: 'choosefrom',
        data: {choices, selected}
      }

      return (className, drawer) => {
        let {workshop} = drawer.state;
        let fields = ['selected','choices'];

        return (
          <Row>
          { fields.map((field,i)=>
              <Col key={field}>
                <div className={className} style={{height:'400px'}}>
                  <Droppable type={key} droppableId={key+'-'+field}>
                  { (provided,snapshot)=>
                      <ul
                       ref={provided.innerRef} {...provided.droppableProps}
                       style={{margin:0,background:snapshot.isDraggingOver?'#adf':'#fff',minHeight:'100%'}}
                      >
                        { workshop[key]['data'][field].map(([text,can_delete],i)=>
                            <Draggable type={key} key={key+field+text} draggableId={key+field+text} index={i}>
                              { (provided,snapshot)=>
                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <Row style={{margin:0,alignItems:'center'}}>
                                    <ArrowsMove style={{display:snapshot.isDragging?'none':''}}/>
                                    <Col>{text}</Col>
                                    <button
                                      onClick={event=>{
                                        workshop[key]['data'][field].splice(i,1);
                                        drawer.setState({workshop});
                                      } }
                                      style={{display:(!can_delete||snapshot.isDragging)?'none':'',padding:'0.25em 0.5em',borderRadius:'5px'}}
                                    >
                                      <TrashFill style={{margin:0}}/>
                                    </button>
                                  </Row>
                                </li>
                              }
                            </Draggable>
                        ) }
                        {provided.placeholder}
                      </ul>
                  }
                  </Droppable>
                </div>
                { i===1 &&
                  <Row style={{margin:0}}>
                    <input
                     placeholder={labelAddNew}
                     onChange={event=>{
                       let input = event.target;
                       if (input.value) {
                         input.nextSibling.classList.remove('input-hidden')
                       } else {
                         input.nextSibling.classList.add('input-hidden')
                       }
                     }}
                     onKeyPress={event=>event.which===13?event.target.nextSibling.click():''}
                     style={{margin:'0.5em',padding:'0.2em 0.5em',maxWidth:'350px',width:'100%',background:'#eee',border:0}}
                    />
                    {/*Button must come directly after the input while using previousSibling*/}
                    <button className="input-hidden"
                     onClick={event=>{
                       let button = event.target;
                       let newValue = button.previousSibling.value;
                       let currentValues = workshop[key]['data'][field].map(([text])=>text);

                       if (!currentValues.includes(newValue)) {
                         workshop[key]['data'][field].push([newValue,true]);
                         drawer.setState({workshop});
                         button.previousSibling.value = '';
                         button.classList.add('input-hidden');
                       }
                       else {
                         console.log('already included')
                       }
                     } }
                    >Submit</button>
                  </Row>
                }
              </Col>
          ) }
          </Row>
        );
      }
    };
    let multilist = (...lists)=>{
      lists.forEach(list=>{
        let {workshop} = this.state;
        workshop[list[0]] = {
          type: 'multilist',
          data: list[1]
        };
      });

      return (className, drawer) => {
        let {workshop} = drawer.state;

        return (
          <Row>
          { lists.map(([key,choices,labelAddNew])=>
              <Col key={key}>
                <div className={className} style={{height:'400px'}}>
                  <Droppable type={key} droppableId={key}>
                    { (provided,snapshot)=>
                        <ul
                         ref={provided.innerRef} {...provided.droppableProps}
                         style={{margin:0,background:snapshot.isDraggingOver?'#adf':'#fff',minHeight:'100%'}}
                        >
                          { workshop[key]['data'].map(([text,can_delete],i)=>
                              <Draggable type={key} key={key+text} draggableId={key+text} index={i}>
                                { (provided,snapshot)=>
                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                      <Row style={{margin:0,alignItems:'center'}}>
                                        <ArrowsExpand style={{display:snapshot.isDragging?'none':''}}/>
                                        <Col>{text}</Col>
                                        <button
                                         onClick={event=>{
                                           workshop[key]['data'].splice(i,1);
                                           drawer.setState({workshop});
                                         } }
                                         style={{display:(!can_delete||snapshot.isDragging)?'none':'',padding:'0.25em 0.5em',borderRadius:'5px'}}
                                        >
                                          <TrashFill style={{margin:0}}/>
                                        </button>
                                      </Row>
                                    </li>
                                }
                              </Draggable>
                          ) }
                          <div style={{padding:'2em'}}/>
                        </ul>
                  }
                  </Droppable>
                </div>
                <Row style={{margin:0,flexWrap:'none'}}>
                  <input
                   placeholder={labelAddNew}
                   onChange={event=>{
                     let input = event.target;
                     if (input.value) {
                       input.nextSibling.classList.remove('input-hidden');
                     } else {
                       input.nextSibling.classList.add('input-hidden');
                     }
                   }}
                   onKeyPress={event=>console.log(/*event.which*/)}
                   style={{margin:'0.5em',padding:'0.2em 0.5em',flex:'1',maxWidth:'350px',background:'#eee',border:0}}
                  />
                  {/*Button must come directly after the input while using previousSibling*/}
                  <button className="input-hidden"
                   onClick={event=>{
                     let button = event.target;
                     let newValue = button.previousSibling.value;
                     let currentValues = workshop[key]['data'].map(([text])=>text);

                     if (!currentValues.includes(newValue)) {
                       workshop[key]['data'].push([newValue,true]);
                       drawer.setState({workshop});
                       button.previousSibling.value = '';
                       button.classList.add('input-hidden');
                     }
                     else {
                       console.log('already included')
                     }
                   } }
                  >Submit</button>
                </Row>
              </Col>
            )
          }
          </Row>
        )
      }
    }

    Object.assign(this.state.workshop, {
      sections: [
        { title: 'Motivations',
          description: 'Motivations are why prospects are looking or what is driving them to find a solution.\n\nThink about what is influencing them at work or personally. Motivations are a lot more emotional and core to a person\'s needs and wants.',
          template: choosefrom('motivations',
          //  [text: str, can_be_deleted: bool]
            [ ['Increase or Mantain Revenue',false],
              ['Decrease Costs',false],
              ['Reduce Risk',false],
              ['Deliver on Time',false],
              ['Gain Traction on Internal Initiatives',false],
              ['Don\'t know what to do',false],
              ['Job Security',false],
              ['Impress Peers',false],
              ['Keep Up with Competition',false],
              ['Keep Up with Standards',false],
              ['Gain an Edge on Competition',false],
              ['Make faster, smarter decisions',false],
              ['Update IT Systems',false],
              ['Lack of Time',false],
              ['Reduce their decision making',false],
              ['Improve Culture',false],
              ['Improve Flexibility of Workforce',false],
              ['Improve Collaboration',false],
            ],
            [],
            'Add Your Own Motivations'
          )
        },
        { title: 'Buying Factors',
          description: 'Buying factors are what prospects are comparing you against competitors to make a choice.\n\nThink about what they are comparing you and competitors against to make a decision. Are they comparing industry expertise, level of support, number of people, features, security, certifications, pricing structure, breadth of services, etc.\n\nThis isn’t about what you are good at or think why they choose you, this has to be about what they are comparing to make a decision even if you are weak.',
          template: choosefrom('buyingfactors',
          //  [text: str, can_be_deleted: bool]
            [ ['Price',false],
              ['Past Industry Experience',false],
              ['Industry Knowledge',false],
              ['Personal Connection',false],
              ['Personality',false],
              ['Track Record of Success',false],
              ['Reputation',false],
              ['Availability + Bandwidth',false],
              ['Time To Completion',false],
              ['Approach / Methodology',false],
              ['Tactical Strategy',false],
              ['Technology Alignment',false],
              ['Credentials',false],
              ['Geographic Location',false],
              ['Size + Stability',false],
              ['Years in Business',false],
              ['Diversity of Offerings',false],
            ],
            [],
            'Add Your Own Buying Factors'
          )
        },
        { title: 'Barriers',
          description: 'Barriers are what stop a person from making a decision. They can either be the opposite of motivations or often outside influencers.',
          template: choosefrom('barriers',
          //  [text: str, can_be_deleted: bool]
            [ ['Approval from Management',false],
              ['Tech Knowledge / Capability',false],
              ['Time to learn something new',false],
            ],
            [],
            'Add Your Own Barriers'
          )
        },
        { title: 'Influencers',
          description: 'Influencers are the things that affect people\'s motivations, buying factors or barriers.\n\nInfluencers help you determine how to convince someone and get them to take action.',
          template: choosefrom('influencers',
          //  [text: str, can_be_deleted: bool]
            [ ['Social Proof / Testimonials', false],
              ['Logical Explanations',false],
              ['Data & Charts',false],
              ['Stats',false],
              ['Tips & Tricks',false],
            ],
            [],
            'Add Your Own Influencers'
          )
        },
        { title: 'Demographics & Firmographics',
        description: 'This information helps define and target your key audiences.',
        template: multilist(
          [ 'ageranges',
          //  [text: str, can_be_deleted: bool]
            [ ['65+', true],
              ['45 - 65', true],
              ['30 - 45', true],
              ['20 - 30', true],
              ['14 - 18', true],
            ],
            'Add Your Own Age Ranges',
          ],
          [ 'jobtitles',
          //  [text: str, can_be_deleted: bool]
            [ ['CEO',true],
              ['President',true],
              ['CIO',true],
              ['CFO',true],
            ],
            'Add Your Own Job Titles',
          ],
          [ 'interests',
          //  [text: str, can_be_deleted: bool]
            [ ['Sports',true],
              ['Meditation',true],
            ],
            'Add Your Own Interests'
          ]
        )
      }
      ]
    });
    // End workshop_display templates
  }

  on_drag_end(drawer,{source,destination,type:key,...event}){
    if (!destination) {return}

    switch(drawer.state.displayWindowType) {
      case 'workshop':
      switch(drawer.state.workshop[key]['type']) {
        case 'choosefrom':
        let sourceFieldList = drawer.state.workshop[key]['data'][source.droppableId.split('-')[1]];
        let destinationFieldList = drawer.state.workshop[key]['data'][destination.droppableId.split('-')[1]];
        destinationFieldList.splice(destination.index,0,sourceFieldList.splice(source.index,1)[0]);
        break

        case 'multilist':
        let fieldList = drawer.state.workshop[key]['data'];
        fieldList.splice(destination.index,0,fieldList.splice(source.index,1)[0]);
        break

        default:
      }
      break
      default:
    }
  }

  display(className) {
    return (
      <>
        { this.state.data.primary.length
          ? this.state.data.primary.map(persona=>
              <Row key={persona['persona_name']} className={className}>
                <Col className="summary">
                  <div className="persona-image">
                    <Image roundedCircle src={persona['persona_image']} fluid/>
                  </div>
                  <div style={{fontSize:'16pt',margin:'1em auto',textAlign:'center'}}><strong>{persona['persona_name']}</strong></div>
                  <div><button style={{display:'block',margin:'auto',backgroundColor:'#05a8e9',padding:'1em 2em'}}><strong>Full Persona</strong></button></div>
                </Col>
                <Col className="description">
                  { format_paragraphs(persona['persona_description']) }
                </Col>
                <Col className="details">
                  { persona['persona_details'] &&
                    persona['persona_details'].map(([header,details])=>
                      <div key={header}>
                        <h5>{header}</h5>
                        <hr/>
                        <div>{ format_list(details) }</div>
                      </div>
                    )
                  }
                </Col>
              </Row>
            )
          : ''
        }
        { this.state.data.secondary.length
          ? <Row className={[className,'scrollbox-x'].join(' ')} style={{flexWrap:'nowrap'}}>
            { this.state.data.secondary.map(persona=>
              <Col key={persona['persona_name']}>
                <h5 style={{textAlign:'center', marginBottom:'1em'}}>{persona['name']}</h5>
                <div className="persona-image">
                  <Image src={persona['persona_image']} style={{minWidth:'100px',marginBottom:'1em'}} fluid rounded/>
                </div>
                <div className="description">{ format_paragraphs(persona['persona_description']) }</div>
              </Col>
              )
            }
            </Row>
          : ''
        }
      </>
    );
  }

  edit_display(className, drawer) {
    let {data} = drawer.state;

    return <>
    {
      ['primary','secondary'].map(key=>
        <div style={{marginBottom:'1em'}} key={key}>
          <h5 style={{textTransform:'capitalize'}}>{key} Personas</h5>
          <Container style={{padding:'1em'}}>{
            data[key].map((persona,i)=>
              <Row key={persona['persona_name']} style={{padding:'0.5em',border:'1px solid #eee'}}>
                <Image src={persona['persona_image']} width={100}
                style={{width:'20%',cursor:'pointer'}}
                onClick={event=>{
                  let input = event.target.nextSibling;
                  input.click();
                }}
                />
                <input type="file" style={{display:'none'}}
                accept="image/*"
                onChange={event=>{
                  let file = event.target.files[0];
                  let reader = new FileReader(file);
                  reader.addEventListener('load', _=>{
                    persona['persona_image'] = reader.result;
                    drawer.setState({data});
                  }, false);
                  reader.readAsDataURL(file);
                }}
                />
                <input defaultValue={persona['persona_name']} style={{flex:'60%'}} rows={1}
                onChange={event=>{
                  persona['persona_name'] = event.target.value;
                  // Don't know why but calling drawer.setState here prematurely renders the whole component
                  // and the input loses focus after every keypress.
                  // Confirmed not based on the component type or order of them
                  // Likely due to something like 'name' being a reserved key and causing state updates.
                }}
                />
                <textarea defaultValue={persona['persona_description']} style={{flex:'50%'}} rows={8}
                onChange={event=>{
                  persona['persona_description'] = event.target.value;
                }}
                />
                { key === 'primary' &&
                  <div style={{flex:'50%',overflowY:'auto',maxHeight:'300px'}}>{
                    persona['persona_details'].map(([header,detail],i)=>
                      <Row key={i} style={{width:'100%',margin:0}}>
                        <input defaultValue={header} style={{flex:'50%'}}
                        onChange={event=>{
                          persona['persona_details'][i][0] = event.target.value;
                        }}
                        />
                        <textarea defaultValue={detail} style={{flex:'50%'}} rows={4}
                        onChange={event=>{
                          persona['persona_details'][i][1] = event.target.value;
                        }}
                        />
                      </Row>
                    )
                  }</div>
                }
              </Row>
            )
          }</Container>
          <button style={{width:'100%'}}
          onClick={event=>{
            data[key].push({name:'Name',description:'Description',details:[['Key Motivations','Details'],['Key Buying Factors','Details']]});
            drawer.setState({data});
          }}
          >Add New +</button>
        </div>
      )
    }
    </>
  }

  workshop_display(className, drawer) {
    return <>
    {
      drawer.state.workshop.sections.map(section=>
        <Row key={section['title']}>
          <Col xs={3} style={{display:'flex',flexDirection:'column',justifyContent:'center',minWidth:'285px'}}>
            <h5>{section['title']}</h5>
            {format_paragraphs(section['description'])}
          </Col>
          { section['template'] &&
            <Col>
              <Container>{section['template'](className,drawer)}</Container>
            </Col>
          }
          <hr style={{margin:'5em 0'}}/>
        </Row>
      )
    }
    </>
  }
}

export default Personas;
