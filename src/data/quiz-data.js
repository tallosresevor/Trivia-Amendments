import React from 'react';

const QUESTION_DATA = [
  {
    //Question 1, Correct answer is C
    question: <span>What do the Fifteenth, Nineteenth, and Twenty-sixth Amendments all have in common?</span>,
    answers: [
      <span>They each define rights of all citizens.</span>,
      <span>They each undo previous amendments.</span>,
      <span>They each give voting rights to a group that did not previously have them.</span>,
      <span>They were each adopted in the 1800s.</span>
    ],
    correct: 2
  },{
    //Question 2, Correct answer is A
    question: <span>The Seventeenth Amendment provides that senators are elected:</span>,
    answers: [
      <span>Directly by the people of each state.</span>,
      <span>By the state legislatures.</span>,
      <span>By the Electoral College.</span>,
      <span>By the House of Representatives.</span>
    ],
    correct: 0
  },{
    //Question 3, Correct answer is B
    question: <span>Which of the following is a key provision of the Fourteenth Amendment?</span>,
    answers: [
      <span>It protects all citizens' freedom of speech.</span>,
      <span>It defines citizenship.</span>,
      <span>It abolishes slavery.</span>,
      <span>It explains that people who fought for the South in the Civil War will never be allowed to hold office in the United States.</span>
    ],
    correct: 1
  },{
    //Question 4, Correct answer is A
    question: <span>The Fourteenth Amendment guarantees:</span>,
    answers: [
      <span>That states will not deny anyone equal protection of the laws.</span>,
      <span>That everyone except criminals will be counted when figuring a state's number of representatives in Congress.</span>,
      <span>The right to vote to all former slaves.</span>,
      <span>The same rights as those named in the Fifth Amendment.</span>
    ],
    correct: 0
  },{
    //Question 5, Correct answer is D
    question: <span>A person may be elected to no more than two terms in a row as President, according to
    which amendment?</span>,
    answers: [
      <span>12th Amendment</span>,
      <span>17th Amendment</span>,
      <span>20th Amendment</span>,
      <span>22nd Amendment</span>
    ],
    correct: 3
  },{
    //Question 6, Correct answer is A
    question: <span>You can infer from the Twenty-third Amendment that:</span>,
    answers: [
      <span>People living in Washington, DC, were not entitled to vote for President before the
      amendment was passed.</span>,
      <span>Washington, DC, has been treated like a state for most purposes in the Constitution.</span>,
      <span>The population in Washington, DC, is very large.</span>,
      <span>The people in Washington, DC, did not care if they could vote for President or not.</span>
    ],
    correct: 0
  },{
    //Question 7, Correct answer is C
    question: <span>In 1974, President Richard Nixon resigned from office. Which amendment explains what
    action had to be taken after that?</span>,
    answers: [
      <span>20th Amendment</span>,
      <span>22nd Amendment</span>,
      <span>25th Amendment</span>,
      <span>26th Amendment</span>
    ],
    correct: 2
  },{
    //Question 8, Correct answer is D
    question: <span>What is the correct sequence of these events: 
      <div>a. passage of the Twenty-first Amendment</div>
      <div>b. growth of temperance, or anti-alcohol, movement in the 1850s</div>
      <div>c. passage of the Eighteenth Amendment</div>
      <div>d. increase of drinking age in most states in the late 1900s</div>
    </span>,
    answers: [
      <span>A, B, C, D</span>,
      <span>A, C, B, D</span>,
      <span>C, A, B, D</span>,
      <span>B, C, A, D</span>
    ],
    correct: 3
  },{
    //Question 9, Correct answer is A
    question: <span>Which statement reflects a positive view of the Sixteenth Amendment?</span>,
    answers: [
      <span>Taxes are needed to help the government do good for all of us.</span>,
      <span>Even women deserve to vote.</span>,
      <span>Banning alcohol will help businesses and improve family life.</span>,
      <span>One positive result of Reconstruction is the end of slavery.</span>
    ],
    correct: 0
  },{
    //Question 10, Correct answer is A
    question: <span>Poll taxes were outlawed by the Twenty-fourth Amendment:</span>,
    answers: [
      <span>To prevent discrimination against certain voters.</span>,
      <span>Because the government no longer needed to raise money from such taxes.</span>,
      <span>In all elections-state and national.</span>,
      <span>During Reconstruction.</span>
    ],
    correct: 0
  },{
    //Question 11, Correct answer is B
    question: <span>The fourteenth amendment said that all people born in the United States and under its rule are...</span>,
    answers: [
      <span>Residents</span>,
      <span>Citizens</span>,
      <span>Voters</span>,
      <span>Illegal</span>
    ],
    correct: 1
  },{
    //Question 12, Correct answer is A
    question: <span>The eleventh amendment says that states can't be sued by __________ government.</span>,
    answers: [
      <span>Federal</span>,
      <span>State</span>,
      <span>Local</span>,
      <span>Citizens</span>
    ],
    correct: 0
  },{
    //Question 13, Correct answer is C
    question: <span>The seventeenth amendment allows the direct election of ________.</span>,
    answers: [
      <span>President</span>,
      <span>Vice President</span>,
      <span>Senators</span>,
      <span>None of the above.</span>
    ],
    correct: 2
  },{
    //Question 14, Correct answer is D
    question: <span>In what year was the last amendment added to the constitution?</span>,
    answers: [
      <span>1975</span>,
      <span>1980</span>,
      <span>1985</span>,
      <span>1992</span>
    ],
    correct: 3
  },{
    //Question 15, Correct answer is A
    question: <span>How many changes have been made to the constitution?(Amendments)</span>,
    answers: [
      <span>27 Changes</span>,
      <span>32 Changes</span>,
      <span>17 Changes</span>,
      <span>22 Changes</span>
    ],
    correct: 0
  },{
    //Question 16, Correct answer is B
    question: <span>Which amendment states the Inaguaration Day of the President?</span>,
    answers: [
      <span>19th Amendment</span>,
      <span>20th Amendment</span>,
      <span>21st Amendment</span>,
      <span>22nd Amendment</span>
    ],
    correct: 1
  },{
    //Question 17, Correct answer is B
    question: <span>Which amendment deals with income tax laws?</span>,
    answers: [
      <span>15th Amendment</span>,
      <span>16th Ammendment</span>,
      <span>17th Amendment</span>,
      <span>18th Amendment</span>
    ],
    correct: 1
  },{
    //Question 18, Correct answer is B
    question: <span>This amendment explains the process of electing President and Vice President?</span>,
    answers: [
      <span>11th Amendment</span>,
      <span>12th Amendment</span>,
      <span>13th Amendment</span>,
      <span>14th Amendment</span>
    ],
    correct: 1
  },{
    //Question 19, Correct answer is C
    question: <span>This amendment gives women the right vote.</span>,
    answers: [
      <span>17th Amendment</span>,
      <span>18th Amendment</span>,
      <span>19th Amendment</span>,
      <span>20th Amendment</span>
    ],
    correct: 2
  },{
    //Question 20, Correct answer is C
    question: <span>This amendment ended slavery in all states.</span>,
    answers: [
      <span>11th Amendment</span>,
      <span>12th Amendment</span>,
      <span>13th Amendment</span>,
      <span>14th Amendment</span>
    ],
    correct: 2
  },{
    //Question 21, Correct answer is B
    question: <span>This amendment sets the date and time in which the current President's term is over.</span>,
    answers: [
      <span>12th Amendment</span>,
      <span>20th Amendment</span>,
      <span>25th Amendment</span>,
      <span>26th Amendment</span>
    ],
    correct: 1
  },{
    //Question 22, Correct answer is A
    question: <span>What is an IIFE?</span>,
    answers: [
      <span>18th Amendment</span>,
      <span>19th Amendment</span>,
      <span>20th Amendment</span>,
      <span>21st Amendment</span>
    ],
    correct: 0
  },{
    //Question 23, Correct answer is C
    question: <span>This amendment grants citizenship for people of all races and people</span>,
    answers: [
      <span>12th Amendment</span>,
      <span>13th Amendment</span>,
      <span>14th Amendment</span>,
      <span>15th Amendment</span>
    ],
    correct: 2
  },{
    //Question 24, Correct answer is A
    question: <span>This amendment allows people to elect Senators for their states</span>,
    answers: [
      <span>17th Amendment</span>,
      <span>18th Amendment</span>,
      <span>19th Amendment</span>,
      <span>20th Amendment</span>
    ],
    correct: 0
  },{
    //Question 25, Correct answer is C
    question: <span>This amendment gives voting rights to colored people</span>,
    answers: [
      <span>13th Amendment</span>,
      <span>14th Amendment</span>,
      <span>15th Amendment</span>,
      <span>16th Amendment</span>
    ],
    correct: 2
  }
];

export default QUESTION_DATA;
