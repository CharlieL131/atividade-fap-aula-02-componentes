'use client';

import React, { Component } from "react";
import styles from "./Footer.module.css";

interface RodapeProps {
  info: string;
}

export default class Rodape extends Component<RodapeProps> {
  render() {
    const { info } = this.props;

    return (
      <footer className={styles.rodape}>
        <p>{info}</p>
      </footer>
    );
  }
}
