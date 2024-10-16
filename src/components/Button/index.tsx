'use client';

import React, { Component, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export default class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { onClick, children } = this.props; 

    return (
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    );
  }
}
