'use client';

import React, { Component, ReactNode } from "react";
import styles from "./Paragraph.module.css";

interface ParagraphProps {
  children: ReactNode;
}

export default class Paragraph extends Component<ParagraphProps> {
  render() {
    return <p className={styles.paragraph}>{this.props.children}</p>;
  }
}
