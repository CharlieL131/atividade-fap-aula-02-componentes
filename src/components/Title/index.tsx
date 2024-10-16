'use client';

import React, { Component, ReactNode } from "react";
import styles from "./Title.module.css";

interface TitleProps {
  children: ReactNode;
}

export default class Title extends Component<TitleProps> {
  render() {
    return <h1 className={styles.title}>{this.props.children}</h1>;
  }
}
