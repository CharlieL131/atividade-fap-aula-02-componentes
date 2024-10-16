"use client";

import React, {Component} from "react";
import styles from "./Square.module.css";

export default class Square extends Component{
   render(){
    return <div className={styles.square}></div>;
   };
}