
'use client';

import React, { Component } from "react";
import styles from "./Header.module.css"; 

interface CabecalhoProps {
  title: string; 
  description: string;
}

export default class Cabecalho extends Component<CabecalhoProps> {
  render() {
    const { title, description } = this.props;

    return (
      <header className={styles.cabecalho}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
    );
  }
}
