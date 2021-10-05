import React from "react";

import classes from "./activeQuiz.module.scss"
import AnswersList from "./AnswersList/AnswersList";


const activeQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>

            <small> {props.answerNumber} из { props.quizLength}</small>
        </p>

        <AnswersList 
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)
export default activeQuiz